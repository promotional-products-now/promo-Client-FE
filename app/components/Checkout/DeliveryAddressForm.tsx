// DeliveryAddressForm.tsx
import { Input, Select, SelectItem } from "@nextui-org/react";
import { UseFormRegister, FieldValues, SubmitHandler } from "react-hook-form";


interface DeliveryAddressFormProps {
  register: UseFormRegister<FieldValues>;
  errors: Record<string, any>;
  setCustomValue: (id: string, value: string) => void;
  options: { value: string; label: string }[];
}

const DeliveryAddressForm: React.FC<DeliveryAddressFormProps> = ({ register, errors, setCustomValue, options }) => {
  // ... (similar to the code inside the first section of CheckoutPage)
  return (
    <div className="flex-1 gap-3 w-full  ">
      <div className="border-b border-gray w-full mb-5 py-4">
        <div className="text-xl">Delivery Address</div>
      </div>

      <div className="flex flex-col gap-2">
        {/* ... Other input fields ... */}

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
          isInvalid={!!errors.email}
          errorMessage={errors.email && errors.email.message}
          isRequired
        />

        <Input
          variant="bordered"
          size="sm"
          placeholder="Last Name"
          className=" bg-transparent w-full overflow-hidden"
          {...register("lastName")}
          isInvalid={!!errors.email}
          errorMessage={errors.email && errors.email.message}
          isRequired
        />
      </div>

      <Input
        variant="bordered"
        size="sm"
        placeholder="Company Name"
        className=" bg-transparent w-full overflow-hidden"
        {...register("companyName")}
        isInvalid={!!errors.email}
        errorMessage={errors.email && errors.email.message}
        isRequired
      />

      <Input
        variant="bordered"
        size="sm"
        placeholder="Apartmnet, Suite, Unit, etc"
        className=" bg-transparent w-full overflow-hidden"
        {...register("apartment")}
        isInvalid={!!errors.email}
        errorMessage={errors.email && errors.email.message}
        isRequired
      />

      <Input
        variant="bordered"
        size="sm"
        placeholder="Street Address"
        className=" bg-transparent w-full overflow-hidden"
        {...register("address")}
        isInvalid={!!errors.email}
        errorMessage={errors.email && errors.email.message}
        isRequired
      />

      <Input
        variant="bordered"
        size="sm"
        placeholder="Suburb"
        className=" bg-transparent w-full overflow-hidden"
        {...register("suburb")}
        isInvalid={!!errors.email}
        errorMessage={errors.email && errors.email.message}
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
        isInvalid={!!errors.email}
        errorMessage={errors.email && errors.email.message}
        isRequired
      />

      <Select
        selectedKeys={[country]}
        onChange={(selection) => {
          setCustomValue("country", selection.target.value);
        }}
        variant="bordered"
        isRequired
        label="Austerlia"
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
        isInvalid={!!errors.email}
        errorMessage={errors.email && errors.email.message}
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
  </div>;
};

export default DeliveryAddressForm;
