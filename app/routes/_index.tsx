import { useAtom, useSetAtom } from "jotai";
import { Button, Image, Link, useDisclosure } from "@nextui-org/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { GiClothes } from "react-icons/gi";
import { ImFire } from "react-icons/im";
import { PiFirstAidKitLight } from "react-icons/pi";
import { FaFemale } from "react-icons/fa";
import { ProductCard } from "app/components/Product/ProductCard";
import ProductSection from "app/components/Home/ProductSection";
import FeaturedProducts from "app/components/Home/FeaturedProducts";
import Carousel from "app/components/Carousel";
import ContactUs from "app/components/Home/Contact-us";
import { AppaIcon } from "app/assets/appaIcon";
import CategoryList from "app/components/CategoryList";
import { isCategoryListOpen } from "app/atoms/category.atom";
import { BlogCard } from "app/components/Blog/BlogCard";
import { fetchHotProductsApi, fetchProductShowCase } from "app/api/product/products.api";
import { json, useLoaderData } from "@remix-run/react";
import { PreviewProduct } from "app/components/Product/PreviewProduct";
import { productPreviewAtom } from "app/atoms/product.atom";
import { fetchAllBlogsApi } from "app/api/blog.api";
import { BlogCardProps } from "./Blog/interface";
import HealthImage from "app/assets/category/health-cat.png";
import ClothingImage from "app/assets/category/clothes.png";
import BagImage from "app/assets/category/bags.png";
import axios from "axios";
import { getMinMaxPrice } from "app/utils/fn";
import allCategory from "app/utils/categories";
import { homePageSchema } from "./_index_seo";
import { useQuery } from "@tanstack/react-query";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Promotional Products Now" },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};

export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400",
  };
}

export const loader: LoaderFunction = async () => {
  try {
    const [productsResponse, productShowCase] = await Promise.all([
      fetchHotProductsApi({ page: 1, limit: 6 }),
      fetchProductShowCase(["Health%20%26%20Personal", "Clothing", "Home%20%26%20Living"]),
    ]);

    return json({
      products: productsResponse,
      productShowCase: productShowCase.data,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Response(error.message, {
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Internal Server Error",
      });
    } else {
      throw new Response("An unexpected error occurred", {
        status: 500,
        statusText: "Internal Server Error",
      });
    }
  }
};

export default function Index() {
  const { data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchAllBlogsApi({ limit: 6 }),
    refetchOnMount: false,
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const setProductPrevData = useSetAtom(productPreviewAtom);

  const loaderData = useLoaderData<typeof loader>();

  const [isCategoryOpen] = useAtom(isCategoryListOpen);

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProductPrevData(product);
  };

  return (
    <>
      <div className="bg-white-bg px-3 md:px-6 lg:px-8 xl:px-12 lg:h-[700px]">
        <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-center lg:flex-grow h-full">
          <div
            aria-label="Link Categories"
            className={`lg:flex flex-grow overflow-y-scroll  bg-white lg:-mt-4 lg:mb-8 hidden md:block divide-y divide-primary transition-height duration-300 ease-linear  ${
              !isCategoryOpen ? "h-0 w-0 lg:mr-0" : "w-full lg:mr-8 lg:max-w-80"
            } `}
          >
            {allCategory && <CategoryList categories={allCategory} />}
          </div>
          <div
            className={`flex flex-col md:flex-col lg:flex-row justify-center container mx-auto py-3 lg:py-8 !m-0 transition-width duration-300 ease-linear ${
              !isCategoryOpen ? "" : "w-full"
            }`}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 bg-lightBlue justify-center items-center p-5">
              <div className="flex flex-col gap-2 md:gap-3">
                <h3 className="font-semibold text-sm md:text-base text-white-bg space-y-2">
                  CLOTHING
                </h3>
                <h1 className="font-bold text-lg md:text-2xl text-white-bg capitalize">
                  Podium Cool Piping Polo Shirt Short Sleeve
                </h1>
                <h3 className="text-sm md:text-base text-white-bg font-normal">PRICE RANGE </h3>
                <h3 className="text-sm md:text-base text-white-bg font-normal">$21.95</h3>
                <div className="flex flex-col gap-3 justify-start">
                  <Button
                    as={Link}
                    href="#"
                    className="bg-primary w-min p-5 rounded-md text-white-bg text-base font-semibold hover:opacity-80 transition text-center capitalize"
                    variant="solid"
                  >
                    Shop now
                  </Button>
                  <Button
                    as={Link}
                    href="/#"
                    className="bg-white-bg w-max p-5 rounded-md text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
                    variant="solid"
                  >
                    View Collection
                  </Button>
                </div>
              </div>
              <div className="object-cover h-full">
                <Image
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
                  radius="none"
                  alt="Podium Cool Piping Polo Shirt"
                  removeWrapper
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col align-center">
              <div className="bg-lime-100 flex flex-row justify-center items-center gap-1 h-full p-5 flex-1">
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-sm md:text-base text-primary">
                    HEALTH & FITNESS
                  </h3>
                  <h1 className="font-bold text-lg md:text-2xl text-black capitalize space-y-2">
                    Champion Fitness Activity Tracker
                  </h1>
                  <div className="flex flex-col gap-3 justify-start">
                    <Button
                      as={Link}
                      href="#"
                      className="bg-primary p-5 w-min rounded-md text-white-bg text-base hover:opacity-80 transition text-center capitalize"
                      size="md"
                      variant="solid"
                    >
                      Shop now
                    </Button>
                  </div>
                </div>

                <Link href="cart" className="w-56 h-36">
                  <Image
                    src="https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Champion Fitness Activity Tracker"
                    radius="none"
                    removeWrapper
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="bg-primary flex flex-row justify-center items-center gap-5 p-6 flex-1">
                <div className="w-56 h-36">
                  <Image
                    src="https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Harley Laptop Backpack"
                    radius="none"
                    removeWrapper
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-sm md:text-base space-y-2 text-white-bg">
                    BAGS
                  </h3>
                  <h1 className="font-bold text-lg md:text-2xl text-white-bg capitalize space-y-2">
                    Harley Laptop Backpack 152 mm(w) x 127 mm(d)
                  </h1>
                  <div className="flex flex-col gap-3 justify-start">
                    <Button
                      as={Link}
                      href="#"
                      className="bg-white-bg p-5 w-max rounded-md text-black text-base hover:opacity-80 transition text-center capitalize"
                      size="md"
                      variant="solid"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-6 lg:px-8 xl:px-12">
        <div className="container mx-auto space-y-8 py-4 mt-6">
          <div className="flex items-center justify-center py-3">
            <span className="text-primary text-center md:text-2xl text-xl lg:text-3xl font-semibold">
              PROMOTIONAL MERCHANDISE AT GUARANTEED LOWEST PRICES
            </span>
          </div>

          <div className="relative border-2 border-orange py-5 sm:py-2 px-2 sm:px-5 2xl:px-12 xl:pb-6">
            <div className="bg-white  p-4 absolute top-[-1.65rem]">
              <div className="flex justify-between gap-2 font-semibold text-orange text-2xl">
                <ImFire />
                <h5>WHAT&apos;S HOT</h5>
              </div>
            </div>
            <div className="md:pt-8">
              <Carousel numberOfItems={4}>
                {loaderData &&
                  loaderData.products &&
                  loaderData.products.map((item: any) => {
                    return (
                      <div
                        key={item._id || item?.id}
                        className="flex flex-row"
                        itemScope
                        itemType="https://schema.org/Product"
                      >
                        <ProductCard
                          image={item.overview.heroImage}
                          images={item.product.images}
                          title={item.overview.name}
                          productCode={item.overview.code}
                          description={item.product.description}
                          basePrice={getMinMaxPrice(
                            item?.product?.prices?.priceGroups?.basePrice?.[0]?.base_price,
                          )}
                          qunatity={item.overview.minQty}
                          handlePreviewFn={(data) => handlePreviewProd(data)}
                          id={item._id || item.id}
                          category={item.product.categorisation.productType.typeName}
                        />
                      </div>
                    );
                  })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-0 flex flex-col space-y-10 py-20">
        <ProductSection
          categoryName="Health & Personal"
          heroImage={HealthImage}
          Icon={PiFirstAidKitLight}
          title="Health & Fitness"
          products={
            loaderData && loaderData.productShowCase && loaderData.productShowCase
              ? loaderData.productShowCase["Health & Personal"]
              : []
          }
        />
        <FeaturedProducts sectionLabel="Featured Products" gridNo={5} />
        <ProductSection
          heroImage={ClothingImage}
          Icon={GiClothes}
          title="Mens Wear"
          categoryName="Clothing"
          products={
            loaderData && loaderData.productShowCase && loaderData.productShowCase
              ? loaderData.productShowCase["Clothing"]
              : []
          }
        />
        <FeaturedProducts sectionLabel="New Arrivals" gridNo={5} />

        <ProductSection
          heroImage={BagImage}
          Icon={FaFemale}
          title="Home & Living"
          categoryName="Home & Living"
          showmore
          products={
            loaderData && loaderData.productShowCase
              ? loaderData.productShowCase["Home & Living"]
              : []
          }
        />
        <ContactUs />
        <section className="bg-white-bg p-10">
          <div
            className="mt-4 flex flex-col justify-center items-center gap-4 w-full w-max-ppn"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <div className="py-2">
              <h2 className="font-bold text-2xl text-black capitalize text-center">
                You are fully protected
              </h2>
              <p className="md:text-lg text-sm text-gray text-center">
                We are bound by the code of conduct of the Australian Promotional Products
                Association
              </p>
            </div>
            <div className="w-1/2 hidden md:block overflow-hidden px-4">
              {/* TODO: asset not ready for mobile screens */}
              <AppaIcon />
            </div>
          </div>
        </section>
        <section className="mb-20 md:px-20 w-full flex flex-col gap-2 md:space-y-6 w-max-ppn">
          {blogs &&
            blogs.data.payload &&
            blogs.data.payload.data &&
            blogs.data.payload?.data.length > 0 && (
              <>
                <div className="space-y-2">
                  <h1 className="font-bold text-2xl text-black capitalize text-center">Our Blog</h1>
                  <h3 className="text-lg text-gray text-center">Browse Our Latest News</h3>
                </div>
                <div className="md:mx-4">
                  <Carousel numberOfItems={3}>
                    {blogs.data.payload.data.map((post: BlogCardProps) => (
                      <div
                        key={post._id}
                        className="flex flex-col md:flex-row gap-1 sm:mx-2 md:mx-1"
                      >
                        <BlogCard
                          title={post.title}
                          summary={post.summary}
                          slug={post?.slug || post?.title}
                          description={post.description}
                          imageSrc={post.imageSrc}
                          _id={post._id}
                          category={post.category}
                          body={post.body}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </>
            )}
        </section>
      </div>
      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema(loaderData)) }}
      />
    </>
  );
}
