import React from 'react'
import { Link, Form, MetaFunction } from "@remix-run/react";
import { Input, Button, Checkbox, Divider } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from 'app/schema/login.schema';

export const meta: MetaFunction = () => {
  return [{ title: "Login" }, { name: "", content: "" }];
};

export default function Login(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = (data: LoginSchema) => {
    console.log(data);

  }
  return (
    <div>
      <div className="py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl text-dark  font-bold text-center">
          Login your account
        </h1>
        <p className="mt-4 text-lg font-semibold text-dark text-center">Fill your account details below</p>

        <div className="flex flex-col justify-center items-center px-6">
          <div className="md:px-2 py-6  w-full md:w-2/5">
            <Form method="post">
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

                <div className="py-6  w-full">
                  <Button
                    type="submit"
                    variant="solid"
                    color="primary"
                    className="font-semibold w-full"
                    size="lg"
                    radius="none"
                    onClick={handleSubmit(onSubmit)}
                  >
                    LOGIN
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
