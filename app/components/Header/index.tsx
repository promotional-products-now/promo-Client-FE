import {
  Link,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  Card,
  CardFooter,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link as RemixLink, json, useLoaderData, useLocation } from "@remix-run/react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiHandbagLight } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { SecondaryNav } from "./SecondaryNav";
import { navLinks } from "./navLinks";
import logo from "app/assets/logo.svg";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { getSession } from "../../sessions";
import { useState, useCallback, useEffect } from "react";
import { IBanner, IPopup } from "app/api/banner/types";
import allCategory from "app/utils/categories";
import CategoryList from "../CategoryList";
import { SearchDropdown } from "./SearchDropdown";
import { fetchBannerApi } from "app/api/banner/banner.api";

type HeaderT = {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
};

export function Header({ sidebarOpen, setSidebarOpen }: HeaderT) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [banner, setBanner] = useState<IBanner | null>(null);
  const [popup, setPopup] = useState<IPopup | null>(null);

  const location = useLocation();
  const data = useLoaderData<typeof loader>();

  const handleOpenSidebar = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      setSidebarOpen(!sidebarOpen);
    },
    [setSidebarOpen, sidebarOpen],
  );

  const SALESCONTACT = data && data.ENV ? data.ENV.SALES_CONTACT : "";

  useEffect(() => {
    fetchBannerApi().then((data) => {
      setBanner(data?.banner);
      setPopup(data?.popupModal);
      if (data?.popupModal?.isActive) {
        onOpen();
      }
    });
  }, [onOpen]);

  return (
    <header className={`${location.pathname !== "/" ? "border border-white-border" : ""}`}>
      {banner && banner.isActive && (
        <div className="bg-primary text-white md:text-xl 4xl:text-2xl px-3 py-2 w-full">
          {banner.message}
        </div>
      )}
      <div className="px-3 md:px-6 lg:px-8 xl:px-12">
        <div className="container mx-auto pb-4">
          <nav className="fixed sm:relative top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4">
              <Link as={RemixLink} to="/" className="hidden md:block">
                <Image src={logo} alt="Company Logo" className="h-12 2xl:h-20" />
              </Link>
              <div className="flex gap-3 items-center">
                <button
                  onClick={handleOpenSidebar}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                  aria-label="Toggle navigation menu"
                >
                  <FiMenu className="text-2xl" />
                </button>
                <div className="md:hidden gap-x-1">
                  <Button
                    as={RemixLink}
                    isIconOnly
                    to={`tel:+${SALESCONTACT}`}
                    variant="ghost"
                    aria-label="Sales Contact"
                    className="border-0 rounded"
                  >
                    <MdOutlineLocalPhone className="text-2xl text-primary" />
                  </Button>
                  <Button
                    as={RemixLink}
                    isIconOnly
                    to={`/cart`}
                    variant="ghost"
                    aria-label="Sales Contact"
                    className="border-0 rounded"
                  >
                    <HiOutlineShoppingBag className="text-2xl text-primary" />
                  </Button>
                  <Button
                    as={RemixLink}
                    prefetch="intent"
                    to="/login"
                    size="sm"
                    variant="ghost"
                    startContent={<FiLogIn className="text-xl text-primary" />}
                    className="border border-zinc-200 rounded font-medium text-sm px-3"
                  >
                    Login
                  </Button>
                </div>
              </div>
              <div className="sm:ml-8 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
                        <MdOutlineLocalPhone className="text-2xl 2xl:text-3xl text-primary" />
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
                      startContent={<PiHandbagLight className="text-2xl 2xl:text-3xl" />}
                      className="border-2 border-primary rounded font-medium px-3"
                    >
                      VIEW CART
                    </Button>
                  </li>
                </ul>
                <Link as={RemixLink} to="/" className="md:hidden">
                  <Image src={logo} alt="Company Logo" className="h-12 w-[7.5rem] sm:w-36" />
                </Link>
              </div>
              <div
                className="items-center hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex justify-evenly gap-8 w-full p-4 md:p-0 mt-4 font-medium bg-gray-50 md:mt-0">
                  {navLinks.map((link) => (
                    <li
                      key={link.pathname}
                      className={`text-black ${
                        link.pathname === location.pathname
                          ? "border-b border-primary font-bold"
                          : ""
                      }`}
                    >
                      {location.pathname === link.pathname ? (
                        <span> {link.name}</span>
                      ) : (
                        <a
                          href={link.pathname}
                          aria-current="page"
                          className="text-black  2xl:text-xl"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          {location.pathname === "/" && (
            <div className="flex justify-self-center mx-auto container bg-white w-full !mt-20 sm:!mt-auto">
              <SecondaryNav uid={data?.user?.uid ?? null} />
            </div>
          )}
          {location.pathname !== "/" && (
            <div className="flex justify-between space-x-4 flex-wrap w-full">
              <div className="flex flex-col space-y-3 w-full">
                <div className="flex items-center justify-between space-x-3 w-full">
                  <div className="hidden md:flex flex-col space-y-3">
                    <Popover showArrow placement="bottom">
                      <PopoverTrigger>
                        <div
                          aria-label="all product categories"
                          className="cursor-pointer min-w-64 xl:min-w-72 2xl:min-w-96 flex items-center gap-2 text-white bg-primary p-1 font-medium  rounded text-sm  "
                        >
                          <Button isIconOnly className="bg-transparent text-lg text-white">
                            <FiMenu />
                          </Button>{" "}
                          ALL PRODUCT CATEGORIES
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="p-1">
                        <div className="h-[30rem] min-h-[30rem] 2xl:h-[36rem]  min-w-64 xl:min-w-72 2xl:min-w-96 overflow-y-auto">
                          <CategoryList categories={allCategory} top={0} right={60} />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <SearchDropdown />
                  <div className="hidden md:flex gap-2">
                    <Button
                      as={RemixLink}
                      prefetch="intent"
                      to="#"
                      size="lg"
                      variant="ghost"
                      startContent={<TbTruckDelivery className="text-2xl text-orange" />}
                      className="border border-zinc-200 rounded text-sm font-medium px-3"
                    >
                      Fast Delivery Australia Wide
                    </Button>
                    {!data?.user?.uid && (
                      <Button
                        as={RemixLink}
                        prefetch="intent"
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {popup && (
        <Modal isOpen={isOpen} placement={popup?.position ?? "auto"} onOpenChange={onOpenChange}>
          <ModalContent>
            <Card isFooterBlurred className="w-full h-[24rem] col-span-12 sm:col-span-7">
              <Image
                removeWrapper
                alt={popup.message || "Popup image"}
                className="z-0 w-full h-full object-cover"
                src={popup.image}
                loading="lazy"
              />
              {popup?.message && (
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">{popup.message}</p>
                    </div>
                  </div>
                  <Button as={RemixLink} to={popup.urlLink} radius="full" size="sm">
                    Continue
                  </Button>
                </CardFooter>
              )}
            </Card>
          </ModalContent>
        </Modal>
      )}
    </header>
  );
}

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  const uid = session.get("uid");

  return json({ user: { uid }, ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}
