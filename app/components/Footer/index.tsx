import { json, useLoaderData, useLocation } from "@remix-run/react";
import { Button, Image, Input, Link } from "@nextui-org/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import logo from "app/assets/logo.svg";
import { SubscribeSchema } from "app/schema/subscribe.schema";
import { FooterLinkComp } from "./FooterLinkComp";
import { aboutLinks, categoryLinks, companyInfo, faqLinks, otherLinks, socialLinks } from "./links";

export async function loader() {
  return json({ ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}

export function Footer() {
  const data = useLoaderData<typeof loader>();

  const SALESCONTACT = data.ENV.SALES_CONTACT;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SubscribeSchema),
  });

  const onSubmit = (data: SubscribeSchema) => {
    console.log(data);
    reset();
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <hr className="border-neutral-200 sm:mx-auto dark:border-gray-700" />

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 space-y-6 md:space-y-10">
        <div className="sm:flex sm:items-center sm:justify-between space-y-6 sm:space-y-0 w-full">
          <h1 className="text-lg md:text-3xl text-black font-semibold">Newsletter</h1>
          <div className="flex sm:justify-end w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-3/4">
              <div className="flex items-center w-full border-">
                <Input
                  size="sm"
                  radius="none"
                  placeholder="Your email address"
                  startContent={<CiMail className="text-xl" />}
                  className="rounded-s-2xl rounded-e-none bg-transparent w-full overflow-hidden"
                  {...register("email")}
                  isInvalid={!!errors.email}
                />
                <Button
                  type="submit"
                  size="lg"
                  variant="ghost"
                  className="border-none rounded-s-none bg-primary text-white"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <>
          <div className="grid gap-8 sm:gap-6 sm:grid-cols-4">
            <div className="mb-6 md:mb-0 space-y-4">
              <Link href="/" className="flex items-center">
                <Image src={logo} className="h-12" />
              </Link>
              <div className="space-y-3">
                {[1, 2].map((_, i) => (
                  <div key={i}>
                    <p className="text-sm font-normal text-gray">
                      Lorem ipsum dolor sit amet consectetur. Dui mattis faucibus mus tristique.
                      Faucibus molestie faucibus dolor imperdiet urna volutpat.{" "}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h2 className="text-xl text-black font-semibold">Follow Us</h2>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((link) => {
                    const IconTag = link.icon;
                    return (
                      <Link href={link.pathname} className="">
                        <IconTag className="text-primary text-2xl" />
                      </Link>
                    );
                  })}
                </div>
              </div>
              <p className="text-sm font-normal text-gray">
                Copyright 2023 Promotional Products Now
              </p>
            </div>

            <div className="space-y-6">
              <FooterLinkComp title="About Us" links={aboutLinks} />
              <FooterLinkComp title="Compay Information" links={companyInfo} />
            </div>

            <div>
              <FooterLinkComp title="Categories" links={categoryLinks} />
            </div>
            <div className="space-y-6">
              <FooterLinkComp title="Other Information" links={otherLinks} />
              <FooterLinkComp title="FAQs" links={faqLinks} />
              <div>
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  Contact Details
                </h2>
                <div className="">
                  <div className="flex items-center gap-2 mb-2">
                    <CiLocationOn className="text-primary text-2xl" />
                    <h2 className="text-sm font-semibold text-black">SHOWROOM AND OFFICE</h2>
                  </div>
                  <div className="">
                    <p className="text-sm text-gray font-normal">
                      Upper Floor, Unit 9/8 Ave of the America Newington NSW2127, Australia
                    </p>
                    <h2 className="text-sm font-semibold text-black pt-3">POSTAL ADDRESS</h2>
                    <p className="text-sm text-gray font-normal">
                      Promotional Products Now Pty Ltd P.O Box 6373 SILVER WATER NSW 2128
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CiLocationOn className="text-primary text-2xl" />
                    <Link
                      href="mailto:sales@promotionalproductsnow.com.au"
                      className="text-sm font-normal text-gray"
                    >
                      sales@promotionalproductsnow.com.au
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <FiPhoneCall className="text-primary text-lg" />
                    <Link href={`tel:+${SALESCONTACT}`} className="text-sm font-normal text-gray">
                      +{SALESCONTACT}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </footer>
  );
}
