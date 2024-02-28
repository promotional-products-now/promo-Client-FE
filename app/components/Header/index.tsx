import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useLocation } from "@remix-run/react";
import { MdOutlineLocalPhone, MdOutlineVerified } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "app/assets/logo.svg";
import { navLinks } from "./navLinks";
import { SecondaryNav } from "./SecondaryNav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div className="space-y-5">
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
        <NavbarContent className="TEXTTTTTT👿👿👿👿👿">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image src={logo} className="h-12" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navLinks.map((link) => {
            return (
              <NavbarItem isActive={link.pathname === location.pathname} key={link.pathname}>
                <Link
                  href={link.pathname}
                  aria-current="page"
                  className={`text-black  ${
                    link.pathname === location.pathname
                      ? "underline font-bold decoration-primary"
                      : ""
                  }`}
                  underline={link.pathname === location.pathname ? "active" : "none"}
                >
                  {link.name}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <Button
              as={Link}
              href="guarantees"
              variant="ghost"
              startContent={<MdOutlineVerified className="text-base text-orange" />}
              className="border border-orange rounded"
            >
              OUR GUARANTEES
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="tel:+44-785-7895"
              variant="ghost"
              startContent={<MdOutlineLocalPhone className="text-base text-primary" />}
              className="border border-primary rounded"
            >
              SALES: 44-785-7895
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="#/cart"
              variant="ghost"
              startContent={<HiOutlineShoppingBag className="text-base" />}
              className="border border-primary rounded"
            >
              VIEW CART
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {navLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === navLinks.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {/* TODO: should be displayed only on screens that has products and the home page inclusive */}
      {location.pathname === "/" && (
        <div className="flex justify-self-center mx-auto container bg-white">
          <SecondaryNav />
        </div>
      )}
    </div>
  );
}
