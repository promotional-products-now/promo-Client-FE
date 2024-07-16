import { Link } from "@remix-run/react";
import { Button, Image, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { FaArrowDown } from "react-icons/fa";
import { IconType } from "react-icons";
import { ProductCard } from "../Product/ProductCard";
import { items } from "app/api_dummy";
import { useSetAtom } from "jotai";
import { productPreviewAtom } from "app/atoms/product.atom";
import { PreviewProduct } from "../Product/PreviewProduct";
import allCategories from "app/utils/categories";
import { toSnakeCase } from "app/utils/fn";

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
  products?: [];
}

interface IsubCategory {
  _id: String;
  name: String;
  category: String;
  id: String;
}
interface Icategory {
  _id: String;
  name: String;
  id: String;
  subCategory: IsubCategory[];
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
  return (
    <div className="bg-white-bg mt-20 px-3 md:px-6 lg:px-8 xl:px-12">
      <div className="relative flex flex-col justify-center items-center container mx-auto">
        <div className="md:grid md:grid-cols-[4fr_7fr] py-10 flex flex-col w-full">
          <div className="md:hidden lg:hidden flex flex-row justify-between item-center my-10 p-3 border  border-orange rounded-md">
            <div className="flex flex-row items-center justify-center gap-2 p-4">
              <Icon size={25} className="text-primary" />
              <h1 className="text-black-bg md:text-xl text-sm">{title}</h1>
            </div>
            <Select label="Explore what suits" color="default" className="w-2/4  text-center">
              {options.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>{" "}
          </div>

          <div className="relative md:flex flex-row justify-start items-center left-0 hidden">
            <div className="relative w-[17.2rem] border h-full z-20 ">
              <Image
                src={
                  heroImage ??
                  "https://images.pexels.com/photos/7674483/pexels-photo-7674483.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="overlay"
                removeWrapper
                radius="none"
                className="   bg-primary  h-full w-full transition aspect-auto absolute top-0 bottom-0 left-0 right-0"
              />
              <div className=" bg-blue-500/50 	 absolute z-20 top-0 bottom-0 left-0 right-0">
                <div className="absolute flex flex-col gap-4 h-full justify-center items-left bg-primary/50  bg-blend-darken top-0 left-0 bottom-0 right-0 p-4 md:p-6">
                  <div className="w-14 h-14">
                    <Icon className="text-white h-full w-full transition aspect-auto" />
                  </div>
                  <div className="text-white text-2xl">{title}</div>

                  {getCategory() &&
                    getCategory()
                      .slice(0, 15)
                      .map((cat: IsubCategory) => (
                        <div className="flex flex-col gap-y-auto">
                          <div>
                            <div key={`id_${cat._id}`} className="text-white">
                              {cat.name}
                            </div>
                          </div>
                        </div>
                      ))}

                  {categoryName && (
                    <div className="w-3/4 mt-5">
                      <Button
                        as={Link}
                        to={`/categories/${toSnakeCase(categoryName)}`}
                        className="bg-white-bg px-3 py-3 rounded-sm  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
                        size="md"
                        variant="ghost"
                      >
                        View Collection
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-[302px] h-[600.11px] absolute md:right-1 lg:right-1 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="bg"
                removeWrapper
                className="object-cover h-full w-full transition aspect-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {products &&
              products.length > 0 &&
              products.slice(0, 9).map((item: any) => {
                console.log({ item });
                return (
                  <ProductCard
                    image={item.overview.heroImage}
                    images={item.product.images}
                    title={item.overview.name}
                    productCode={item.overview.code}
                    description={item.product.description}
                    price={0}
                    newPrice={""}
                    qunatity={item.overview.minQty}
                    id={item.id || item._id}
                    category={item.product.categorisation.productType.typeName}
                    handlePreviewFn={(data) => handlePreviewProd(data)}
                  />
                );
              })}
          </div>
        </div>

        {showmore && (
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
            Show more Products{" "}
          </Button>
          // </div>
        )}
      </div>
      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default ProductSection;
