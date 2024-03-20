import { Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckoutSchema } from "app/schema/checkout.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Image, Input, Link, Divider } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { MetaFunction } from "@remix-run/node";
import { GoUpload } from "react-icons/go";
import { Textarea } from "@nextui-org/react";
import { SiVisa, SiAmericanexpress } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";
import AlternateAddressForm from "app/components/Checkout/AlternateAddressForm";
import CheckoutOrder from "app/components/Checkout/CheckoutOrder";
import { ValidId } from "app/components/Checkout/ValidId";

export const meta: MetaFunction = () => {
  return [{ title: "Checkout" }, { name: "", content: "" }];
};


const options = [
  { value: "low-high", label: "low to high" },
  { value: "high", label: "High" },
  { value: "new", label: "New" },
];



const CheckoutPage = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isAnz, setANz] = useState<boolean>(false);
  const [isLatitudePay, setLatitudePay] = useState<boolean>(false);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [isToDifferentAddress, setIsToDifferentAddress] = useState<boolean>(false);

  console.log(`isSelected`, isSelected);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    resolver: yupResolver(CheckoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      apartment: "",
      address: "",
      suburb: "",
      state: "",
      postalCode: 2345,
      country: "",
      delivery: "",
      email: "",
      image: "",
    },
  });

  const state = watch("state");
  const country = watch("country");

  const setCustomValue = (id: ValidId, value: string) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<CheckoutSchema> = (data) => {
    if (!isAgreed) return;

    console.log(`data`, data);

    reset();
  };

  return (
    <div className="flex flex-col gap-3 w-full mx-auto py-10 lg:px-5 lg:w-4/5">
      <h1 className="text-center font-semibold md:text-3xl text-2xl mb-3">Checkout</h1>

      <div className="flex md:flex-row flex-col gap-3 items-center justify-between">
        <div className="flex-1 gap-3 w-full  ">
          <div className="border-b border-gray w-full mb-5 py-4">
            <div className="text-xl">Delivery Address</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <Input
                variant="bordered"
                size="sm"
                placeholder="First Name"
                className=" bg-transparent w-full overflow-hidden"
                {...register("firstName")}
                isInvalid={!!errors.firstName}
                errorMessage={errors.firstName && errors.firstName.message}
                isRequired
              />

              <Input
                variant="bordered"
                size="sm"
                placeholder="Last Name"
                className=" bg-transparent w-full overflow-hidden"
                {...register("lastName")}
                isInvalid={!!errors.lastName}
                errorMessage={errors.lastName && errors.lastName.message}
                isRequired
              />
            </div>

            <Input
              variant="bordered"
              size="sm"
              placeholder="Company Name"
              className=" bg-transparent w-full overflow-hidden"
              {...register("companyName")}
              isInvalid={!!errors.companyName}
              errorMessage={errors.companyName && errors.companyName.message}
              isRequired
            />

            <Input
              variant="bordered"
              size="sm"
              placeholder="Apartment, Suite, Unit, etc"
              className=" bg-transparent w-full overflow-hidden"
              {...register("apartment")}
              isInvalid={!!errors.apartment}
              errorMessage={errors.apartment && errors.apartment.message}
              isRequired
            />

            <Input
              variant="bordered"
              size="sm"
              placeholder="Street Address"
              className=" bg-transparent w-full overflow-hidden"
              {...register("address")}
              isInvalid={!!errors.address}
              errorMessage={errors.address && errors.address.message}
              isRequired
            />

            <Input
              variant="bordered"
              size="sm"
              placeholder="Suburb"
              className=" bg-transparent w-full overflow-hidden"
              {...register("suburb")}
              isInvalid={!!errors.suburb}
              errorMessage={errors.suburb && errors.suburb.message}
              isRequired
            />

            <Select
              selectedKeys={[state]}
              onChange={(selection) => {
                setCustomValue("state", selection.target.value);
              }}
              variant="bordered"
              isRequired
              label="Select your State"
              color="default"
              className="w-full text-center"
            >
              {options.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              variant="bordered"
              size="sm"
              placeholder="2546"
              className=" bg-transparent w-full overflow-hidden"
              {...register("postalCode")}
              isInvalid={!!errors.postalCode}
              errorMessage={errors.postalCode && errors.postalCode.message}
              isRequired
            />

            <Select
              selectedKeys={[country]}
              onChange={(selection) => {
                setCustomValue("country", selection.target.value);
              }}
              variant="bordered"
              isRequired
              label="Australia"
              color="default"
              className="w-full text-center"
            >
              {options.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              variant="bordered"
              size="sm"
              placeholder="Special Delivery Instructions"
              className=" bg-transparent w-full overflow-hidden"
              {...register("delivery")}
              isInvalid={!!errors.delivery}
              errorMessage={errors.delivery && errors.delivery.message}
              isRequired
            />

            <Input
              variant="bordered"
              size="sm"
              placeholder="Email"
              className=" bg-transparent w-full overflow-hidden"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email && errors.email.message}
              isRequired
            />
          </div>
        </div>

        <AlternateAddressForm
          isAlternateAddressValid={isToDifferentAddress}
          setIsAlternateAddressValid={setIsToDifferentAddress}
        />
      </div>

      <CheckoutOrder />

      <div className="mt-5 flex flex-col gap-4 ">
        <h1 className="text-start w-full text-black font-bold text-xl py-5 border-b border-primary">
          Upload Artwork{" "}
        </h1>

        <div className="flex md:flex-row flex-col items-center gap-6 ">
          <div className="relative w-full bg-white-bg justify-center items-center ">
            <input
              type="file"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                setCustomValue("image", e.target.value);
              }}
            />

            <div className="flex flex-col justify-center gap-3 items-center py-11 h-full w-full ">
              <GoUpload size={45} />
              <div className="text-xl text-black">Choose or drag a file here</div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <Textarea
              required
              radius="none"
              variant="bordered"
              placeholder="Artwork Branding Instructions"
              className="w-full"
              minRows={5}
            />

            <Button className="bg-primary text-white px-4 py-3 w-1/3" radius="sm" variant="solid">
              Upload
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xl py-5 border-b border-primary">Payment</div>
        <div className="mt-5 flex-col flex bg-white-bg py-5 px-5 gap-6 ">
          <div className="flex flex-col gap-3">
            <div className="flex text-base sm:text-xl items-center gap-4 mb-3">
              <div className="flex gap-2 ">
                <Checkbox
                  defaultSelected
                  size="sm"
                  isSelected={isSelected}
                  onValueChange={setIsSelected}
                ></Checkbox>
                <h2 className="font-semibold">ANZ eGate</h2>
              </div>

              <div className="flex flex-row gap-3 justify-around items-center text-base sm:text-5xl">
                <SiVisa className="text-purple-900  " />
                <RiMastercardLine className="" />
                <SiAmericanexpress className="text-primary font-bold " />
              </div>
            </div>

            <div className="text-sm">Pay with credit card via ANZ eGate</div>
          </div>

          <div className="flex flex-col gap-4 border-b border-gray pb-4">
            <div className="">
              <label className="text-sm text-gray">Name on card</label>
              <Input
                size="sm"
                placeholder="Esther Howard"
                className=" bg-transparent w-full overflow-hidden"
                isInvalid={!!errors.email}
                errorMessage={errors.email && errors.email.message}
                isRequired
              />
            </div>

            <div className="">
              <label className="text-sm text-gray">Card number</label>
              <Input
                size="sm"
                placeholder="123-456-789"
                className=" bg-transparent w-full overflow-hidden"
                isInvalid={!!errors.email}
                errorMessage={errors.email && errors.email.message}
                isRequired
              />
            </div>

            <div className="flex gap-3">
              <div className="w-full">
                <label className="text-sm text-gray">Expiry date</label>
                <Input
                  size="sm"
                  placeholder="MM / YY"
                  className=" bg-transparent w-full overflow-hidden"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email && errors.email.message}
                  isRequired
                />
              </div>

              <div className="w-full">
                <label className="text-sm text-gray">CVV</label>
                <Input
                  size="sm"
                  placeholder="..."
                  className=" bg-transparent w-full overflow-hidden"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email && errors.email.message}
                  isRequired
                />
              </div>
            </div>

            <Checkbox isSelected={isAnz} onValueChange={setANz} defaultSelected size="sm">
              ANZ eGate
            </Checkbox>
            <Checkbox
              isSelected={isLatitudePay}
              onValueChange={setLatitudePay}
              defaultSelected
              size="sm"
            >
              LatitudePay
            </Checkbox>
          </div>

          <div className="">
            Your personal data will be used to process your order, support your experience
            throughout this website and for other purposes described in our{" "}
            <span className="text-orange">privacy policy</span>
          </div>
          <div className="flex flex-row items-center">
            <Checkbox
              isRequired
              isSelected={isAgreed}
              onValueChange={setIsAgreed}
              size="sm"
            ></Checkbox>

            <div className="">
              I have read and agreed to the website’s{" "}
              <span className="text-orange">terms and conditions</span>
            </div>

            <div className="text-sm ml-3 text-primary">
              {isAgreed ? "" : "Please accept terms and condition"}
            </div>
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="bg-primary text-white px-4 py-3 md:w-1/4 w-2/4"
            variant="solid"
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
