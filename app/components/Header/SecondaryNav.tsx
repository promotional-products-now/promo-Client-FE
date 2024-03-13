import { Link } from "@remix-run/react";
import { Button, Input } from "@nextui-org/react";
import { FiLogIn, FiMenu, FiSearch } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { SearchDropdown } from "./SearchDropdown";

export function SecondaryNav() {
  return (
    <div className="flex justify-between space-x-4 flex-wrap w-full">
      <div className="flex flex-col space-y-3 w-full">
        <div className="flex items-center justify-between space-x-4 w-full">
          <div className="hidden md:flex flex-col space-y-3">
            <Button
              size="lg"
              disabled
              color="primary"
              startContent={<FiMenu />}
              className="w-full rounded-sm"
            >
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
              to="#"
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
              to="/login"
              size="lg"
              variant="ghost"
              startContent={<FiLogIn className="text-xl text-primary" />}
              className="border border-primary rounded"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
