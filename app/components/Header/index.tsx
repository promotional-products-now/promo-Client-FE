import {
  Link,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Card,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Link as RemixLink, json, redirect, useLoaderData, useLocation } from "@remix-run/react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiHandbagLight } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { SecondaryNav } from "./SecondaryNav";
import { navLinks } from "./navLinks";
import logo from "app/assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { getSession, commitSession } from "../../sessions";
import { useEffect, useState } from "react";
import { fetchBannerApi } from "app/api/banner/banner.api";
import { IBanner, IPopup } from "app/api/banner/types";

type HeaderT = {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
};

export function Header(props: HeaderT) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [banner, setBanner] = useState<IBanner | null>(null);
  const [popup, setPopup] = useState<IPopup | null>(null);

  const location = useLocation();
  let data = useLoaderData<typeof loader>();

  const handleOpenSidebar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    props.setSidebarOpen(!props.sidebarOpen);
  };

  const SALESCONTACT = data && data.ENV ? data.ENV.SALES_CONTACT : "";

  useEffect(() => {
    fetchBannerApi().then((data) => {
      console.log({ data });
      setBanner(data?.banner);
      setPopup(data.popupModal);
      if (data?.popupModal?.isActive) {
        onOpen();
      }
    });
  }, []);

  return (
    <header className={` ${location.pathname !== "/" ? "border border-white-border" : ""}`}>
      {banner && banner?.isActive && (
        <div className="bg-primary text-white md:text-xl 4xl:text-2xl px-3 py-2 w-full">
          {" "}
          {banner?.message}
        </div>
      )}
      <div className="px-3 md:px-6 lg:px-8 xl:px-12">
        <div className="container mx-auto pb-4 ">
          <nav className="fixed sm:relative top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
            <div className=" flex flex-wrap items-center justify-between mx-auto py-4">
              {location.pathname === "/" ? (
                <span className="hidden md:block">
                  {" "}
                  <Image src={logo} className="h-12 2xl:h-20 " />
                </span>
              ) : (
                <Link as={RemixLink} to="/" className="hidden md:block">
                  <Image src={logo} className="h-12 2xl:h-20 " />
                </Link>
              )}
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
                      startContent={<FaAward className="text-2xl 2xl:text-3xl text-orange" />}
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
                      startContent={<PiHandbagLight className="text-2xl  2xl:text-3xl" />}
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
              rounded-lg bg-gray-50 md:gap-x-8 2xl:gap-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
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
                        {location.pathname === link.pathname ? (
                          <span> {link.name}</span>
                        ) : (
                          <Link
                            as={RemixLink}
                            to={link.pathname}
                            aria-current="page"
                            className="text-black  2xl:text-xl"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
          {location.pathname === "/" ? (
            <div className="flex justify-self-center mx-auto container bg-white  w-full !mt-20 sm:!mt-auto">
              <SecondaryNav uid={data && data.user ? data.user.uid : null} />
            </div>
          ) : (
            <div className="hidden md:flex justify-end gap-2 ">
              <Button
                as={RemixLink}
                to="#"
                size="lg"
                variant="ghost"
                startContent={<TbTruckDelivery className="text-2xl text-orange" />}
                className="border border-zinc-200 rounded text-sm font-medium px-3"
              >
                Fast Delivery Australia Wide
              </Button>
              {(!data || !data.user.uid) && (
                <Button
                  as={RemixLink}
                  to="/login"
                  size="lg"
                  variant="ghost"
                  startContent={<FiLogIn className="text-xl text-primary" />}
                  className="border border-zinc-200 rounded font-medium text-sm px-3"
                >
                  Login
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isOpen} placement={popup?.position ?? "auto"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <Card isFooterBlurred className="w-full h-[24rem] col-span-12 sm:col-span-7">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={popup?.image}
                />
                {popup?.message && (
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                      <div className="flex flex-col">
                        <p className="text-tiny text-white/60">{popup?.message}</p>
                      </div>
                    </div>
                    <Button as={RemixLink} to={popup.urlLink} radius="full" size="sm">
                      Continue
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </>
          )}
        </ModalContent>
      </Modal>
    </header>
  );
}

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  const uid = session.get("uid");

  return json({ user: { uid }, ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}
