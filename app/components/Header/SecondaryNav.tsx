import { Button, Input, Link } from "@nextui-org/react";
import { FiLogIn, FiMenu, FiSearch } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { SearchDropdown } from "./SearchDropdown";

export function SecondaryNav() {
  return (
    <div className="flex items-center justify-between space-x-4 w-full">
      <div className="w-full hidden md:flex">
        <Button size="lg" color="primary" startContent={<FiMenu />} className="w-full rounded-sm">
          All Products Categoeries
        </Button>
      </div>
      <div className="w-full">
        <form>
          <div className="flex items-center">
            <Input
              type="text"
              size="sm"
              placeholder="Search product catalogue"
              radius="none"
              className="rounded-s-lg"
              startContent={<SearchDropdown />}
            />
            <Button
              type="submit"
              size="lg"
              isIconOnly
              className="bg-primary text-white rounded-s-none rounded-e-sm"
            >
              <FiSearch />
            </Button>
          </div>
        </form>
      </div>
      <div className="hidden md:flex">
        <Button
          as={Link}
          href="#"
          size="lg"
          variant="ghost"
          startContent={<TbTruckDelivery className="text-2xl text-orange" />}
          className="border border-primary rounded"
        >
          Fast Delivery Australia Wide
        </Button>
      </div>
      <div className="hidden md:block">
        <Button
          as={Link}
          href="/login"
          size="lg"
          variant="ghost"
          startContent={<FiLogIn className="text-xl text-primary" />}
          className="border border-primary rounded"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
