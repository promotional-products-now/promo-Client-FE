import { useState } from "react";
import { Link } from "@remix-run/react";
import { Button, Select, SelectItem, Tabs, Tab } from "@nextui-org/react";
import { GoVerified } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { ProductCard } from "app/components/Product/ProductCard";
import { items } from "app/api_dummy";

interface FeaturedProductsProps {
  sectionlabel: string;
  gridno: number;
  showmore?: boolean;
}

const options = [
  { value: "low-high", label: "low to high" },
  { value: "high", label: "High" },
  { value: "new", label: "New" },
];

const FeaturedProducts = ({ sectionlabel, gridno, showmore }: FeaturedProductsProps) => {
  const [filterItems, setFilterItems] = useState(items);

  const selectFilter = (selectItems: string) => {
    const updatedFilter = items.filter((items) => {
      return items.category === selectItems;
    });

    setFilterItems(updatedFilter);
  };

  return (
    <div className="lg:px-20 ">
      <div className="mt-16 flex flex-col gap-4 relative pb-20">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between item-center border-b border-gray mb-8 md:p-5 p-1 gap-4">
          <div className="flex flex-col md:flex-row lg:gap-3 sm:gap-2 items-center justify-center">
            <GoVerified size={25} className="text-primary" />

            <div className="text-black text-2xl font-semibold text-center">{sectionlabel}</div>
          </div>

          <div className="flex md:w-7/12 flex-wrap md:flex-nowrap md:gap-6 gap-3 px-2">
            <div className="hidden md:block">
              <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-black",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-primary",
                }}
              >
                <Tab
                  key="photos"
                  title={
                    <div
                      onClick={() => setFilterItems(items)}
                      className="flex items-center text-sm space-x-2"
                    >
                      <span>Trending Products</span>
                    </div>
                  }
                />
                <Tab
                  key="music"
                  title={
                    <div
                      onClick={() => selectFilter("latest")}
                      className="flex items-center space-x-2"
                    >
                      <span>Latest Products</span>
                    </div>
                  }
                />
                <Tab
                  key="videos"
                  title={
                    <div
                      onClick={() => selectFilter("aussie")}
                      className="flex items-center space-x-2"
                    >
                      <span>Aussie Product</span>
                    </div>
                  }
                />
              </Tabs>
            </div>

            <Select label="Price Low to High" color="default" className="w-full text-center">
              {options.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-4">
          {filterItems.slice(0, gridno).map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              newPrice={item.newPrice}
              qunatity={item.qunatity}
            />
          ))}
        </div>

        {showmore && (
          <div className="flex flex-row gap-2 items-center justify-center w-2/6 left-[50%] absolute -translate-x-[50%] bottom-0 ">
            <Button
              as={Link}
              href="#"
              variant="solid"
              startContent={<IoIosArrowDown className="text-base" />}
              className="border rounded"
            >
              Show more Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
