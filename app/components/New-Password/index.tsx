import { Form, Link, MetaFunction, useNavigate } from "@remix-run/react";
import { Input, Button } from "@nextui-org/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { newPasswordSchema } from "app/schema/newPassword.schema";
import { useState } from "react";
import { changePassword } from "app/api/auth.api";
import { toast, ToastContainer } from "react-toastify";

export default function NewPassword({
  email,
  accessToken,
  uid,
}: {
  email: string;
  accessToken: string;
  uid: string;
}): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newPasswordSchema>({
    resolver: yupResolver(newPasswordSchema),
  });
  const onSubmit = async (data: newPasswordSchema) => {
    setIsSubmitting(true);
    console.log(data);
    await changePassword({
      email,
      password: data.newPassword,
      confirmPassword: data.confirmPassword,
      headers: {
        accessToken,
        uid,
      },
    })
      .then(() => {
        toast.error("Password has been changed");
        setTimeout(() => setIsSubmitting(false), 1000);
        navigate("/login");
      })
      .catch((err) => {
        toast.error("An error occured while trying to change password");
        setIsSubmitting(false);
      });
  };
  return (
    <>
      <ToastContainer containerId="new-password" />
      <div className="py-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl text-dark font-bold text-center">Change Password</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-4 md:py-12 flex flex-col items-center justify-center">
            <div className="py-2 w-full md:w-1/2">
              <p className="text-base md:text-lg text-dark font-semibold">NEW PASSWORD</p>
              <Input
                type="password"
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Enter Your New Password"
                color="primary"
                {...register("newPassword")}
                errorMessage={errors?.newPassword?.message}
              />
            </div>

            <div className="py-2 w-full md:w-1/2">
              <p className="text-base md:text-lg text-dark font-semibold">CONFIRM PASSWORD</p>
              <Input
                type="password"
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Enter Your Password"
                color="primary"
                {...register("confirmPassword")}
                errorMessage={errors?.confirmPassword?.message}
              />
            </div>

            <div className="py-8 w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-8">
              <Button
                type="submit"
                variant="solid"
                className="bg-yellow text-white font-bold w-full"
                size="lg"
                radius="none"
                startContent={<FaArrowLeft className="text-xl" />}
              >
                <Link to="/">Back to Account</Link>
              </Button>
              <Button
                type="submit"
                variant="solid"
                color="primary"
                className="font-bold w-full"
                size="lg"
                radius="none"
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
                endContent={<FaArrowRight className="text-xl" />}
              >
                Update Password
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
