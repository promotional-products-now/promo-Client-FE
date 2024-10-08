import { Button, Divider, Image, Input } from "@nextui-org/react";
import { json, Link, useLoaderData } from "@remix-run/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaHome, FaShoppingCart, FaUser, FaThList } from "react-icons/fa";
import logo from "app/assets/logo.svg";
import { SubscribeSchema } from "app/schema/subscribe.schema";
import { FooterLinkComp } from "./FooterLinkComp";
import { aboutLinks, categoryLinks, companyInfo, faqLinks, otherLinks, socialLinks } from "./links";
import ContactDetails from "./ContactDetails";
import { getSession } from "app/sessions";

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
      <div className=" py-6">
        <div className="container mx-auto lg:w-11/12  px-3 md:px-6 lg:px-12 xl:px-12 lg:py-8 space-y-6 md:space-y-10">
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
                  <Image src={logo} className="h-12 2xl:h-20" />
                </Link>

                <div>
                  <div className="space-y-3">
                    <p className="text-xs font-normal text-gray">
                      Promotional Products Now is a progressive promotional products company founded
                      on the belief that customer satisfaction is of paramount and continuing
                      importance.
                    </p>
                    <p className="text-xs font-normal text-gray">
                      Serving all organizations around Australia for over 20 years, our success to
                      date is directly contributed to the feedback received from customers.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
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
                    Copyright {new Date().getFullYear()} Promotional Products Now
                  </p>
                </div>
              </div>

              <div className="hidden md:contents w-full">
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
              {/* mobile */}
              <div className="block md:hidden">
                <div>
                  <div className="flex flex-wrap gap-2 items-start">
                    <div className="flex-col gap-y-2">
                      <FooterLinkComp title="About Us" links={aboutLinks} />
                      <FooterLinkComp title="Compay Information" links={companyInfo} />
                      <FooterLinkComp title="FAQs" links={faqLinks} />
                    </div>
                    <div className="flex-col gap-y-2">
                      <FooterLinkComp title="Categories" links={categoryLinks} />
                      <FooterLinkComp title="Other Information" links={otherLinks} />
                    </div>
                  </div>
                </div>
                <div>
                  <ContactDetails />
                </div>
              </div>
              <div className="block md:hidden">
                <div className="space-y-4">
                  <h2 className="text-lg text-black font-semibold">Follow Us</h2>
                  <div className="flex items-center gap-5">
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
                <Divider className="my-2" />
                <p className="text-xs font-normal text-gray text-center">
                  Copyright {new Date().getFullYear()} Promotional Products Now
                </p>
              </div>
              {/*  */}
            </div>
          </>
        </div>
      </div>
      {/* <div className="block md:hidden">
        <BottomNavigation />
      </div> */}
    </footer>
  );
}

const BottomNavigation = () => {
  let data = useLoaderData<typeof loader>();

  return (
    <div className="fixed z-[1000] bottom-0 left-0 w-full bg-white  text-zinc-600 text-xl shadow-md">
      <div className="flex justify-around py-2">
        <Link to="/" prefetch="none">
          <NavItem icon={<FaHome />} label="Home" />
        </Link>
        <Link to="/category" prefetch="viewport">
          <NavItem icon={<FaThList />} label="Categories" />
        </Link>
        <Link to="/cart" prefetch="none">
          <NavItem icon={<FaShoppingCart />} label="Cart" />
        </Link>
        {data && data.user && data.user.uid ? (
          <Link to="/account" prefetch="viewport">
            <NavItem icon={<FaUser />} label="Account" />
          </Link>
        ) : (
          <Link to="/login" prefetch="viewport">
            <NavItem icon={<FaUser />} label="Account" />
          </Link>
        )}
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

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  const uid = session.get("uid");

  return json({ user: { uid } });
}
