import { Form } from "@remix-run/react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SendPriceSchema } from "app/schema/sendPrice.schema";

export function SendPriceModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SendPriceSchema),
  });

  const onSubmit = (data: SendPriceSchema) => {
    console.log(data);
  };

  return (
    <Modal size="xl" isOpen={isOpen} radius="none" onOpenChange={onOpenChange}>
      <ModalContent className="justify-center">
        <ModalHeader className="justify-center">Send Pricing</ModalHeader>
        <ModalBody>
          <div className="flex flex-col space-y-3">
            <span className="text-center text-sm text-gray">Fill your personal details below</span>
            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="FIRST NAME"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                  isInvalid={!!errors.firstName?.message}
                  variant="underlined"
                  classNames={{
                    inputWrapper: "bg-white space-y-4",
                  }}
                />
                <Input
                  type="text"
                  label="LAST NAME"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                  isInvalid={!!errors.lastName?.message}
                  variant="underlined"
                  classNames={{
                    inputWrapper: "bg-white space-y-4",
                  }}
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  {...register("email")}
                  isInvalid={!!errors.email?.message}
                  variant="underlined"
                  classNames={{
                    inputWrapper: "bg-white space-y-4",
                  }}
                />
                <Input
                  type="text"
                  label="PHONE"
                  placeholder="Enter your phone number"
                  {...register("phone")}
                  isInvalid={!!errors.phone?.message}
                  variant="underlined"
                  classNames={{
                    inputWrapper: "bg-white space-y-4",
                  }}
                />
              </div>
              <div className="py-3">
                <Button type="submit" fullWidth radius="none" color="primary">
                  Send
                </Button>
              </div>
            </Form>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
