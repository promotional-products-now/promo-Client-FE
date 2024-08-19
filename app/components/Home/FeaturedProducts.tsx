import { useState } from "react";
import { Link } from "@remix-run/react";
import { Button, Select, SelectItem, Tabs, Tab, useDisclosure } from "@nextui-org/react";
import { LuCheckCircle } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { ProductCard } from "app/components/Product/ProductCard";
import { items } from "app/api_dummy";
import { useSetAtom } from "jotai";
import { productPreviewAtom } from "app/atoms/product.atom";
import { PreviewProduct } from "../Product/PreviewProduct";
import { getMinMaxPrice } from "app/utils/fn";

interface FeaturedProductsProps {
  sectionlabel: string;
  gridno: number;
  showmore?: boolean;
  products: any[];
}

const options = [
  { value: "low-high", label: "low to high" },
  { value: "high", label: "High" },
  { value: "new", label: "New" },
];

const FeaturedProducts = ({ sectionlabel, showmore, products }: FeaturedProductsProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const setProduct = useSetAtom(productPreviewAtom);

  const [, setFilterItems] = useState(items);

  const selectFilter = (selectItems: string) => {
    const updatedFilter = items.filter((items) => {
      return items.category === selectItems;
    });

    setFilterItems(updatedFilter);
  };

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProduct(product);
  };

  return (
    <div className="px-3 md:px-6 lg:px-8 xl:px-12">
      <div className="mt-16 flex flex-col gap-4 relative pb-20 container mx-auto">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between item-center border-b border-gray md:p-5 !pb-0 pt-1 gap-4">
          <div className="flex space-x-3 items-center justify-center">
            <LuCheckCircle size={25} className="text-primary" />
            <span className="text-black text-2xl font-semibold text-center">{sectionlabel}</span>
          </div>

          <div className="flex md:w-7/12 flex-wrap md:flex-nowrap items-start md:gap-6 gap-3 px-2">
            <div className="hidden md:block">
              <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0",
                  cursor: "w-full bg-black",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-primary",
                }}
              >
                <Tab
                  key="photos"
                  title={
                    <button
                      aria-label="set-"
                      onClick={() => setFilterItems(items)}
                      className="flex items-center text-base font-medium space-x-2"
                    >
                      <span>Trending Products</span>
                    </button>
                  }
                />
                <Tab
                  key="music"
                  title={
                    <button
                      onClick={() => selectFilter("latest")}
                      className="flex items-center text-base font-medium space-x-2"
                    >
                      <span>Latest Products</span>
                    </button>
                  }
                />
                <Tab
                  key="videos"
                  title={
                    <button
                      onClick={() => selectFilter("aussie")}
                      className="flex items-center text-base font-medium space-x-2"
                    >
                      <span>Aussie Product</span>
                    </button>
                  }
                />
              </Tabs>
            </div>

            <Select
              variant="bordered"
              label="Price Low to High"
              className="w-40 text-center mb-2"
              classNames={{
                trigger: ["border-zinc-100 rounded-md py-1"],
                label: ["text-sm"],
              }}
            >
              {options.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          {products &&
            products.length > 0 &&
            products.map((item, index) => (
              <ProductCard
                key={index}
                image={item.overview.heroImage}
                images={item.product.images}
                title={item.overview.name}
                productCode={item.overview.code}
                description={item.product.description}
                basePrice={getMinMaxPrice(
                  item?.product?.prices?.priceGroups?.basePrice?.[0]?.base_price,
                )}
                qunatity={item.overview.minQty}
                id={item._id}
                category={item?.category?.name || item.product.categorisation.productType.typeName}
                handlePreviewFn={(data) => handlePreviewProd(data)}
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
      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default FeaturedProducts;
