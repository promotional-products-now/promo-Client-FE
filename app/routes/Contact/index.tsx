import { Button, Input, Textarea } from "@nextui-org/react";
import { Form, Link } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "app/schema/contactus.schema";
import { Select, SelectItem } from "@nextui-org/react";
import { LocationDetails } from "app/contents/contactLoactions";

const ContactUS = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsSchema>({
    resolver: yupResolver(ContactUsSchema),
  });

  const onSubmit = (data: ContactUsSchema) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center py-10 px-5 mx-auto md:px-5 md:w-[80%]">
      <b className="text-xl font-extrabold capitalize">contact us</b>
      <div className="grid grid-cols-1 gap-5 py-10 [&_p]:text-sm [&_p]:text-gray lg:grid-cols-3">
        <div className="flex flex-col gap-5">
          <div className="mb-2">
            <b className="capitalize">give out team a call</b>
            <p>We are happy to hear how we can help you out.</p>
          </div>
          {LocationDetails.map((data) => (
            <div key={data.id} className="flex gap-3">
              <Link
                to={data.href}
                className={
                  data.href == "" ? "flex gap-3 cursor-default" : "flex gap-3 hover:[&_p]:underline"
                }
              >
                <div>
                  <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center border border-yellow">
                    <data.icon className="text-primary" />
                  </div>
                </div>
                <div>
                  <span className="text-sm text-yellow uppercase">{data.title}</span>
                  <p>{data.body}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-between lg:flex-row">
            <div>
              <b className="capitalize">How can we help you?</b>
              <p>Fill your information below to contact us</p>
            </div>
            <span className="text-yellow">Promotional Merchandise at Guaranteed Lowest Prices</span>
          </div>
          <Form method="post">
            <div className="w-full flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-x-4 gap-y-9 md:grid-cols-2">
                <Input
                  type="text"
                  variant="underlined"
                  label="Name"
                  {...register("name")}
                  errorMessage={errors?.name?.message}
                />

                <Input
                  type="email"
                  variant="underlined"
                  label="Email"
                  {...register("email")}
                  errorMessage={errors?.email?.message}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Phone"
                  {...register("phone")}
                  errorMessage={errors?.phone?.message}
                />
                <Select
                  variant="underlined"
                  label="Subject"
                  className="max-w-xs"
                  {...register("subject")}
                  errorMessage={errors?.subject?.message}
                >
                  <SelectItem key="one" value={"one"}>
                    Subject one
                  </SelectItem>
                  <SelectItem key="tow" value={"two"}>
                    Subject two
                  </SelectItem>
                </Select>
              </div>
              <Textarea
                variant="underlined"
                labelPlacement="outside"
                placeholder="Your Message"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                {...register("message")}
                errorMessage={errors?.message?.message}
              />
              <div>
                <Button
                  color="primary"
                  className="rounded-sm py-3"
                  onClick={handleSubmit(onSubmit)}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
