import { Link, Button, Image } from "@nextui-org/react";
import { Link as RemixLink, json, useLoaderData, useLocation } from "@remix-run/react";
import { MdOutlineLocalPhone, MdOutlineVerified } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SecondaryNav } from "./SecondaryNav";
import { navLinks } from "./navLinks";
import logo from "app/assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

type HeaderT = {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
};

export function Header(props: HeaderT) {
  const location = useLocation();
  let data = useLoaderData<typeof loader>();

  const handleOpenSidebar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    props.setSidebarOpen(!props.sidebarOpen);
  };

  const SALESCONTACT = data.ENV.SALES_CONTACT;

  return (
    <header
      className={`px-3 md:px-6 lg:px-8 xl:px-12 ${
        location.pathname !== "/" ? "border border-white-border" : ""
      }`}
    >
      <div className="container mx-auto pb-4 ">
        <nav className="fixed sm:relative top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
          <div className=" flex flex-wrap items-center justify-between mx-auto py-4">
            <Link as={RemixLink} href="/" className="hidden md:block">
              <Image src={logo} className="h-12 " />
            </Link>
            <div className="flex gap-3 items-center">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                onClick={handleOpenSidebar}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div className="md:hidden">
                <Button
                  as={RemixLink}
                  isIconOnly
                  to={`tel:+${SALESCONTACT}`}
                  variant="ghost"
                  className="border-0  rounded"
                >
                  <MdOutlineLocalPhone className="text-2xl text-primary" />
                </Button>
              </div>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <ul className="hidden lg:flex space-x-3">
                <li>
                  <Button
                    as={RemixLink}
                    to="guarantees"
                    variant="ghost"
                    startContent={
                      <MdOutlineVerified className="text-2xl 2xl:text-3xl text-orange" />
                    }
                    className="border-2 border-orange rounded font-medium px-3"
                  >
                    OUR GUARANTEES
                  </Button>
                </li>
                <li>
                  <Button
                    as={RemixLink}
                    to={`tel:+${SALESCONTACT}`}
                    variant="ghost"
                    startContent={
                      <MdOutlineLocalPhone className="text-2xl  2xl:text-3xl text-primary" />
                    }
                    className="border-2 border-primary rounded font-medium px-3"
                  >
                    SALES: {SALESCONTACT}
                  </Button>
                </li>
                <li>
                  <Button
                    as={RemixLink}
                    to="/cart"
                    variant="ghost"
                    startContent={<HiOutlineShoppingBag className="text-2xl  2xl:text-3xl" />}
                    className="border-2 border-primary rounded font-medium px-3"
                  >
                    VIEW CART
                  </Button>
                </li>
              </ul>
              <Link as={RemixLink} href="/" className="md:hidden">
                <Image src={logo} className="h-12 " />
              </Link>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul
                className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
              rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              >
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.pathname}
                      className={`text-black  ${
                        link.pathname === location.pathname
                          ? "border-b border-primary font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        as={RemixLink}
                        to={link.pathname}
                        aria-current="page"
                        className="text-black  2xl:text-xl"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        {location.pathname === "/" ? (
          <div className="flex justify-self-center mx-auto container bg-white  w-full !mt-20 sm:!mt-auto">
            <SecondaryNav />
          </div>
        ) : (
          <div className="hidden md:flex justify-end w-max-ppn">
            <Button
              as={Link}
              href="/login"
              size="lg"
              variant="ghost"
              startContent={<FiLogIn className="text-xl  2xl:text-2xl text-primary" />}
              className="border border-primary rounded"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export async function loader() {
  return json({ ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}
