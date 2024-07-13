import { Link, useLoaderData, useParams } from "@remix-run/react";
import { Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { ProductCard } from "app/components/Product/ProductCard";
import { allCategories } from "app/utils/homeAllCategories";
import { items } from "app/api_dummy";
import { useMemo } from "react";
import { useSetAtom } from "jotai";
import { productPreviewAtom } from "app/atoms/product.atom";
import { fetchProductByCategory } from "app/api/products.api";

const options = [
  { value: "low-high", label: "low to high" },
  { value: "high", label: "High" },
  { value: "new", label: "New" },
];

//export const fetchProductByCategory = async (category: string) => {

export async function loader({ params }: { params: { category: string } }) {
  const { data } = await fetchProductByCategory(params.category);

  return data;
}

const CategoryPage = () => {
  const loaderData = useLoaderData<typeof loader>();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const setProduct = useSetAtom(productPreviewAtom);

  let { category } = useParams();

  const currentCategory = allCategories?.find((a) => a);

  const categoryProducts = useMemo(() => {
    const prodCat = items.filter((item) => {
      return item.category == category;
    });

    return prodCat;
  }, []);

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProduct(product);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-white-border w-full">
        <div className="flex flex-row md:px-20 px-5 py-3 md:pb-3 md:py-0">
          <div className="flex flex-row items-center w-full">
            <Link to="/">
              <span className="text-sm md:text-base text-gray">Home</span>
            </Link>
            <MdKeyboardDoubleArrowRight size={18} className="text-gray" />
            <span className="text-sm md:text-base text-primary capitalize">
              {currentCategory?.name}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-4 md:space-y-8">
        <div className="flex items-center justify-center">
          <span className="text-lg md:text-2xl font-semibold capitalize">
            {currentCategory?.name}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between md:px-20 px-5 w-full border-b border-white-border">
          <div className="flex space-x-3 items-center">
            <GoVerified size={24} className="text-primary" />
            <span className="text-black md:text-2xl font-semibold text-center">
              Featured Products
            </span>
          </div>
          <div className="justify-end w-full md:w-2/5">
            <div className="flex items-end justify-between space-x-3 mb-2 w-full">
              <Select
                variant="bordered"
                label="Filter by:"
                labelPlacement="outside-left"
                className="max-w-xs text-center"
                placeholder=""
                classNames={{
                  trigger: ["border-zinc-100 rounded-md py-1"],
                  label: ["text-sm"],
                }}
                size="sm"
              >
                {options.map((filter) => (
                  <SelectItem key={filter.value} value={filter.value}>
                    {filter.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                variant="bordered"
                label="Sort by:"
                labelPlacement="outside-left"
                className="max-w-xs text-center"
                classNames={{
                  trigger: ["border-zinc-100 rounded-md py-1"],
                  label: ["text-sm"],
                }}
                size="sm"
              >
                {options.map((filter) => (
                  <SelectItem key={filter.value} value={filter.value}>
                    {filter.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:px-20 px-5 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {loaderData &&
              loaderData.length > 0 &&
              loaderData.map((item: any) => {
                return (
                  <ProductCard
                    key={item.id}
                    image={item.overview.heroImage}
                    images={item.product.images}
                    title={item.overview.name}
                    productCode={item.overview.code}
                    description={item.product.description}
                    price={item.price}
                    newPrice={item.newPrice}
                    qunatity={item.qunatity}
                    handlePreviewFn={(data) => handlePreviewProd(data)}
                    category={item.product.categorisation.productType.typeName}
                    id={item.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
