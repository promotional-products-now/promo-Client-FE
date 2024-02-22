import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "@remix-run/react";
import { Button } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineArrowRight } from "react-icons/md";
import { Input } from "@nextui-org/react";
import { items } from "app/api_dummy";
import { payment } from "app/api_dummy";
import { RxCross2 } from "react-icons/rx";

const CartPage = () => {
  const cartItems = items.slice(0, 5);
  console.log(cartItems.length);

  const [deletedItems, setDeletedItems] = useState(cartItems);
  const handleDelete = (id: number) => {
    const FilteredItems = deletedItems.filter((item) => {
      return item.id !== id;
    });

    console.log(`FilteredItems`, FilteredItems);

    setDeletedItems(FilteredItems);
  };

  return (
    <div className="">
      <div className="flex flex-row border border-gray md:px-20 px-5 py-3 items-center justify-start cursor-pointer">
        <div className="text-gray">Home</div>
        <MdOutlineArrowRight size={18} className="text-gray" />
        <div className="text-base text-primary">Shopping cart</div>
      </div>

      <div className="md:px-20 mt-12 ">
        <h1 className="text-3xl capitalize font-bold text-center mb-5">Shopping Cart</h1>

        <div className="border-y border-t-primary py-4 md:px-4">
          <Table radius="none" shadow="none" removeWrapper className="overflow-x-auto">
            <TableHeader>
              <TableColumn className="uppercase md:text-base text-black">Delete</TableColumn>

              <TableColumn className="uppercase md:text-base text-black">Product</TableColumn>
              <TableColumn className="uppercase md:text-base text-black">Name</TableColumn>
              <TableColumn className="uppercase md:text-base text-black">Price</TableColumn>
              <TableColumn className="uppercase md:text-base text-black">Quantity</TableColumn>
              <TableColumn className="uppercase md:text-base text-black">Subtotal</TableColumn>
            </TableHeader>
            <TableBody emptyContent={" Oops, your cart is empty, Please add an item to cart"}>
              {deletedItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <RxCross2
                      size={20}
                      className="text-black font-semibold"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    />
                  </TableCell>

                  <TableCell className="w-32 ">
                    <Image src={item.image} className="object-cover aspect-square" />
                  </TableCell>

                  <TableCell className="font-medium ">{item.title}</TableCell>
                  <TableCell className="text-primary ">{item.price}</TableCell>
                  <TableCell className="text-left ">{item.qunatity}</TableCell>
                  <TableCell className="text-left ">{item.newPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex md:flex-row flex-col justify-between md:items-center mt-10">
          <div className="flex flex-row gap-6 items-center">
            <Input
              type="text"
              radius="none"
              placeholder="Coupon Code"
              className="border border-black sm:text-sm md:text-xl w-full h-full"
            />

            <Button
              as={Link}
              href="#"
              className=" bg-yellow px-7 py-4 w-full h-full rounded-sm  text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
              size="md"
              variant="ghost"
            >
              Apply Code{" "}
            </Button>
          </div>

          <div className="md:w-1/4 w-full mt-4">
            <Button
              as={Link}
              href="#"
              className="bg-transparent w-full h-full  px-7 py-4 rounded-sm text-primary text-base font-semibold hover:opacity-80 transition text-center capitalize"
              size="md"
              variant="ghost"
            >
              Continue shopping{" "}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-start md:w-2/5 mt-10 w-full">
          <div className="text-2xl font-semibold text-black">Cart Totals</div>
          <div className="flex flex-row justify-between items-center border-t border-t-primary p-3">
            <div className=" text-black ">Subtotal</div>
            <div className=" text-black ">$238.00</div>
          </div>
          <div className="flex flex-row justify-between items-center border-y border-y-gray p-3 mb-7">
            <div className=" text-black ">
              <span className="font-semibold">TOTAL</span>(ex GST)
            </div>
            <div className=" text-primary font-semibold text-xl">$238.00</div>
          </div>
          <Button
            as={Link}
            href="#"
            variant="ghost"
            startContent={<FiArrowRight className="text-base" />}
            className="bg-green-500 px-8 py-5 w-full h-full rounded-sm text-white flex flex-row gap-5 text-base font-semibold hover:opacity-80 transition text-center capitalize"
          >
            PROCEED TO CHECKOUT
          </Button>
          <div className="border border-black px-5 py-2 flex flex-col gap-1 mt-6">
            <div className="text-xl text-center">GUARANTEED SAFE CHECKOUT</div>

            <div className="flex flex-row items-center">
              {payment.map((item) => {
                return (
                  <div className="w-18 flex-1 ">
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

export default CartPage;
