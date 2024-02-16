import { GoVerified } from "react-icons/go";
import { items } from "app/api_dummy";
import ProductCard from "app/components/Card/ProductCard";
import { IoIosArrowDown } from "react-icons/io";
import { Button, Tabs, Tab, Chip } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface FeaturedProductsProps {
  sectionlabel: string;
  gridno: number;
  showmore?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const FeaturedProducts = ({
  sectionlabel,
  gridno,
  showmore,
  value,
  onChange,
}: FeaturedProductsProps) => {
  const [filterItems, setFilterItems] = useState(items);

  const selectFilter = (selectItems: any) => {
    const updatedFilter = items.filter((items) => {
      return items.category === selectItems;
    });

    setFilterItems(updatedFilter);
  };

  const options = [
    { value: "low-high", label: "low to high" },
    { value: "high", label: "High" },
    { value: "new", label: "New" },
  ];
  return (
    <div className="md:px-20 px-5">
      <div className="mt-[62px] flex flex-col gap-4 relative pb-20">
        <div className="flex flex-row justify-between item-center border-b-[1px] border-textcolor mb-8 md:p-5  p-1 ">
          <div className="flex flex-row gap-3 items-center">
            <GoVerified size={25} className="text-primary" />

            <div className="text-black md:text-2xl text-lg font-semibold">{sectionlabel}</div>
          </div>

          <div className="flex w-1/2 flex-wrap md:flex-nowrap gap-6">
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
                  <div className="flex items-center space-x-2">
                    <span>Trending Products</span>
                  </div>
                }
                onClick={() => setFilterItems(items)}
              />
              <Tab
                key="music"
                title={
                  <div className="flex items-center space-x-2">
                    <span>Latest Products</span>
                  </div>
                }
                onClick={() => selectFilter("latest")}
              />
              <Tab
                key="videos"
                title={
                  <div className="flex items-center space-x-2">
                    <span>Aussie Product</span>
                  </div>
                }
                onClick={() => selectFilter("aussie")}
              />
            </Tabs>

            <Select label="Price Low to High" color="default" className="max-w-xs text-center">
              {options.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
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
          <div className="flex flex-row gap-2 items-center justify-center w-2/6	 left-[50%] absolute -translate-x-[50%] bottom-0 ">
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
