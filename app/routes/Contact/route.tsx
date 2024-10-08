import { useEffect, useState } from "react";
import { Form, Link } from "@remix-run/react";
import { Select, SelectItem, Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { MetaFunction } from "@remix-run/node";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocationDetails } from "app/contents/contactLoactions";
import { ContactUsSchema } from "app/schema/contactus.schema";
import { sendContactMessageApi } from "../../api/contactUs.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactSeo } from "./seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us | Promotional Products Now" },
    {
      name: "description",
      content: "Get in touch with Promotional Products Now for any inquiries or support.",
    },
    { property: "og:title", content: "Contact Us | Promotional Products Now" },
    {
      property: "og:description",
      content: "Get in touch with Promotional Products Now for any inquiries or support.",
    },
    // { property: "og:image", content: "URL_TO_IMAGE" },
  ];
};

export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400",
  };
}

export default function ContactUS() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactUsSchema>({
    resolver: yupResolver(ContactUsSchema),
  });

  const onSubmit = async (data: ContactUsSchema) => {
    setIsLoading(true);
    try {
      const response = await sendContactMessageApi(data);
      setIsLoading(false);
      if (response.status === 200) {
        toast.success("Message sent successfully!", { containerId: "loginToast" });
        reset();
      } else {
        toast.error("Failed to send message. Please try again.", { containerId: "loginToast" });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred. Please try again.", { containerId: "loginToast" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4 lg:p-0">
      <ToastContainer containerId="loginToast" aria-live="polite" />
      <h2 className="text-2xl md:text-3xl font-bold hidden md:block">Contact us</h2>
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-10 py-10">
        <div className="w-full md:w-4/12 flex flex-col gap-8">
          <div className="text-center md:text-start">
            <b className="capitalize mb-2">Give our team a call</b>
            <p>We'd be happy to hear how we can help you out.</p>
          </div>
          {LocationDetails.map((data) => (
            <div key={data.id} className="flex gap-3">
              <Link
                to={data.href || "#"}
                className={data.href ? "flex gap-3 hover:underline" : "flex gap-3 cursor-default"}
                aria-label={`Contact ${data.title}`}
              >
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center border border-yellow">
                  <data.icon className="text-primary" />
                </div>
                <div>
                  <span className="text-sm text-yellow uppercase font-semibold">{data.title}</span>
                  <p className="text-sm font-normal text-gray whitespace-pre-wrap">
                    {Array.isArray(data.body) ? data.body.join("\n ") : data.body}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full md:w-8/12">
          <div className="flex flex-col justify-between lg:flex-row text-center md:text-start">
            <div className="flex md:block mb-2 md:mb-0 flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold block md:hidden">Contact us</h2>
              <b className="capitalize">How can we help you?</b>
              <p>Fill your information below to contact us</p>
            </div>
            <span className="hidden md:block text-yellow">
              Promotional Merchandise at Guaranteed Lowest Prices
            </span>
          </div>
          <Form method="post" onSubmit={handleSubmit(onSubmit)} aria-labelledby="contact-us-form">
            <div className="w-full flex flex-col gap-4 space-y-4">
              <div className="grid grid-cols-1 gap-x-4 gap-y-9 md:grid-cols-2">
                <Input
                  type="text"
                  variant="underlined"
                  label="Your Name"
                  {...register("fullName")}
                  isInvalid={!!errors?.fullName?.message}
                  errorMessage={errors?.fullName?.message}
                  aria-invalid={!!errors?.fullName?.message}
                />
                <Input
                  type="email"
                  variant="underlined"
                  label="Your Email"
                  {...register("email")}
                  isInvalid={!!errors?.email?.message}
                  errorMessage={errors?.email?.message}
                  aria-invalid={!!errors?.email?.message}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Your Phone"
                  {...register("phone")}
                  isInvalid={!!errors?.phone?.message}
                  errorMessage={errors?.phone?.message}
                  aria-invalid={!!errors?.phone?.message}
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="Your Subject"
                  {...register("subject")}
                  isInvalid={!!errors?.subject?.message}
                  errorMessage={errors?.subject?.message}
                  aria-invalid={!!errors?.subject?.message}
                />
              </div>
              <Textarea
                variant="underlined"
                labelPlacement="outside"
                placeholder="Message"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                classNames={{ innerWrapper: "h-40 md:h-fit" }}
                {...register("message")}
                isInvalid={!!errors?.message?.message}
                errorMessage={errors?.message?.message}
                aria-invalid={!!errors?.message?.message}
              />
              <div>
                <Button
                  color="primary"
                  variant="solid"
                  isLoading={isLoading}
                  className="w-full md:w-fit rounded-sm py-3 px-6"
                  disabled={isLoading}
                  type="submit"
                  aria-live="assertive"
                >
                  {isLoading ? "Sending Message..." : "Send Message"}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSeo) }}
      />
    </div>
  );
}
