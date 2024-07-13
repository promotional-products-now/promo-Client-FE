import { Button, Image, Input } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaHome, FaShoppingCart, FaUser, FaThList } from "react-icons/fa";
import logo from "app/assets/logo.svg";
import { SubscribeSchema } from "app/schema/subscribe.schema";
import { FooterLinkComp } from "./FooterLinkComp";
import { aboutLinks, categoryLinks, companyInfo, faqLinks, otherLinks, socialLinks } from "./links";
import ContactDetails from "./ContactDetails";

export function Footer() {
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
    <footer className="bg-white dark:bg-gray-900 border border-neutral-200 dark:border-gray-700">
      <div className="hidden md:block px-3 md:px-6 lg:px-8 xl:px-12 py-6">
        <div className="container mx-auto md:w-11/12 lg:py-8 space-y-6 md:space-y-10">
          <div className="sm:flex sm:items-center sm:justify-between space-y-6 sm:space-y-0 w-full">
            <h1 className="text-lg md:text-3xl text-black font-semibold">Newsletter</h1>
            <div className="flex sm:justify-end w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-3/4">
                <div className="flex items-center w-full border-">
                  <Input
                    size="sm"
                    radius="none"
                    variant="bordered"
                    placeholder="Your email address"
                    startContent={<MdEmail className="text-xl" />}
                    classNames={{
                      inputWrapper: ["border", "border-zinc-100", "h-12"],
                      mainWrapper: "rounded-md",
                    }}
                    className="rounded-s-[4px] rounded-e-none bg-transparent w-full overflow-hidden"
                    {...register("email")}
                    isInvalid={!!errors.email}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    variant="ghost"
                    className="border-none rounded-s-none rounded-e-[4px] bg-primary text-white"
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
                <Link to="/" className="flex items-center">
                  <Image src={logo} className="h-12" />
                </Link>
                <div className="space-y-3">
                  <div>
                      <p className="text-xs font-normal text-gray">
                      Promotional Products Now is a progressive promotional products company
                      founded on the belief that customer satisfaction is of paramount  and continuing importance.
                    </p>
                    <p className="text-xs font-normal text-gray">
                      Serving all organizations around Australia for over 20 years, our success  to date is directly contributed  to the feedback
                      received from customers.
                      </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-lg text-black font-semibold">Follow Us</h2>
                  <div className="flex items-center space-x-3">
                    {socialLinks.map((link) => {
                      const IconTag = link.icon;
                      return (
                        <Link to={link.pathname} key={link.id} className="">
                          <IconTag className="text-primary text-2xl" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <p className="text-xs font-normal text-gray">
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
                {/* contact */}
                <ContactDetails />
              </div>
            </div>
          </>
        </div>
      </div>
      <div className="block md:hidden">
        <BottomNavigation />
      </div>
    </footer>
  );
}

const BottomNavigation = () => {
  return (
    <div className="fixed z-50 bottom-0 left-0 w-full bg-white  text-zinc-600 text-xl shadow-md">
      <div className="flex justify-around py-2">
        <Link to="/">
          <NavItem icon={<FaHome />} label="Home" />
        </Link>
        <Link to="/category">
          <NavItem icon={<FaThList />} label="Categories" />
        </Link>
        <Link to="/cart">
          <NavItem icon={<FaShoppingCart />} label="Cart" />
        </Link>
        <Link to="/login">
          <NavItem icon={<FaUser />} label="Account" />
        </Link>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }: any) => (
  <div className="flex flex-col items-center text-gray-700 hover:text-blue-500">
    {icon}
    <span className="text-xs">{label}</span>
  </div>
);
