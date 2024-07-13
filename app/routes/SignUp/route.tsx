import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Link, MetaFunction, useActionData, Form } from "@remix-run/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "app/schema/signup.schema";
import { statesData, cityData } from "app/mock/signUpData";
import { signupApi } from "app/api/auth.api";
import { redirect, json } from "@remix-run/node";
import { ActionFunction } from "@remix-run/node";
import { commitSession, getSession } from "app/utils/session.server";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const meta: MetaFunction = () => {
  return [{ title: "SignUp" }, { name: "", content: "" }];
};

interface ActionData {
  success: boolean;
  error?: string;
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const address = formData.get("address1") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const postCode = formData.get("postCode") as string;

  try {
    const response = await signupApi({
      email,
      phone,
      password,
      confirmPassword,
      firstName,
      lastName,
      location: { address, city, state, postCode },
    });

    const { payload } = response.data;
    if (payload) {
      session.set("email", payload.address);

      return redirect("/otp", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }
  } catch (error: any) {
    console.log(error);
    return json({ success: false, error: error.message });
  }
};

export default function SignUp(): JSX.Element {
  const actionData = useActionData<ActionData>();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    setIsSubmitting(true);
    const form = document.getElementById("otpForm") as HTMLFormElement;
    if (form) {
      form.submit();
    }
  };

  React.useEffect(() => {
    if (actionData && actionData.error) {
      setIsSubmitting(false);
      toast.error(actionData.error, {
        toastId: "signupError",
      });
    } else if (actionData && actionData.success) {
      setIsSubmitting(false);
    }
  }, [actionData]);

  return (
    <div className="py-8">
      <ToastContainer containerId="loginToast" />
      <div className="space-y-4 px-2">
        <h1 className="text-2xl md:text-3xl text-dark font-bold text-center">
          Welcome to Promotional Products Now
        </h1>
        <div>
          <p className="text-base md:text-xl text-dark text-center font-semibold">
            Create your account for a smoother website and purchasing experience
          </p>
          <p className="text-center text-dark text-base md:text-xl font-semibold">
            Have an account?{" "}
            <Link to="/login" className="text-orange font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Form
        id="otpForm"
        method="post"
        className="w-full overflow-hidden py-4 px-4 md:py-12 flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full md:w-4/5 xl:w-3/5 2xl:w-2/4 overflow-hidden py-4 md:py-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <p className="text-base font-semibold text-dark">FIRST NAME</p>
              <Input
                type="text"
                variant="underlined"
                isInvalid={!!errors?.firstName?.message}
                labelPlacement="outside"
                size="lg"
                placeholder="Your first name"
                color="primary"
                {...register("firstName")}
                errorMessage={errors?.firstName?.message}
              />
            </div>
            <div className="w-full">
              <p className="text-base font-semibold text-dark">LAST NAME</p>
              <Input
                type="text"
                isInvalid={!!errors?.lastName?.message}
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your last name"
                color="primary"
                {...register("lastName")}
                errorMessage={errors?.lastName?.message}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <p className="text-base font-semibold text-dark">EMAIL ADDRESS</p>
              <Input
                type="email"
                isInvalid={!!errors?.email?.message}
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your email"
                color="primary"
                {...register("email")}
                errorMessage={errors?.email?.message}
              />
            </div>
            <div className="w-full">
              <p className="text-base font-semibold text-dark">PHONE</p>
              <Input
                type="text"
                isInvalid={!!errors?.phone?.message}
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your phone"
                color="primary"
                {...register("phone")}
                errorMessage={errors?.phone?.message}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <p className="text-base font-semibold text-dark">PASSWORD</p>
              <Input
                type="password"
                variant="underlined"
                isInvalid={!!errors?.password?.message}
                labelPlacement="outside"
                size="lg"
                placeholder="Your password"
                color="primary"
                {...register("password")}
                errorMessage={errors?.password?.message}
              />
            </div>
            <div className="w-full">
              <p className="text-base font-semibold text-dark">REPEAT PASSWORD</p>
              <Input
                type="password"
                variant="underlined"
                isInvalid={!!errors?.confirmPassword?.message}
                labelPlacement="outside"
                size="lg"
                placeholder="Confirm password"
                color="primary"
                {...register("confirmPassword")}
                errorMessage={errors?.confirmPassword?.message}
              />
            </div>
          </div>

          <div className="w-full">
            <p className="text-base font-semibold text-dark">ADDRESS 1</p>
            <Input
              type="text"
              variant="underlined"
              isInvalid={!!errors?.address1?.message}
              labelPlacement="outside"
              size="lg"
              placeholder="Your complete address"
              color="primary"
              {...register("address1")}
              errorMessage={errors?.address1?.message}
            />
          </div>

          <div className="w-full">
            <p className="text-base font-semibold text-dark">ADDRESS 2</p>
            <Input
              type="text"
              variant="underlined"
              labelPlacement="outside"
              size="lg"
              placeholder="Your complete address"
              color="primary"
              {...register("address2")}
              errorMessage={errors?.address2?.message}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="w-full">
              <p className="text-base font-semibold text-dark">SUBURB</p>
              <Select
                aria-label="city"
                isInvalid={!!errors?.city?.message}
                variant="underlined"
                placeholder="Your suburb"
                color="primary"
                size="lg"
                {...register("city")}
                errorMessage={errors?.city?.message}
              >
                {cityData.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="w-full">
              <p className="text-base font-semibold text-dark">STATE</p>
              <Select
                aria-label="state"
                variant="underlined"
                placeholder="Your state"
                isInvalid={!!errors?.state?.message}
                color="primary"
                size="lg"
                {...register("state")}
                errorMessage={errors?.state?.message}
              >
                {statesData.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold text-dark">POST CODE</p>
            <Input
              type="text"
              variant="underlined"
              isInvalid={!!errors?.postCode?.message}
              labelPlacement="outside"
              size="lg"
              placeholder="Your post code"
              color="primary"
              {...register("postCode")}
              errorMessage={errors?.postCode?.message}
            />
          </div>
          <div className="py-6 w-full">
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="font-semibold w-full"
              size="lg"
              radius="none"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Your Account..." : "CREATE YOUR ACCOUNT"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
