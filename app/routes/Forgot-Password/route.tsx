import { useState } from "react";
import { Input, Button, Divider } from "@nextui-org/react";
import { Form, Link, MetaFunction } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "app/schema/forgotPassword.schema";

export const meta: MetaFunction = () => {
  return [{ title: "Forgot Password" }, { name: "", content: "" }];
};

export default function ForgotPassword(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordSchema) => {
    setIsSubmitting(true);
    console.log(data);
  };
  return (
    <>
      <div className="py-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl text-dark font-bold text-center">
            Forgot your password?
          </h1>
          <p className="text-lg md:text-xl text-dark text-center font-semibold">
            Please enter the email you use to login
          </p>
        </div>
        <div className="w-full">
          <Form method="post">
            <div className="py-4 md:py-12 px-6 flex flex-col items-center justify-center">
              <div className="py-2 w-full md:w-1/2">
                <p className="text-base md:text-lg text-dark font-semibold">EMAIL ADDRESS</p>
                <Input
                  type="email"
                  variant="underlined"
                  labelPlacement="outside"
                  size="lg"
                  placeholder="Your email"
                  color="primary"
                  isInvalid={!!errors?.email?.message}
                  {...register("email")}
                  errorMessage={errors?.email?.message}
                />
              </div>

              <div className="py-8 w-full md:w-1/2 flex flex-col justify-between  gap-8">
                <Button
                  type="submit"
                  variant="solid"
                  color="primary"
                  className="font-bold w-full"
                  size="lg"
                  radius="none"
                  onClick={handleSubmit(onSubmit)}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Resetting Password..." : "Request Password Reset"}
                </Button>
                <Link
                  to="/login"
                  className="flex justify-center items-center text-lg text-yellow p-3 md:p-2 font-bold w-full"
                >
                  Back to Login
                </Link>
                <Divider className="my-2" />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
