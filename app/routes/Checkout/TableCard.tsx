import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { items } from "app/data";
import { AiTwotoneDelete } from "react-icons/ai";

const TableCard = () => {
  return (
    <div className="border border-y-black py-4 px-4 rounded-md">
      <Table
        aria-label="Example static collection table"
        radius="none"
        shadow="none"
        className="bg-transparent"
      >
        <TableHeader>
          <TableColumn className="uppercase">Delete</TableColumn>

          <TableColumn className="uppercase">Product</TableColumn>
          <TableColumn className="uppercase">Name</TableColumn>
          <TableColumn className="uppercase">Price</TableColumn>
          <TableColumn className="uppercase">Qunatity</TableColumn>
          <TableColumn className="uppercase">Subtotal</TableColumn>
        </TableHeader>
        <TableBody>
          {items.slice(0, 3).map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <AiTwotoneDelete size={20} className="text-red-800" />
              </TableCell>

              <TableCell className="w-[100px]">
                <img src={item.image} className="object-cover aspect-square" />
              </TableCell>

              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.qunatity}</TableCell>
              <TableCell className="text-left">{item.newPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableCard;
