import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Input,
  Link,
} from "@nextui-org/react";
import { FiLogIn, FiMenu, FiSearch } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { SearchDropdown } from "./SearchDropdown";
import { allCategories } from "app/utils/homeAllCategories";

export function SecondaryNav() {
  return (
    <div className="flex justify-between space-x-4 w-full">
      <div className="flex flex-col space-y-3 w-full -border border-green-400">
        <div className="flex items-center justify-between space-x-4 w-full">
          <div className="hidden md:flex flex-col space-y-3">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  size="lg"
                  color="primary"
                  startContent={<FiMenu />}
                  className="w-full rounded-sm"
                >
                  All Products Categoeries
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Link Actions">
                {allCategories.map((cat) => (
                  <DropdownSection
                    key={cat.id}
                    showDivider
                    classNames={{
                      divider: "bg-primary",
                    }}
                  >
                    <DropdownItem key={cat.id} href="#">
                      {cat.category}
                    </DropdownItem>
                  </DropdownSection>
                ))}
              </DropdownMenu>
            </Dropdown>
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
      </div>
    </div>
  );
}
