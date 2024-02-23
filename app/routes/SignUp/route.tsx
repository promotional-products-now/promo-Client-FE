import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Link, Form } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "app/schema/signup.schema";
import { statesData, cityData } from "app/mock/signUpData";

export default function SignUp(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpSchema) => {
    console.log(data);
  };

  return (
    <>
      <div className="py-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl text-dark font-bold text-center">
            Welcome to Promotional Products Now
          </h1>
          <p className="text-lg md:text-xl text-dark text-center">
            Create your account for a smoother website and purchasing experience
          </p>
          <p className="text-center text-dark text-sm md:text-base">
            Have an account?{" "}
            <Link to="/login" className="text-orange font-bold">
              Login
            </Link>
          </p>
        </div>

        <Form
          method="post"
          className="w-full  overflow-hidden py-4 md:py-12 flex flex-col items-center justify-center"
        >
          <div className="w-full md:w-4/5 xl:w-3/5 2xl:w-2/4  overflow-hidden py-4 md:py-12">
            <div className="flex flex-col sm:flex-row  gap-4 py-2">
              <div className="w-full">
                <p className="text-base md:text-lg text-dark">FIRST NAME</p>
                <Input
                  type="text"
                  variant="underlined"
                  labelPlacement="outside"
                  size="lg"
                  placeholder="Your first name"
                  color="primary"
                  {...register("firstName")}
                  errorMessage={errors?.firstName?.message}
                />
              </div>
              <div className="w-full">
                <p className="text-base md:text-lg text-dark">LAST NAME</p>
                <Input
                  type="text"
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

            <div className="flex flex-col sm:flex-row gap-4 py-2">
              <div className="w-full">
                <p className="text-base md:text-lg text-dark">EMAIL ADDRESS</p>
                <Input
                  type="email"
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
                <p className="text-base md:text-lg text-dark">PHONE</p>
                <Input
                  type="text"
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

            <div className="flex flex-col sm:flex-row gap-4 py-2">
              <div className="w-full">
                <p className="text-base md:text-lg text-dark">PASSWORD</p>
                <Input
                  type="password"
                  variant="underlined"
                  labelPlacement="outside"
                  size="lg"
                  placeholder="Your password"
                  color="primary"
                  {...register("password")}
                  errorMessage={errors?.password?.message}
                />
              </div>
              <div className="w-full">
                <p className="text-base  md:text-lg text-dark">REPEAT PASSWORD</p>
                <Input
                  type="password"
                  variant="underlined"
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
              <p className="text-base md:text-lg text-dark">ADDRESS 1</p>
              <Input
                type="text"
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your complete address"
                color="primary"
                {...register("address1")}
                errorMessage={errors?.address1?.message}
              />
            </div>

            <div className="w-full">
              <p className="text-base md:text-lg text-dark">ADDRESS 2</p>
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

            <div className="flex flex-col sm:flex-row gap-4 py-2 w-full">
              <div className="w-full">
                <p className="text-base md:text-lg text-dark">CITY</p>{" "}
                <Select
                  aria-label="city"
                  variant="underlined"
                  placeholder="Your city"
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
                <p className="text-base md:text-lg text-dark">STATE</p>
                <Select
                  aria-label="state"
                  variant="underlined"
                  placeholder="Your state"
                  color="primary"
                  size="lg"
                  {...register("state")}
                  errorMessage={errors?.state?.message}
                >
                  {statesData.map((states) => (
                    <SelectItem key={states.value} value={states.value}>
                      {states.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <div className="py-2 ">
              <p className="text-base md:text-lg text-dark">POST CODE</p>
              <Input
                type="text"
                variant="underlined"
                labelPlacement="outside"
                size="lg"
                placeholder="Your post code"
                color="primary"
                {...register("postCode")}
                errorMessage={errors?.postCode?.message}
              />
            </div>
            <div className="py-6 w-full ">
              <Button
                type="submit"
                variant="solid"
                color="primary"
                className="font-bold w-full"
                size="lg"
                radius="none"
                onClick={handleSubmit(onSubmit)}
              >
                CREATE YOUR ACCOUNT
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
