import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Image,
} from "@nextui-org/react";
import { RxCross2 } from "react-icons/rx";


const QuoteRequestpage = () => {
  return (
    <div className="flex flex-col gap-3 w-full mx-auto py-10 lg:px-2 lg:w-3/5">
      <h1 className="text-center md:text-3xl text-2xl mb-3 font-semibold">My Quote Request</h1>

      <div className="flex md:flex-row flex-col border-2 border-gray rounded-sm">
        <div className="relative flex flex-1 justify-center items-center  w-full">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className=" w-28 flex justify-center items-center">
              <Image
                src="https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-2xl text-primary">Memory USB</div>
            <div className="text-gray">Quantity : 50</div>
            <div className="text-gray">Product code: 464674y7</div>
          </div>

          <div className="absolute left-3 top-3">
            <RxCross2 size={20} className="text-black z-10 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-row flex-1 border-l border-gray">
          <Table
            radius="none"
            shadow="none"
            removeWrapper
            aria-label="Cart table"
            className=" h-full "
            cellPadding={10}
          >
            <TableHeader>
              <TableColumn
                align="center"
                className="uppercase md:text-base bg-transparent rounded-none text-primary py-3  "
              >
                Requirements
              </TableColumn>

              <TableColumn
                align="center"
                className="uppercase md:text-base bg-transparent rounded-none text-primary py-3 border-l border-gray"
              >
                Branding
              </TableColumn>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="text-base py-5 border-y border-r border-gray">
                  Quantity : 50
                </TableCell>
                <TableCell className="text-base py-5 border-y  border-gray">
                  Method: Printing
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-base py-5 border-y border-r border-gray">
                  Colour: Red
                </TableCell>
                <TableCell className="text-base py-5 border-y border-gray">Positions: 1</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-base py-5 border-r border-gray">Memory: 1GB</TableCell>
                <TableCell className="text-base py-5 ">Method: Printing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          radius="none"
          className=" border border-primary text-primary  px-4 py-6 md:w-1/4 w-3/4"
          variant="ghost"
        >
          Continue Shopping
        </Button>
        <Button
          radius="none"
          className="bg-primary text-white px-4 py-6 md:w-1/4 w-3/4"
          variant="solid"
        >
          Finalise Quote Request
        </Button>
      </div>
    </div>
  );
};

export default QuoteRequestpage;
