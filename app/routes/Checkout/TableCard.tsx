import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { items } from "app/data";
import { FaX } from "react-icons/fa6";

const TableCard = () => {
  return (
    <div className="border-y border-t-[#0079C0] py-4 px-4">
      <Table
        aria-label="Example static collection table"
        radius="none"
        shadow="none"
        className="bg-transparent"
      >
        <TableHeader className="bg-white ">
          <TableColumn className="uppercase text-base">{ " "}</TableColumn>

          <TableColumn className="uppercase text-base text-black">{ " "}</TableColumn>
          <TableColumn className="uppercase text-base text-black">Product</TableColumn>
          <TableColumn className="uppercase text-base text-black">Price</TableColumn>
          <TableColumn className="uppercase text-base text-black">Quantity</TableColumn>
          <TableColumn className="uppercase text-base text-black">Subtotal</TableColumn>
        </TableHeader>
        <TableBody>
          {items.slice(0, 3).map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <FaX size={12} className="text-black" />
              </TableCell>

              <TableCell className="w-[100px]">
                <img src={item.image} className="object-cover aspect-square" />
              </TableCell>

              <TableCell className="font-base text-base">{item.title}</TableCell>
              <TableCell className="text-[#0079C0] text-base">{item.price}</TableCell>
              <TableCell>{item.qunatity}</TableCell>
              <TableCell className="text-left text-base">{item.newPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableCard;
