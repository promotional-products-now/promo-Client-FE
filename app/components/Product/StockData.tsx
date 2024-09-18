import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

// Define interfaces for the data
interface Color {
  _id: { $oid: string };
  name: string;
}

interface StockItem {
  name: string;
  qty_on_hand: number;
  qty_on_order: number | null;
  date_expected: string | null;
}

interface StockData {
  items: StockItem[];
}

interface ListData {
  list: Color[];
}

interface StockStatusProps {
  stockData: StockData;
  listData: ListData;
}

const StockStatus: React.FC<StockStatusProps> = ({ stockData, listData }) => {
  const { items } = stockData;

  // Create a mapping of color to stock info
  const stockMap: { [key: string]: StockItem } = (items ? items : []).reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
  }, {} as { [key: string]: StockItem });

  // Map over listData to generate color options with stock status
  const colours = listData.list.map((color) => {
    const stockInfo = stockMap?.[color.name] || {};
    const qtyOnHand = stockInfo?.qty_on_hand || 0;
    const qtyOnOrder = stockInfo?.qty_on_order || 0;
    const dateExpected = stockInfo?.date_expected;

    let status;
    if (qtyOnHand > 0) {
      status = "In Stock";
    } else if (qtyOnOrder > 0 && dateExpected) {
      status = `0 Stock (${qtyOnOrder} due ${new Date(dateExpected).toLocaleDateString()})`;
    } else {
      status = "Out of Stock";
    }

    // Return the color data with stock status
    return {
      id: color?._id?.$oid || "",
      name: color?.name || "",
      code: color?.name.toLowerCase() || "", // Adjust this if you have actual color codes
      status,
    };
  });

  return (
    <div className="pl-2">
      {listData.list && listData.list.length > 0 && (
        <Select
          variant="bordered"
          radius="none"
          label="Colour"
          labelPlacement="outside-left"
          placeholder="Select a color"
          items={colours}
          classNames={{
            popoverContent: "rounded-none",
            label: "font-bold",
          }}
        >
          {(col) => (
            <SelectItem key={col?.name} textValue={col?.name}>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex items-center space-x-1">
                  {/* Color dot */}
                  <div
                    className="w-3 h-3 rounded-full aspect-square"
                    style={{ backgroundColor: col?.code }}
                  ></div>
                  <span>{col?.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {/* Status icon and text */}
                  <span>
                    {col?.status.includes("In Stock") ? (
                      <IoMdCheckmarkCircle className="text-green-600" />
                    ) : (
                      <MdCancel className="text-red-600" />
                    )}
                  </span>
                  <span className="text-sm">{col?.status}</span>
                </div>
              </div>
            </SelectItem>
          )}
        </Select>
      )}
    </div>
  );
};

export default StockStatus;
