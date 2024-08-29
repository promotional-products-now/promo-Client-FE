import { SetStateAction, useCallback, useMemo, useState } from "react";
import { Link, MetaFunction, useLoaderData, useParams } from "@remix-run/react";
import { Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { ProductCard } from "app/components/Product/ProductCard";
import { useSetAtom } from "jotai";
import { productPreviewAtom } from "app/atoms/product.atom";
import { fetchProductByCategory, fetchSubCategory } from "app/api/product/products.api";
import { getMinMaxPrice, removeSnakeCase } from "app/utils/fn";
import TablePagination from "app/components/TablePagination";
import { ProductObject } from "app/api/product/product.type";

const options = [
  { value: "low-high", label: "low to high" },
  { value: "high", label: "High" },
  { value: "new", label: "New" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Promotional Products Now " },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};

export async function loader({ params }: { params: { category: string; subCategory: string } }) {
  const { data } = await fetchSubCategory(
    removeSnakeCase(params.category),
    removeSnakeCase(params.subCategory),
  );

  return data;
}

const CategoryPage = () => {
  const loaderData = useLoaderData<typeof loader>();
  const { onOpen } = useDisclosure();
  const setProduct = useSetAtom(productPreviewAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { category, subCategory } = useParams();

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProduct(product);
  };

  const filteredProducts = useMemo(() => {
    if (!loaderData || !loaderData.docs) {
      return {
        totalPages: 0,
        hasPrevious: false,
        hasNext: false,
        nextPage: 0,
        prevPage: 0,
        limit: 0,
        products: [],
      };
    }

    const {
      docs: products,
      page,
      limit,
      totalItems,
      totalPages,
      nextPage,
      prevPage,
      hasNextPage,
      hasPrevPage,
    } = loaderData;

    return {
      totalPages,
      hasPrevious: hasPrevPage,
      hasNext: hasNextPage,
      nextPage: nextPage || 0,
      prevPage: prevPage || 0,
      limit,
      products,
    };
  }, [loaderData, currentPage, limit]);

  const handleNext = useCallback(
    (pageNumber: number) => {
      if (filteredProducts.hasNext && !pageNumber) {
        setCurrentPage(filteredProducts.nextPage);
      } else {
        setCurrentPage(pageNumber);
      }
    },
    [filteredProducts.hasNext, filteredProducts.nextPage],
  );

  const handlePrevious = useCallback(() => {
    if (filteredProducts.hasPrevious) {
      setCurrentPage(filteredProducts.prevPage);
    }
  }, [filteredProducts.hasPrevious, filteredProducts.prevPage]);

  const handleChangeLimit = useCallback((newLimit: SetStateAction<number>) => {
    setLimit(newLimit);
    setCurrentPage(1);
  }, []);

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
              {removeSnakeCase(category || "")}
            </span>
            {subCategory && (
              <>
                {" "}
                <MdKeyboardDoubleArrowRight size={18} className="text-gray" />
                <span className="text-sm md:text-base text-primary capitalize">
                  {removeSnakeCase(subCategory || "")}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-4 md:space-y-8">
        <div className="flex items-center justify-center">
          <span className="text-lg md:text-2xl font-semibold capitalize">
            {removeSnakeCase(category || "")}
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
            {filteredProducts.products.map((item: ProductObject) => {
              return (
                <ProductCard
                  key={item?._id}
                  handlePreviewFn={(data) => handlePreviewProd(data)}
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
                />
              );
            })}
          </div>

          <div className="flex w-full justify-center px-5 pb-1">
            <TablePagination
              totalPages={filteredProducts.totalPages}
              currentPage={currentPage}
              handlePrevious={handlePrevious}
              handleNext={(p) => handleNext(p as number)}
              setLimit={handleChangeLimit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
