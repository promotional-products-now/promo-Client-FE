import {
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
  Image,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { BsCheck2Square } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const animals = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "b;ue" },
  { label: "Yellow", value: "yellow" },
];

const cardData = ["ABOUT", "DETAILS", "ADDITIONAL INFO"];

export default function Route() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="space-y-6 md:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
          <div className="space-y-4 w-full order-2 md:order-1 md:px-6">
            <div className="space-y-1">
              <span className="text-lg md:xl font-normal">Memory USB</span>
              <div className="flex items-center justify-between">
                <span className="text-xs">Product Code: pyun67858</span>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <FaStar key={i} className="text-xs text-orange" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 4].map((_, i) => (
                <div key={i} className="w-full h-16 relative rounded-sm overflow-hidden">
                  <Image
                    alt=""
                    radius="none"
                    src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
                    removeWrapper
                    fallbackSrc
                    className="absolute inset-0 w-full h-full object-cover transition-transform transform-gpu aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="order-1">
            <Image
              alt=""
              radius="none"
              src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
              removeWrapper
              className="object-cover w-full transition aspect-square inset-0"
            />
          </div>
        </div>

        <form>
          <div className="bg-gray1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between w-full">
                <span className="text-lg md:text-xl font-bold text-primary">
                  1.Select Product Details
                </span>
                <Checkbox
                  defaultSelected
                  color="default"
                  icon={<BsCheck2Square className="text-green-600" />}
                >
                  In stock
                </Checkbox>
              </div>
              <Divider />
              <div className="w-full border">
                <Input
                  type="text"
                  variant="bordered"
                  radius="none"
                  label="Quantity"
                  labelPlacement="outside-left"
                  className="w-full border border-red-500"
                  placeholder="50"
                />
              </div>
              <div className="">
                <Select
                  variant="bordered"
                  radius="none"
                  label="Colour"
                  labelPlacement="outside-left"
                  placeholder="Red"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className="">
                <Select
                  variant="bordered"
                  radius="none"
                  label="Model"
                  labelPlacement="outside-left"
                  placeholder="Select"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="">2</div>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10"></div>
      </div>
    </div>
  );
}
