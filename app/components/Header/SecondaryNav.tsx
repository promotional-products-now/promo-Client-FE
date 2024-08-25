import { useAtom } from "jotai";
import { Link } from "@remix-run/react";
import { Button } from "@nextui-org/react";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { isCategoryListOpen } from "app/atoms/category.atom";
import { SearchDropdown } from "./SearchDropdown";

export function SecondaryNav({ uid }: any) {
  const [isCategoryOpen, setIsCategoryOpen] = useAtom(isCategoryListOpen);

  return (
    <div className="flex justify-between space-x-4 flex-wrap w-full">
      <div className="flex flex-col space-y-3 w-full">
        <div className="flex items-center justify-between space-x-3 w-full">
          <div className="hidden md:flex flex-col space-y-3">
            <div
              aria-label="all product categories"
              className="cursor-pointer min-w-80 lg:max-w-80 flex items-center gap-2 text-white bg-primary p-1 font-medium  rounded-none text-sm  rounded-t-md"
            >
              <Button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                isIconOnly
                className="bg-transparent text-lg text-white"
              >
                <FiMenu />
              </Button>{" "}
              ALL PRODUCT CATEGORIES
            </div>
          </div>
          <SearchDropdown />
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
            {!uid && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
