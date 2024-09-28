import { Button, Skeleton } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { isCategoryListOpen } from "app/atoms/category.atom";
import { useAtom } from "jotai";

const OldBannerLoader = () => {
  const [isCategoryOpen] = useAtom(isCategoryListOpen);
  // Fetch palettes for all categories

  return (
    <div
      className={`flex h-full flex-col md:flex-col lg:flex-row justify-center container mx-auto py-3 lg:py-8 !m-0 transition-width duration-300 ease-linear ${
        isCategoryOpen ? "w-full" : ""
      }`}
    >
      {/* Clothing Section */}
      <div
        className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center items-center w-full md:w-3/5"
        style={{
          backgroundColor: "rgb(56, 189, 248)",
        }}
      >
        <div className="flex flex-col gap-2 md:gap-3 p-4">
          <Skeleton className="rounded-lg h-4 w-full"></Skeleton>
          <Skeleton className="rounded-lg h-4 w-5/6 bg-white"></Skeleton>
          {/* <h3 className="text-sm md:text-base text-white font-normal">PRICE RANGE</h3> */}
          <div className="flex flex-col gap-3 justify-start">
            <Button
              as={Link}
              to={`#`}
              className="bg-primary w-min p-5 rounded-md text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
              variant="solid"
            >
              Shop now
            </Button>
            <Button
              as={Link}
              to={`#`}
              className="bg-white w-max p-5 rounded-md text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
              variant="solid"
            >
              View Collection
            </Button>
          </div>
        </div>
        <div className="h-full w-full">
          <Skeleton className="rounded-none w-full h-full"></Skeleton>
        </div>
      </div>

      {/* Health Section */}
      <div className="flex flex-col align-center w-full md:w-2/5">
        <div
          className="flex flex-row justify-center items-center gap-1 h-full p-5 flex-1"
          style={{
            backgroundColor: "rgb(6 182 212)",
          }}
        >
          <div className="flex flex-col gap-3">
            <Skeleton className="rounded-lg h-4 w-full"></Skeleton>
            <Skeleton className="rounded-lg h-4 w-5/6 bg-white"></Skeleton>

            <div className="flex flex-col gap-3 justify-start">
              <Button
                as={Link}
                to={`/#`}
                className="bg-primary p-5 w-min rounded-md text-white text-base hover:opacity-80 transition text-center capitalize"
                size="md"
                variant="solid"
              >
                Shop now
              </Button>
            </div>
          </div>

          <div className="w-56 h-36  rounded-lg shadow-lg overflow-hidden">
            <Skeleton className="rounded-lg w-full h-full"></Skeleton>
          </div>
        </div>

        {/* Home Section */}
        <div className="flex flex-row justify-center items-center gap-5 p-6 flex-1">
          <div className="w-56 h-36  rounded-lg shadow-lg overflow-hidden">
            <Skeleton className="rounded-lg w-full h-full "></Skeleton>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="rounded-lg h-4 w-full"></Skeleton>
            <Skeleton className="rounded-lg h-4 w-5/6 bg-white"></Skeleton>

            <div className="flex flex-col gap-3 justify-start">
              <Button
                as={Link}
                to={`/#`}
                className="bg-white p-5 w-max rounded-md text-black text-base hover:opacity-80 transition text-center capitalize"
                size="md"
                variant="solid"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldBannerLoader;
