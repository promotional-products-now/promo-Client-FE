import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Link, Form } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "app/schema/signup.schema";
import { statesData, cityData } from "app/mock/signUpData";
import { SEOHandle } from "@nasa-gcn/remix-seo";

export const handle: SEOHandle = {
  getSitemapEntries: () => null,
};

export default function EditAccount(): JSX.Element {
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
        <div className="space-y-4 px-2">
          <h1 className="text-xl md:text-4xl text-dark font-bold text-center">
            Edit Account Information
          </h1>
        </div>

        <Form
          method="post"
          className="w-full  overflow-hidden py-4 px-4 md:py-12 flex flex-col items-center justify-center"
        >
          <div className="w-full md:w-4/5 xl:w-3/5 2xl:w-2/4  overflow-hidden py-4 md:py-8 space-y-4">
            <div className="flex flex-col sm:flex-row  gap-4 ">
              <div className="w-full">
                <p className="text-base font-bold text-dark">FIRST NAME</p>
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
                <p className="text-base font-bold text-dark">LAST NAME</p>
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

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <p className="text-base font-bold text-dark">EMAIL ADDRESS</p>
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
                <p className="text-base font-bold text-dark">PHONE</p>
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

            <div className="flex flex-col sm:flex-row gap-4 ">
              <div className="w-full">
                <p className="text-base font-bold text-dark">PASSWORD</p>
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
                <p className="text-base  font-bold text-dark">REPEAT PASSWORD</p>
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
              <p className="text-base font-bold text-dark">ADDRESS 1</p>
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
              <p className="text-base font-bold text-dark">ADDRESS 2</p>
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
                <p className="text-base font-bold text-dark">CITY</p>{" "}
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
                <p className="text-base font-bold text-dark">STATE</p>
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

            <div>
              <p className="text-base font-bold text-dark">POST CODE</p>
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

            <div className="py-8 w-full mx-auto flex flex-wrap md:flex-nowrap justify-between gap-8">
              <Button
                type="submit"
                variant="solid"
                className="bg-yellow text-white font-bold w-full"
                size="lg"
                radius="none"
              >
                <Link to="/account">Back to Account</Link>
              </Button>
              <Button
                type="submit"
                variant="solid"
                color="primary"
                className="font-bold w-full"
                size="lg"
                radius="none"
                onClick={handleSubmit(onSubmit)}
              >
                Update Details
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
