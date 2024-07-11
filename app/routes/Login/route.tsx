import React, { useEffect, useState } from "react";
import { Link, Form, MetaFunction, useActionData } from "@remix-run/react";
import { Input, Button, Checkbox, Divider } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "app/schema/login.schema";
import { json, redirect } from "@remix-run/node";
import { loginApi } from "app/api/auth.api";
import { ActionFunction } from "@remix-run/node";
import { getSession, commitSession } from "../../sessions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const meta: MetaFunction = () => {
  return [{ title: "Login" }, { name: "", content: "" }];
};

interface ActionData {
  success: boolean;
  error?: string;
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await loginApi({ email, password });

    const { accessToken, _id, email: emailAddress } = response.data.payload;

    session.set("uid", _id);
    session.set("email", emailAddress.address);
    session.set("accessToken", accessToken);

    return redirect("/otp", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error: any) {
    // console.log(error);
    return json({ success: false, error: error.message } as ActionData);
  }
};

export default function Login(): JSX.Element {
  const actionData = useActionData<ActionData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    const form = document.getElementById("loginForm") as HTMLFormElement;

    if (form) {
      // e.preventDefault();
      // const formData = new FormData(form);
      // formData.append("otp", data.otp);

      form.submit();
    }
    // The form submission is handled by Remix <Form>, no additional logic needed here
  };

  useEffect(() => {
    if (actionData && actionData.error) {
      setIsSubmitting(false);
      toast.error(actionData.error, {
        toastId: "loginError",
      });
    } else if (actionData && actionData.success) {
      setIsSubmitting(false);
    }
  }, [actionData]);

  return (
    <div>
      <ToastContainer />
      <div className="py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl text-dark font-bold text-center">
          Login to your account
        </h1>
        <p className="mt-4 text-lg font-semibold text-dark text-center">
          Fill your account details below
        </p>

        <div className="flex flex-col justify-center items-center px-6">
          <div className="md:px-2 py-6 w-full md:w-2/5">
            <Form id="loginForm" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="py-4 md:py-12 flex flex-col justify-center items-center space-y-6">
                <div className="w-full">
                  <Input
                    type="email"
                    label="EMAIL ADDRESS"
                    variant="underlined"
                    labelPlacement="outside"
                    size="lg"
                    placeholder="Your Email"
                    className="w-full text-base text-dark font-semibold"
                    color="primary"
                    {...register("email")}
                    errorMessage={errors?.email?.message}
                  />
                </div>

                <div className="w-full">
                  <Input
                    type="password"
                    label="PASSWORD"
                    variant="underlined"
                    labelPlacement="outside"
                    size="lg"
                    placeholder="Your Password"
                    className="w-full text-base text-dark font-semibold"
                    color="primary"
                    {...register("password")}
                    errorMessage={errors?.password?.message}
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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "LOGIN"}
                  </Button>
                </div>

                <div className="py-4 w-full flex justify-between items-center gap-2">
                  <Checkbox
                    className="text-dark md:text-lg font-medium"
                    color="primary"
                    radius="none"
                  >
                    Remember me
                  </Checkbox>
                  <Link to="/forgot-password" className="text-dark text-sm md:text-lg font-medium">
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </Form>

            <Divider className="my-4" />
            <div className="py-2">
              <p className="text-center text-dark text-sm md:text-base font-medium">
                You don’t have an account?{" "}
                <Link to="/signup" className="text-orange font-bold">
                  Create an account
                </Link>
              </p>
            </div>
            <Divider className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
