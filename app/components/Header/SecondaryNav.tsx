import { Link } from "@remix-run/react";
import { Button, Input } from "@nextui-org/react";
import { FiLogIn, FiMenu, FiSearch } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { SearchDropdown } from "./SearchDropdown";

export function SecondaryNav() {
  return (
    <div className="flex justify-between space-x-4 flex-wrap w-full">
      <div className="flex flex-col space-y-3 w-full">
        <div className="flex items-center justify-between space-x-3 w-full">
          <div className="hidden md:flex flex-col space-y-3">
            <Button
              size="lg"
              disabled
              color="primary"
              startContent={<FiMenu />}
              className="w-full font-medium text-sm rounded-none  rounded-t-md"
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
                  variant="bordered"
                  placeholder="Search product catalogue"
                  radius="none"
                  className="rounded-s-sm"
                  startContent={<SearchDropdown />}
                  classNames={{
                    inputWrapper: ["border", "border-zinc-100"],
                    mainWrapper: "rounded-md",
                  }}
                />
                <Button
                  type="submit"
                  size="lg"
                  isIconOnly
                  className="bg-primary text-white rounded-s-none rounded-e-md"
                >
                  <FiSearch />
                </Button>
              </div>
            </form>
          </div>
          <div className="hidden md:flex gap-2 ">
            <Button
              as={Link}
              to="#"
              size="lg"
              variant="ghost"
              startContent={<TbTruckDelivery className="text-2xl text-orange" />}
              className="border border-zinc-200 rounded text-sm font-medium px-3"
            >
              Fast Delivery Australia Wide
            </Button>
            <Button
              as={Link}
              to="/login"
              size="lg"
              variant="ghost"
              startContent={<FiLogIn className="text-xl text-primary" />}
              className="border border-zinc-200 rounded font-medium text-sm px-3"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
