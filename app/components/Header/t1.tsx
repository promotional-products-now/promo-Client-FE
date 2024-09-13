import React, { useCallback, useMemo, useState } from "react";
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
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useSubmit } from "@remix-run/react";
import { useAsyncList } from "@react-stately/data";
import Typesense from "typesense";
import { colors } from "app/utils/searchColors";

// Initialize Typesense client
const typesense = new Typesense.Client({
  nodes: [
    {
      host: "x0j1ihc5k8tbey4wp-1.a1.typesense.net", // Replace with your host
      port: 443, // Replace with your port (443 for https)
      protocol: "https", // Use https if secure
    },
  ],
  apiKey: "XC2ARAEskNNjes1u2IDxM9oKtWSop0dI", // Replace with your API key
  // connectionTimeoutSeconds: 2,
});

const sortFilter = [
  { label: "Price", value: "price" },
  { label: "Lowest", value: "lowest" },
];

export const SearchDropdown = () => {
  const [values, setValues] = useState<Selection>(new Set(["price", "lowest"]));
  const [search, setSearchValue] = useState<string>("");
  const [colours, setSearchColours] = useState<string[]>([]);
  const submit = useSubmit();

  const onSearchChange = useCallback((value?: string) => {
    setSearchValue(value || "");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (search) {
      formData.set("q", search);
    }
    colours.forEach((colour) => formData.append("colours", colour));
    submit(formData, { method: "get", action: "/search" });
  };

  const handleSelectColour = (col: string) => {
    setSearchColours((prevCols) =>
      prevCols.includes(col) ? prevCols.filter((cc) => cc !== col) : [...prevCols, col],
    );
  };

  const handleResetFilter = () => {
    setSearchColours([]);
  };

  let list = useAsyncList<any>({
    async load({ signal, filterText }) {
      console.log({ signal, filterText });
      const searchResults = await typesense
        .collections("products") // Replace with your collection name
        .documents()
        .search({
          q: filterText,
          query_by: "overview.name", // Replace with fields you're querying
        });

      return {
        items: searchResults.hits.map((hit: any) => hit.document),
      };
    },
  });

  const popContent = useMemo(
    () => (
      <Popover placement="bottom-start" backdrop="transparent">
        <PopoverTrigger>
          <Button isIconOnly variant="light">
            <IoIosArrowDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Card shadow="none" className="bg-transparent">
            <CardBody className="p-3">
              <div className="flex flex-col space-y-4">
                <Input type="text" label="Quantity" placeholder="500" className="text-primary" />
                <Checkbox size="sm">In stock now</Checkbox>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="text" label="Price from" placeholder="500" startContent="$" />
                  <Input type="text" label="Price To" placeholder="500" startContent="$" />
                </div>
                <Select
                  label="Sort results by:"
                  selectionMode="multiple"
                  selectedKeys={values}
                  onSelectionChange={setValues}
                >
                  {sortFilter.map((ss) => (
                    <SelectItem key={ss.value} value={ss.value}>
                      {ss.label}
                    </SelectItem>
                  ))}
                </Select>
                <Button onPress={handleResetFilter}>Reset</Button>
              </div>
            </CardBody>
          </Card>
        </PopoverContent>
      </Popover>
    ),
    [colours, values],
  );

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <Autocomplete
            className="max-w-xs"
            inputValue={list.filterText}
            isLoading={list.isLoading}
            items={list.items}
            label="Search Products"
            placeholder="Type to search..."
            onInputChange={list.setFilterText}
          >
            {(item) => (
              <AutocompleteItem key={item.name} className="capitalize">
                {item.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Button type="submit" size="lg" isIconOnly className="bg-primary text-white">
            <FiSearch />
          </Button>
        </div>
        {colours.length > 0 && (
          <div className="flex gap-2 mt-1">
            {colours.map((c, i) => (
              <div
                key={i}
                className="w-12 h-4 rounded-md shadow-md border-3 border-white"
                style={{ backgroundColor: c }}
              ></div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};
