import { useState } from "react";
import { Link } from "@remix-run/react";
import { Button, Select, SelectItem, Tabs, Tab, useDisclosure } from "@nextui-org/react";
import { LuCheckCircle } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { ProductCard } from "app/components/Product/ProductCard";
import { useSetAtom } from "jotai";
import { productPreviewAtom } from "app/atoms/product.atom";
import { PreviewProduct } from "../Product/PreviewProduct";
import { getMinMaxPrice } from "app/utils/fn";
import { useQuery } from "@tanstack/react-query";
import { fetchLatestProduct, fetchTopSellingProductsApi } from "app/api/product/products.api";
import React from "react";
import { ProductObject } from "app/api/product/product.type";
interface FeaturedProductsProps {
  sectionLabel: string;
  gridNo: number;
  showMore?: boolean;
}

const options = [
  { value: "low-high", label: "Low to High" },
  { value: "high", label: "High" },
  { value: "new", label: "New" },
];

const FeaturedProducts = ({ sectionLabel, showMore }: FeaturedProductsProps) => {
  const [selected, setSelected] = React.useState("trendingProducts");

  const { data: latestProducts } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: () => fetchLatestProduct(),
    refetchOnMount: false,
  });

  const { data: trendingProducts } = useQuery({
    queryKey: ["trendingProducts"],
    queryFn: () => fetchTopSellingProductsApi(),
    refetchOnMount: false,
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const setProduct = useSetAtom(productPreviewAtom);

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProduct(product);
  };

  return (
    <div className="px-3 md:px-6 lg:px-8 xl:px-12">
      <div className="flex flex-col gap-4 relative container mx-auto">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between item-center border-b border-gray md:p-5 !pb-0 pt-1 gap-4">
          <div className="flex space-x-3 items-center justify-center">
            <LuCheckCircle size={25} className="text-primary" />
            <span className="text-black text-2xl font-semibold text-center">{sectionLabel}</span>
          </div>

          <div className="flex md:w-7/12 flex-wrap md:flex-nowrap items-start justify-end md:gap-6 gap-3 px-2">
            <div className="hidden md:block">
              <Tabs
                aria-label="Product Filter Options"
                color="primary"
                variant="underlined"
                defaultSelectedKey={"trendingProducts"}
                onSelectionChange={(key: any) => setSelected(key)}
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0",
                  cursor: "w-full bg-black",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-primary",
                }}
              >
                <Tab
                  key="trendingProducts"
                  title={
                    <button
                      aria-label="Trending Products"
                      className="flex items-center text-base font-medium space-x-2"
                    >
                      <span>Trending Products</span>
                    </button>
                  }
                />
                <Tab
                  key="latestProducts"
                  title={
                    <button
                      aria-label="Latest Products"
                      className="flex items-center text-base font-medium space-x-2"
                    >
                      <span>Latest Products</span>
                    </button>
                  }
                />
              </Tabs>
            </div>
          </div>
        </div>

        {selected === "latestProducts" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {latestProducts &&
              latestProducts.length > 0 &&
              latestProducts.map((item: ProductObject) => {
                return (
                  <ProductCard
                    key={item?._id}
                    image={item?.overview?.heroImage}
                    images={item?.product?.images}
                    title={item?.overview?.name}
                    productCode={item?.overview?.code}
                    description={item?.product?.description}
                    basePrice={getMinMaxPrice(item?.product?.prices?.priceGroups[0]?.basePrice)}
                    qunatity={item?.overview?.minQty}
                    id={item?._id}
                    category={
                      item?.category?.name || item?.product?.categorisation?.productType?.typeName
                    }
                    handlePreviewFn={handlePreviewProd}
                  />
                );
              })}
          </div>
        )}
        {selected === "trendingProducts" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {trendingProducts &&
              trendingProducts.docs.length > 0 &&
              trendingProducts.docs?.map((item: { count: number; product: ProductObject }) => (
                <ProductCard
                  key={item?.product?._id}
                  image={item?.product?.overview?.heroImage}
                  images={item?.product?.product?.images}
                  title={item?.product?.overview?.name}
                  productCode={item?.product?.overview?.code}
                  description={item?.product?.product?.description}
                  basePrice={getMinMaxPrice(
                    item?.product?.product?.prices?.priceGroups[0]?.basePrice,
                  )}
                  qunatity={item?.product?.overview?.minQty}
                  id={item?.product?._id}
                  category={
                    item?.product?.category?.name ||
                    item?.product?.product?.categorisation?.productType?.typeName
                  }
                  handlePreviewFn={handlePreviewProd}
                />
              ))}
          </div>
        )}
        {showMore && (
          <div className="flex flex-row gap-2 items-center justify-center w-2/6 left-[50%] absolute -translate-x-[50%] bottom-0">
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
