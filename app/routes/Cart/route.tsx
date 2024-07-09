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
import { Link } from "@remix-run/react";
import { Button } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import { MetaFunction } from "@remix-run/react";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Input } from "@nextui-org/react";
import { items } from "app/api_dummy";
import { payment } from "app/api_dummy";

export const meta: MetaFunction = () => {
  return [{ title: "Cart" }, { name: "", content: "" }];
};

const CartPage = () => {
  const cartItems = items.slice(0, 5);
  const [deletedItems, setDeletedItems] = useState(cartItems);

  const handleDelete = (id: number) => {
    const filteredItems = deletedItems.filter((item) => {
      return item.id !== id;
    });
    setDeletedItems(filteredItems);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-row border-b border-white-border md:px-20 px-5 py-3 md:pb-3 md:py-0">
        <div className="flex flex-row items-center">
          <Link to="/">
            <div className="text-sm md:text-base text-gray">Home</div>
          </Link>
          <MdKeyboardDoubleArrowRight size={18} className="text-gray" />
          <div className="text-sm md:text-base text-primary">Shopping cart</div>
        </div>
      </div>

      <div className="md:px-20 space-y-10">
        <h1 className="text-2xl capitalize font-bold text-center my-5">Shopping Cart</h1>

        <div className="py-4 md:px-4">
          <Table
            radius="none"
            shadow="none"
            removeWrapper
            className="overflow-x-auto border-b border-b-gray"
          >
            <TableHeader>
              <TableColumn className="uppercase bg-transparent border-b border-b-primary py-5 md:text-base text-black">
                {" "}
              </TableColumn>
              <TableColumn className="uppercase bg-transparent border-b border-b-primary py-5 md:text-base text-black">
                {" Product"}
              </TableColumn>

              <TableColumn className="uppercase bg-transparent border-b border-b-primary py-5 md:text-base text-black">
                Price
              </TableColumn>
              <TableColumn className="uppercase bg-transparent border-b border-b-primary py-5 md:text-base text-black">
                Quantity
              </TableColumn>
              <TableColumn className="uppercase bg-transparent border-b border-b-primary py-5 md:text-base text-black">
                Subtotal
              </TableColumn>
            </TableHeader>
            <TableBody emptyContent={" Oops, your cart is empty, Please add an item to cart"}>
              {deletedItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <RxCross2
                      size={20}
                      className="text-black font-semibold cursor-pointer"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    />
                  </TableCell>

                  <TableCell className="w-96 py-5">
                    <div className="md:flex items-center md:space-x-3">
                      <Image src={item.image} className="object-cover aspect-square w-16 h-full" />
                      <span className="font-semibold text-sm md:text-base">{item.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-primary text-sm md:text-base">{item.price}</TableCell>
                  <TableCell className="text-left text-sm md:text-base">{item.qunatity}</TableCell>
                  <TableCell className="text-left font-semibold text-sm md:text-base">
                    {item.newPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex md:flex-row flex-col justify-between md:items-center space-y-4 md:space-y-0 px-4 md:px-0">
          <div className="grid grid-cols-3 gap-6 items-center">
            <Input
              variant="flat"
              type="text"
              radius="none"
              placeholder="Coupon Code"
              className="border border-white-border sm:text-sm md:text-xl w-full h-full col-span-2"
              size="sm"
            />

            <Button
              as={Link}
              href="#"
              className=" bg-yellow px-6 py-[0.83rem] w-full h-full rounded-sm  text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
              size="md"
              variant="flat"
            >
              Apply Code{" "}
            </Button>
          </div>

          <div className="md:w-1/4 w-full">
            <Button
              as={Link}
              href=" "
              className="bg-transparent w-full h-full px-4 py-3 rounded-sm text-primary text-base font-semibold hover:opacity-80 transition text-center capitalize"
              size="sm"
              variant="ghost"
            >
              Continue shopping{" "}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-start md:w-2/5 w-full space-y-10 px-4 md:px-0">
          <div className="text-2xl font-semibold text-black">Cart Totals</div>
          <div className="flex flex-col space-y-1">
            <div className="flex flex-row justify-between items-center border-t border-t-primary p-3">
              <div className=" text-black ">Subtotal</div>
              <div className=" text-black ">$238.00</div>
            </div>
            <div className="flex flex-row justify-between items-center border-y border-y-gray p-3">
              <div className=" text-black ">
                <span className="font-semibold">TOTAL</span>(ex GST)
              </div>
              <div className=" text-primary font-semibold text-xl">$238.00</div>
            </div>
          </div>
          <Button
            as={Link}
            to="/checkout"
            variant="flat"
            startContent={<FiArrowRight className="text-3xl" />}
            className="bg-green-500 py-4 w-full h-full rounded-sm text-white flex flex-row gap-5 text-base font-semibold hover:opacity-80 transition text-center capitalize"
          >
            PROCEED TO CHECKOUT
          </Button>
          <div className="border border-black px-5 py-2 flex flex-col gap-1">
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
