import { Link } from "@remix-run/react";
import { Button, Image, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { FaArrowDown } from "react-icons/fa";
import { IconType } from "react-icons";
import { ProductCard } from "../Product/ProductCard";
import { useSetAtom } from "jotai";
import { productPreviewAtom } from "app/atoms/product.atom";
import { PreviewProduct } from "../Product/PreviewProduct";
import allCategories from "app/utils/categories";
import { getMinMaxPrice, getMinMaxQty, toSnakeCase } from "app/utils/fn";

const options = [
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
];

interface ProductSectionProps {
  Icon: IconType;
  title?: string;
  showmore?: boolean;
  heroImage: string;
  categoryName: string;
  products?: any[];
}

interface IsubCategory {
  _id: string;
  name: string;
  category: string;
  id: string;
}

const ProductSection = ({
  products,
  showmore,
  title,
  Icon,
  heroImage,
  categoryName,
}: ProductSectionProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const setProduct = useSetAtom(productPreviewAtom);

  const getCategory = (): IsubCategory[] | any => {
    return allCategories.find((cat) => cat.name === categoryName)?.subCategory;
  };

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProduct(product);
  };

  const initialProduct = products && products.length > 0 && products[0];

  return (
    <div className="relative">
      <div className="bg-white-bg px-3 md:px-6 lg:px-8 xl:px-12">
        <div className="relative flex flex-col justify-center items-center container mx-auto">
          <div className="md:grid md:grid-cols-[5fr_7fr] md:gap-4 py-10 flex flex-col w-full">
            <div className="md:hidden lg:hidden flex flex-row justify-between item-center my-10 p-3 border border-orange rounded-md">
              <div className="flex flex-row items-center justify-center gap-2 p-4">
                <Icon size={25} className="text-primary" />
                <h1 className="text-black-bg md:text-xl text-sm">{title}</h1>
              </div>
              <Select label="Explore what suits" color="default" className="w-2/4 text-center">
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="relative md:flex flex-row justify-start items-center left-0 hidden">
              <div className="relative w-full h-full flex-grow">
                <Image
                  src={heroImage}
                  alt={`Hero image for ${title}`}
                  removeWrapper
                  radius="none"
                  className="bg-primary h-full w-full transition aspect-auto absolute top-0 bottom-0 left-0 right-0 object-cover"
                  loading="lazy" // Lazy loading for performance
                />
                <div className="absolute z-20 top-0 bottom-0 left-0 right-0">
                  <div className="absolute flex flex-col gap-2 h-full justify-center items-left bg-primary/50 bg-blend-darken top-0 left-0 bottom-0 right-0 p-4 md:p-6">
                    <div className="w-14 h-14">
                      <Icon
                        className="text-white h-full w-full transition aspect-auto"
                        aria-label={`${title} Icon`}
                      />
                    </div>
                    <div>
                      <span className="text-white text-2xl">{title}</span>
                    </div>

                    {getCategory() &&
                      getCategory()
                        .slice(0, 15)
                        .map((cat: IsubCategory) => (
                          <div key={cat._id} className="flex flex-col gap-2 overflow-y-hidden-">
                            <Link
                              className="w-fit"
                              to={`/categories/${toSnakeCase(categoryName)}/${toSnakeCase(
                                cat.name,
                              )}`}
                            >
                              <span className="text-white">{cat.name}</span>
                            </Link>
                          </div>
                        ))}

                    {categoryName && (
                      <div className="w-full mt-3">
                        <Button
                          as={Link}
                          to={`/categories/${toSnakeCase(categoryName)}`}
                          className="bg-white-bg p-3 rounded-sm text-primary text-base hover:opacity-80 transition text-center capitalize"
                          size="md"
                          variant="flat"
                          fullWidth
                        >
                          View Collection
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-[450px] md:right-1 lg:right-1 hidden md:block flex-grow-0">
                <Image
                  src={initialProduct?.overview?.heroImage}
                  alt="Background image"
                  removeWrapper
                  className="object-cover h-full w-full transition aspect-auto inset-0"
                  loading="lazy" // Lazy loading for performance
                  radius="none"
                  fallbackSrc
                />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {products &&
                products.length > 0 &&
                products.slice(0, 9).map((item: any) => (
                  <ProductCard
                    key={item._id || item.id}
                    image={item?.overview?.heroImage}
                    images={item?.product?.images}
                    title={item?.overview?.name}
                    productCode={item?.overview?.code}
                    description={item?.product?.description}
                    // basePrice={getMinMaxPrice(item?.product?.prices?.priceGroups[0]?.basePrice)}
                    basePrice={getMinMaxPrice(item?.product?.prices?.priceGroups[0]?.basePrice)}
                    qty={getMinMaxQty(item?.product?.prices?.priceGroups[0]?.basePrice)}
                    id={item?._id || item?.id}
                    category={
                      item?.category?.name || item?.product?.categorisation?.productType?.typeName
                    }
                    handlePreviewFn={(data) => handlePreviewProd(data)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      {showmore && (
        <>
          <hr className="border-0 border-b-1 border-zinc-300 outline-none h-16 w-full" />

          <Button
            as={Link}
            href="#"
            variant="solid"
            color="primary"
            startContent={<FaArrowDown className="sm:text-2xl lg:text-xl" />}
            className="bg-primary px-5 py-6 rounded-sm text-white-bg flex flex-row gap-5
            text-base font-semibold hover:opacity-80 transition text-center capitalize
            absolute bottom-0 left-2/4 translate-y-2/4 -translate-x-2/4"
          >
            Show more Products
          </Button>
        </>
      )}
      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default ProductSection;
