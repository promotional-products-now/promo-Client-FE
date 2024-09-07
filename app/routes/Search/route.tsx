import { useDisclosure } from "@nextui-org/react";
import { LoaderFunction } from "@remix-run/node";
import { Link, useFetcher, useLoaderData, useLocation } from "@remix-run/react";
import { SetStateAction, useCallback, useState } from "react";
import { useSetAtom } from "jotai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { fetchProductsApi } from "app/api/product/products.api";
import { productPreviewAtom } from "app/atoms/product.atom";
import { PreviewProduct } from "app/components/Product/PreviewProduct";
import { ProductCard } from "app/components/Product/ProductCard";
import { getMinMaxPrice, getMinMaxQty, removeSnakeCase } from "app/utils/fn";
import TablePagination from "app/components/TablePagination";

export const loader: LoaderFunction = async ({ request }: { request: { url: string } }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("q") || "";
  const colours = url.searchParams.getAll("colours");
  const selectedColour = colours.map((colour) => `&colours=${colour}`).join("");
  const page = parseInt(url.searchParams.get("page") || "1", 1);
  const limit = parseInt(url.searchParams.get("limit") || "10", 10);

  const { data } = await fetchProductsApi({
    search: searchQuery,
    page,
    limit,
    colours: selectedColour,
  });

  return data;
};

export default function SearchPage() {
  const loaderData = useLoaderData<typeof loader>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const setProductPrevData = useSetAtom(productPreviewAtom);
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("q");
  const fetcher = useFetcher();

  const searchResult = loaderData ? loaderData?.docs : [];

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProductPrevData(product);
  };

  const handleNext = useCallback(
    (pageNumber: number) => {
      if (loaderData?.hasNext && !pageNumber) {
        setCurrentPage(loaderData?.nextPage);
      } else {
        setCurrentPage(pageNumber);
      }
      fetcher.load(`/search?page=${pageNumber}&limit=${limit}`);
    },
    [fetcher, limit, loaderData?.hasNext, loaderData?.nextPage],
  );

  const handlePrevious = () => {
    if (loaderData?.hasPrevious) {
      setCurrentPage(loaderData?.prevPage);
    }
  };

  const handleChangeLimit = useCallback(
    (newLimit: SetStateAction<number>) => {
      setLimit(newLimit);
      setCurrentPage(1);
      fetcher.load(`/search?page=1&limit=${newLimit}`);
    },
    [fetcher],
  );

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
              {removeSnakeCase(queryParam || "")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:px-20 px-5 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {searchResult.map((item: any) => {
            return (
              <div key={item._id || item?.id} className="flex flex-row">
                <ProductCard
                  image={item.overview.heroImage}
                  images={item.product.images}
                  title={item.overview.name}
                  productCode={item.overview.code}
                  description={item.product.description}
                  basePrice={getMinMaxPrice(
                    item?.product?.prices?.priceGroups?.basePrice?.[0]?.base_price,
                  )}
                  qty={getMinMaxQty(item?.product?.prices?.priceGroups[0]?.basePrice)}
                  handlePreviewFn={(data) => handlePreviewProd(data)}
                  id={item._id || item.id}
                  category={
                    item?.category?.name || item.product.categorisation.productType.typeName
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-center px-5 pb-1">
          <TablePagination
            totalPages={loaderData?.totalPages}
            currentPage={currentPage}
            handlePrevious={handlePrevious}
            handleNext={(p) => handleNext(p as number)}
            setLimit={handleChangeLimit}
          />
        </div>
      </div>
      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
