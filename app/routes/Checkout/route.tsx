import TableCard from "./TableCard";
import { Link } from "@remix-run/react";
import { Button } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import { payment } from "app/data";
import { MdOutlineArrowRight } from "react-icons/md";
import { Input, Image } from "@nextui-org/react";

const route = () => {
  return (
    <div>
      <div className="flex flex-row border border-[#4D4D4D] px-20 py-3 items-center justify-start cursor-pointer">
        <div className="text-[#4D4D4D]">Home</div>
        <MdOutlineArrowRight size={18} className="text-[#4D4D4D]" />
        <div className="text-base text-[#0079C0]">Shopping cart</div>
      </div>

      <div className="md:px-20 px-5 mt-12 ">
        <h1 className="text-3xl capitalize font-bold text-center mb-5">Shopping Cart</h1>
        <TableCard />

        <div className="flex flex-row justify-between items-center mt-10">
          <div className="flex flex-row gap-6 items-center">
            <Input
              type="text"
              radius="none"
              placeholder="Coupon Code"
              className="border border-black text-base  "
            />

            <Button
              as={Link}
              href="#"
              className=" bg-[#FAB102] px-7 py-4 w-full h-full rounded-sm  text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
              size="md"
              variant="solid"
            >
              Apply Code{" "}
            </Button>
          </div>

          <div className="">
            <Button
              as={Link}
              href="#"
              className="bg-transparent w-full h-full  px-7 py-4 rounded-sm text-[#0079C0] text-base font-semibold hover:opacity-80 transition text-center capitalize"
              size="md"
              variant="ghost"
            >
              Continue shopping{" "}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-start md:w-[40%] mt-10 w-full">
          <div className="text-2xl font-semibold text-black">Card Totals</div>
          <div className="flex flex-row justify-between items-center border-t border-t-[#0079C0] p-3">
            <div className="text-base text-black ">Subtotal</div>
            <div className="text-base text-black ">$238</div>
          </div>
          <div className="flex flex-row justify-between items-center border-y border-y-[#4D4D4D] p-3 mb-7">
            <div className="text-xl font-semibold text-black ">Total(ex GST)</div>
            <div className=" text-[#0079C0] font-semibold text-xl">$238</div>
          </div>
          <Button
            as={Link}
            href="#"
            variant="solid"
            startContent={<FiArrowRight className="text-base" />}
            className="bg-green-600 p-5 w-full h-full rounded-sm text-white flex flex-row gap-5 text-base font-semibold hover:opacity-80 transition text-center capitalize"
          >
            PROCEED TO CHECKOUT
          </Button>{" "}
          <div className="border border-black px-5 py-5 flex flex-col gap-5 mt-6">
            <div className="text-2xl text-center">GUARANTEED SAFE CHECKOUT</div>

            <div className="flex flex-row items-center">
              {payment.map((item) => {
                return (
                  <div className="w-[80px] flex-1 ">
                    {" "}
                    <Image src={item.image} className="w-full h-full object-cover aspect-auto" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default route;
