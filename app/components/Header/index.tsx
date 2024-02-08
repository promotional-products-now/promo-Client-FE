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
import logo from "../../assets/logo.svg";
import { useLocation } from "@remix-run/react";
import { MdOutlineLocalPhone, MdOutlineVerified } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { navLinks } from "./navLinks";

// TODO REMOVE ARBITRARY VALUE

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logo} />
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
                    ? "underline font-bold decoration-[#0079C0]"
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
            href="#"
            variant="ghost"
            startContent={<MdOutlineVerified className="text-base text-[#FB853C]" />}
            className="border border-[#FB853C] rounded"
          >
            OUR GUARANTEES
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="tel:+44-785-7895"
            variant="ghost"
            startContent={<MdOutlineLocalPhone className="text-base text-[#0079C0]" />}
            className="border border-[#0079C0] rounded"
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
            className="border border-[#0079C0] rounded"
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
  );
}
