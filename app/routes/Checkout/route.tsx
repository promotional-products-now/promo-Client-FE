import TableCard from "./TableCard";
import { Link } from "@remix-run/react";
import { Button } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import { payment } from "app/data";

const route = () => {
  return (
    <div className="md:px-20 px-5">
<h1 className="text-2xl capitalize font-bold">Shopping Cart</h1>
      <TableCard />

      <div className="flex flex-row justify-between items-center mt-10">
        <div className="flex flex-row gap-3 items-center">
          <Button
            as={Link}
            href="#"
            className="bg-transparent   px-3 py-3 rounded-sm  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
            size="md"
            variant="ghost"
          >
            Apply Code{" "}
          </Button>

          <Button
            as={Link}
            href="#"
            className="bg-black px-3 py-3 rounded-sm  text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
            size="md"
            variant="solid"
          >
            Cuppon Code{" "}
          </Button>
        </div>

        <div className="">
          <Button
            as={Link}
            href="#"
            className="bg-transparent px-3 py-3 rounded-sm  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
            size="md"
            variant="ghost"
          >
            Continue shopping{" "}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-start md:w-[40%] mt-10 w-full">
        <div className="text-2xl font-semibold text-black">Card Totals</div>
        <div className="flex flex-row justify-between items-center border-b-2 border-b-black p-3">
          <div className="text-base text-black ">Subtotal</div>
          <div className="text-base text-black ">$238</div>
        </div>
        <div className="flex flex-row justify-between items-center border-b-2 border-b-black p-3 mb-7">
          <div className="text-base text-black ">Total</div>
          <div className="text-base text-black ">$238</div>
        </div>
        <Button
          as={Link}
          href="#"
          variant="ghost"
          startContent={<FiArrowRight className="text-base" />}
          className="bg-transparent px-5 py-5 rounded-sm text-black flex flex-row gap-5 text-base font-semibold hover:opacity-80 transition text-center capitalize"
        >
          PROCEED TO CHECKOUT
        </Button>{" "}
        <div className="border border-black px-5 py-5 flex flex-col gap-5 mt-6">
          <div className="text-base text-center">GUARANTEED SAFE CHECKOUT</div>

          <div className="grid grid-cols-4 gap-1">
            {payment.map((item) => {
              return (
                <div className="w-50px">
                  {" "}
                  <img src={item.image} className="w-full h-full object-cover aspect-auto"/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default route;
