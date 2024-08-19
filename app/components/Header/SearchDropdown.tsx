import { useCallback, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Checkbox,
  Selection,
  Select,
  SelectItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { colors } from "app/utils/searchColors";
import { FiSearch } from "react-icons/fi";
import { useSubmit } from "@remix-run/react";

const sortFilter = [
  { label: "Price", value: "price" },
  { label: "Lowest", value: "lowest" },
];

export const SearchDropdown = () => {
  const [values, setValues] = useState<Selection>(new Set(["price", "lowest"]));
  const [search, setSearchValue] = useState<string>("");
  const submit = useSubmit();

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setSearchValue(value);
    } else {
      setSearchValue("");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (search) {
      const formData = new FormData();
      formData.set("q", search);

      submit(formData, { method: "get", action: "/search" });
    }
  };

  const popContent = useMemo(() => {
    return (
      <Popover placement="bottom-start" backdrop="transparent">
        <PopoverTrigger>
          <Button
            isIconOnly
            variant="light"
            className=" items-center rounded-none border-r border-r-zinc-200 "
          >
            <IoIosArrowDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-1 rounded-none">
          <Card shadow="none" radius="none" className=" border-none bg-transparent rounded-none">
            <CardBody className="p-3 rounded-none">
              <div className="flex flex-col md:flex-row space-x-4 max-w-[45rem]">
                <div className="space-y-4 p-4">
                  <div className="space-y-1">
                    <Input
                      type="text"
                      radius="none"
                      label="Quantity"
                      labelPlacement="outside"
                      placeholder="500"
                      className="text-primary max-w"
                    />
                    <Checkbox size="sm">In stock now</Checkbox>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 space-x-3">
                    <div className="space-y-1">
                      <Input
                        type="text"
                        radius="none"
                        label="Price from"
                        labelPlacement="outside"
                        placeholder="500"
                        className="text-primary"
                        startContent="$"
                        endContent={<IoIosArrowDown />}
                      />
                      <span className="text-xs text-gray">Plus Branding cost and Freight cost</span>
                    </div>
                    <div className="space-y-1">
                      <Input
                        type="text"
                        radius="none"
                        label="Price To"
                        labelPlacement="outside"
                        placeholder="500"
                        className="text-primary"
                        startContent="$"
                        endContent={<IoIosArrowDown />}
                      />
                    </div>
                  </div>
                  <div className="flex w-full max-w-full flex-col gap-2">
                    <Select
                      label="Sort results by:"
                      labelPlacement="outside"
                      selectionMode="multiple"
                      placeholder="Price, lowest first"
                      selectedKeys={values}
                      onSelectionChange={setValues}
                    >
                      {sortFilter.map((ss) => (
                        <SelectItem key={ss.value} value={ss.value}>
                          {ss.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-primary text-white rounded-none px-4">
                      Reset
                    </Button>
                  </div>
                </div>
                <div className="space-y-4 p-4 ">
                  <h3 className="text-lg font-semibold">Search by Colours</h3>
                  <span className="text-sm text-gray font-normal">
                    Select one or more colours to highlight products available
                  </span>
                  <div className="grid grid-cols-4 gap-2 w-full bg-zinc-100 p-4">
                    {colors.map((c, i) => (
                      <Button
                        isIconOnly
                        key={i}
                        className="w-10 h-10 aspect-square rounded-full"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </PopoverContent>
      </Popover>
    );
  }, [values]);
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <Input
            type="text"
            size="sm"
            variant="bordered"
            placeholder="Search product catalogue"
            radius="none"
            className="rounded-s-sm"
            startContent={popContent}
            classNames={{
              inputWrapper: ["border", "border-zinc-100", "h-12"],
              mainWrapper: "rounded-md",
              base: "rounded-s-md",
            }}
            isClearable
            value={search}
            onValueChange={onSearchChange}
          />
          <Button
            type="submit"
            size="lg"
            isIconOnly
            className="bg-primary text-white rounded-s-none rounded-e-md"
          >
            <FiSearch />
          </Button>
        </div>
      </form>
    </div>
  );
};
