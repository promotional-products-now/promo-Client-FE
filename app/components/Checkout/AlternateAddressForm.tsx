import { Checkbox } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckoutAlternateSchema } from "app/schema/checkout.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { AlternateValidId } from "./ValidId";

interface AlternateAddressProps {
  isAlternateAddressValid: boolean;
  setIsAlternateAddressValid: (isSelected: boolean) => void;
}

const options = [
  { value: "low-high", label: "low to high" },
  { value: "high", label: "High" },
  { value: "new", label: "New" },
];

const AlternateAddressForm = ({
  isAlternateAddressValid,
  setIsAlternateAddressValid,
}: AlternateAddressProps) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CheckoutAlternateSchema>({
    resolver: yupResolver(CheckoutAlternateSchema),
  });

  const alternatestate = watch("alternatestate");
  const alternatecountry = watch("alternatecountry");

  const setCustomValue = (id: AlternateValidId, value: string) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="flex flex-col flex-1 w-full ">
      <div className="flex flex-row gap-2 border-b border-gray w-full mb-5 py-4">
        <Checkbox
          isSelected={isAlternateAddressValid}
          onValueChange={setIsAlternateAddressValid}
          defaultSelected
          size="sm"
        ></Checkbox>
        <h1 className="text-xl">Send Billing to Different Address</h1>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1">
          <Input
            variant="bordered"
            size="sm"
            placeholder="First Name"
            className=" bg-transparent w-full overflow-hidden"
            {...register("alternatefirstName")}
            isInvalid={!!errors.alternatefirstName}
            errorMessage={errors.alternatefirstName && errors.alternatefirstName.message}
            isRequired
          />

          <Input
            variant="bordered"
            size="sm"
            placeholder="Last Name"
            className=" bg-transparent w-full overflow-hidden"
            {...register("alternatelastName")}
            isInvalid={!!errors.alternatelastName}
            errorMessage={errors.alternatelastName && errors.alternatelastName.message}
            isRequired
          />
        </div>

        <Input
          variant="bordered"
          size="sm"
          placeholder="Company Name"
          className=" bg-transparent w-full overflow-hidden"
          {...register("alternatecompanyName")}
          isInvalid={!!errors.alternatecompanyName}
          errorMessage={errors.alternatecompanyName && errors.alternatecompanyName.message}
          isRequired
        />

        <Input
          variant="bordered"
          size="sm"
          placeholder="Apartment, Suite, Unit, etc"
          className=" bg-transparent w-full overflow-hidden"
          {...register("alternateapartment")}
          isInvalid={!!errors.alternateapartment}
          errorMessage={errors.alternateapartment && errors.alternateapartment.message}
          isRequired
        />

        <Input
          variant="bordered"
          size="sm"
          placeholder="Street Address"
          className=" bg-transparent w-full overflow-hidden"
          {...register("alternateaddress")}
          isInvalid={!!errors.alternateaddress}
          errorMessage={errors.alternateaddress && errors.alternateaddress.message}
          isRequired
        />

        <Input
          variant="bordered"
          size="sm"
          placeholder="Suburb"
          className=" bg-transparent w-full overflow-hidden"
          {...register("alternatesubUrb")}
          isInvalid={!!errors.alternatesubUrb}
          errorMessage={errors.alternatesubUrb && errors.alternatesubUrb.message}
          isRequired
        />

        <Select
          selectedKeys={[alternatestate]}
          onChange={(selection) => {
            setCustomValue("alternatestate", selection.target.value);
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
          {...register("alternatepostalCode")}
          isInvalid={!!errors.alternatepostalCode}
          errorMessage={errors.alternatepostalCode && errors.alternatepostalCode.message}
          isRequired
        />

        <Select
          selectedKeys={[alternatecountry]}
          onChange={(selection) => {
            setCustomValue("alternatecountry", selection.target.value);
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
          {...register("alternatedelivery")}
          isInvalid={!!errors.alternatedelivery}
          errorMessage={errors.alternatedelivery && errors.alternatedelivery.message}
          isRequired
        />

        <Input
          variant="bordered"
          size="sm"
          placeholder="alternateemail"
          className=" bg-transparent w-full overflow-hidden"
          {...register("alternateemail")}
          isInvalid={!!errors.alternateemail}
          errorMessage={errors.alternateemail && errors.alternateemail.message}
          isRequired
        />
      </div>
    </div>
  );
};

export default AlternateAddressForm;
