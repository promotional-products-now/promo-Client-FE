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
  Image,
} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useSubmit, Link } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";

import { colors } from "app/utils/searchColors";
import { toSnakeCase } from "app/utils/fn";
import { fetchProductsTextSearchApi } from "app/api/product/products.api";

const sortFilter = [
  { label: "Higest", value: "higest-price" },
  { label: "Lowest", value: "lowest-price" },
];

export const SearchDropdown = () => {
  const [priceSort, setPriceSort] = React.useState<Selection>(new Set([]));
  const [search, setSearchValue] = useState<string>("");
  const [colours, setSearchColours] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const submit = useSubmit();

  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["searchdProducts", search],
    queryFn: () => fetchProductsTextSearchApi({ search }),
    enabled: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const onSearchChange = useCallback((value?: string) => {
    setSearchValue(value || "");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (search) {
      formData.set("q", search);
    }
    if (minPrice) {
      formData.set("minPrice", minPrice);
    }
    if (maxPrice) {
      formData.set("maxPrice", maxPrice);
    }
    if (priceSort) {
      const price = Array.from(priceSort)?.[0]?.toString();
      formData.set("sort", price);
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

  const debounceTime = 800;

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (search) {
        refetch();
      }
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const popContent = useMemo(
    () => (
      <Popover placement="bottom-start" backdrop="transparent">
        <PopoverTrigger>
          <Button isIconOnly variant="light">
            <IoIosArrowDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-1 rounded-none">
          <Card shadow="none" radius="none" className="border-none bg-transparent rounded-none">
            <CardBody className="p-3 rounded-none">
              <div className="flex flex-col md:flex-row space-x-4 max-w-[45rem]">
                <div className="space-y-4 p-4">
                  <div className="space-y-1 flex items-center gap-4 ">
                    <span className="text-lg font-medium">Quantity</span>
                    <Input
                      type="number"
                      radius="none"
                      placeholder="500"
                      className="text-primary max-w font-semibold "
                      variant="bordered"
                      classNames={{
                        inputWrapper: ["border-zinc-500"],
                      }}
                    />
                    {/* <Checkbox size="sm">In stock now</Checkbox> */}
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
                        variant="bordered"
                        color="default"
                        // value={minPrice}
                        onValueChange={setMinPrice}
                        endContent={<IoIosArrowDown />}
                        classNames={{
                          inputWrapper: ["border-zinc-500"],
                          label: "font-medium",
                        }}
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
                        variant="bordered"
                        color="default"
                        onValueChange={setMaxPrice}
                        endContent={<IoIosArrowDown />}
                        classNames={{
                          inputWrapper: ["border-zinc-500"],
                          label: " font-medium",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex w-full max-w-full flex-col gap-2">
                    <Select
                      label="Sort results by:"
                      labelPlacement="outside"
                      placeholder="Price, lowest first"
                      selectedKeys={priceSort}
                      className="max-w-xs"
                      onSelectionChange={setPriceSort}
                      variant="bordered"
                      radius="none"
                      classNames={{
                        base: "border-zinc-red",
                        value: "border-zinc-red",
                        mainWrapper: "border-zinc-red",
                        listboxWrapper: "border-zinc-red",
                        label: "font-medium",
                      }}
                    >
                      {sortFilter.map((ss) => (
                        <SelectItem key={ss.value} value={ss.value}>
                          {ss.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onPress={handleResetFilter}
                      className="bg-primary text-white rounded-none px-4"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
                <div className="space-y-4 p-4">
                  <h3 className="text-lg font-semibold">Search by Colours</h3>
                  <span className="text-sm text-gray font-normal">
                    Select one or more colours to highlight products available
                  </span>
                  <div className="grid grid-cols-4 gap-2 w-full bg-zinc-100 p-4">
                    {colors &&
                      colors.map((c, i) => (
                        <Button
                          onPress={() => handleSelectColour(c)}
                          isIconOnly
                          key={i}
                          className={
                            colours.includes(c)
                              ? "w-11 h-11 bg-clip-content p-1 aspect-square rounded-full shadow-md border-3 border-white bg-overlay-black"
                              : "w-10 h-10 aspect-square rounded-full"
                          }
                          style={{ backgroundColor: c }}
                        />
                      ))}
                  </div>
                  <div>
                    {colors && colours.length > 0 && (
                      <span className="pt-2">
                        Selected Colours: {Array.from(colours).join(", ")}{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </PopoverContent>
      </Popover>
    ),
    [colours, priceSort],
  );

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <Autocomplete
            inputValue={search}
            isLoading={isLoading}
            items={products && products?.length > 0 ? products : []}
            size="lg"
            variant="bordered"
            placeholder="Search product catalogue"
            radius="none"
            className="rounded-s-sm h-full"
            classNames={{
              listbox: ["border", "border-zinc-100"],
              popoverContent: "rounded-md",
              listboxWrapper: "rounded-s-md min-h-[48px]",
              base: "h-full",
            }}
            isClearable
            startContent={popContent}
            onValueChange={onSearchChange}
          >
            {(item) => (
              <AutocompleteItem key={item.overview.name} className="capitalize">
                <Link
                  to={`/products/${item.category.name ? toSnakeCase(item.category.name) : "_"}/${
                    item.slug
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <Image
                      alt={`Image of ${item?.overview?.name}`}
                      radius="none"
                      src={item?.overview?.heroImage}
                      removeWrapper
                      height={48}
                      width={48}
                      className=" !object-scale-down border-2 border-zinc-100 "
                      classNames={{
                        wrapper:
                          "!object-scale-down border-2 border-zinc-100 h-12 w-12 transition aspect-square inset-0",
                      }}
                      loading="lazy"
                    />{" "}
                    <span> {item.overview.name}</span>
                  </div>
                </Link>
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Button
            type="submit"
            size="lg"
            isIconOnly
            className="bg-primary text-white rounded-s-none rounded-e-md"
          >
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
              />
            ))}
          </div>
        )}
      </form>
    </div>
  );
};
