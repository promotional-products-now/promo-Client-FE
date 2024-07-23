import { useAtom, useSetAtom } from "jotai";
import { Button, Image, Link, ScrollShadow, useDisclosure } from "@nextui-org/react";
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
import {
  fetchProductByCategory,
  fetchProductCategories,
  fetchProductsApi,
} from "app/api/products.api";
import { json, useLoaderData } from "@remix-run/react";
import { PreviewProduct } from "app/components/Product/PreviewProduct";
import { productPreviewAtom } from "app/atoms/product.atom";
import { fetchAllBlogsApi } from "app/api/blog.api";
import { BlogCardProps } from "./Blog/interface";
import HealthImage from "app/assets/category/health.jpg";
import ClothingImage from "app/assets/category/clothing.jpg";
import axios from "axios";
import { homePageSchema } from "./_index_seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Promotional Products Now" },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};
export const loader: LoaderFunction = async () => {
  try {
    async function getProductsAndCategories() {
      const [productsResponse, categoriesResponse] = await Promise.all([
        fetchProductsApi({ page: 20 }),
        fetchProductCategories(),
      ]);
      return { products: productsResponse.data.docs, categories: categoriesResponse };
    }

    const [
      { products, categories },
      healthProductsResponse,
      clothingProductsResponse,
      homeAndLivingProductsResponse,
      blogResponse,
      leastProductsResponse,
    ] = await Promise.all([
      getProductsAndCategories(),
      fetchProductByCategory("Health & Personal"),
      fetchProductByCategory("Clothing"),
      fetchProductByCategory("Home & Living"),
      fetchAllBlogsApi({ limit: 10 }),
      fetchProductsApi({ page: 1 }),
    ]);

    return json({
      products,
      categories,
      leastProducts: leastProductsResponse.data.docs,
      blog: blogResponse.data?.payload?.data || [],
      healthProducts: healthProductsResponse.data,
      clothingProducts: clothingProductsResponse.data,
      homeAndLivingProducts: homeAndLivingProductsResponse.data,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      throw new Response(error.message, {
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Internal Server Error",
      });
    } else {
      console.error("Unexpected error:", error);
      throw new Response("An unexpected error occurred", {
        status: 500,
        statusText: "Internal Server Error",
      });
    }
  }
};
export default function Index() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const setProductPrevData = useSetAtom(productPreviewAtom);

  const loaderData = useLoaderData<typeof loader>();

  const [isCategoryOpen, setIsCategoryOpen] = useAtom(isCategoryListOpen);

  const handlePreviewProd = (product: any) => {
    onOpen();
    setProductPrevData(product);
  };

  return (
    <>
      <div className="bg-white-bg pb-12 px-3 md:px-6 lg:px-8 xl:px-12 ">
        <div className=" container mx-auto flex flex-col md:flex-col lg:flex-row justify-center">
          <div
            aria-label="Link Categories"
            className={` bg-white mr-3 -mt-4 hidden md:block divide-y divide-primary max-w-64 transition-height duration-300 ease-linear  ${
              !isCategoryOpen
                ? "h-0 w-0"
                : "h-[28rem] min-h-[26rem] 2xl:h-[51rem] w-full xl:min-w-72 2xl:min-w-96"
            } `}
          >
            {/* category */}
            <ScrollShadow className="w-full h-full ">
              {loaderData && loaderData.categories && (
                <CategoryList categories={loaderData.categories} />
              )}
            </ScrollShadow>
          </div>
          <div
            className={`flex flex-col md:flex-col lg:flex-row justify-center container mx-auto p-3 px-0 !m-0 md:px-0 transition-width duration-300 ease-linear ${
              !isCategoryOpen ? "" : "w-full"
            }`}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 bg-lightBlue justify-center items-center p-5">
              <div className="flex flex-col gap-2 md:gap-3 ">
                <h3 className="font-semibold text-sm md:text-base text-white-bg space-y-2">
                  CLOTHING
                </h3>
                <h1 className="font-bold text-lg md:text-2xl text-white-bg capitalize ">
                  Podium Cool Piping Polo Shirt Short Sleeve
                </h1>
                <h3 className="text-sm md:text-base text-white-bg font-normal">PRICE RANGE </h3>
                <h3 className="text-sm md:text-base text-white-bg font-normal">$21.95</h3>
                <div className="flex flex-col gap-3 justify-start">
                  <Button
                    as={Link}
                    href="#"
                    className="bg-primary w-min p-5 rounded-md  text-white-bg text-base font-semibold hover:opacity-80 transition text-center capitalize"
                    variant="solid"
                  >
                    Shop now
                  </Button>

                  <Button
                    as={Link}
                    href="/#"
                    className="bg-white-bg w-max p-5 rounded-md  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
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
                  alt="man-img"
                  removeWrapper
                  className="w-full h-full object-cover"
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
                    Champion Fitness Activity Tracker{" "}
                  </h1>
                  <div className="flex flex-col gap-3 justify-start">
                    <Button
                      as={Link}
                      href="#"
                      className="bg-primary p-5 w-min rounded-md  text-white-bg text-base hover:opacity-80 transition text-center capitalize"
                      size="md"
                      variant="solid"
                    >
                      Shop now
                    </Button>
                  </div>{" "}
                </div>

                <Link href="cart" className="w-56 h-36">
                  <Image
                    src="https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="man-img"
                    radius="none"
                    removeWrapper
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              <div className="bg-primary flex flex-row justify-center items-center gap-5 p-6 flex-1">
                <div className="w-56 h-36">
                  <Image
                    src="https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600"
                    height="100"
                    width="100"
                    alt="man-img"
                    radius="none"
                    removeWrapper
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-sm md:text-base space-y-2 text-white-bg">
                    BAGS
                  </h3>
                  <h1 className="font-bold text-lg md:text-2xl text-white-bg capitalize space-y-2">
                    Harley Laptop Backpack 152 mm(w) x 127 mm(d){" "}
                  </h1>
                  <div className="flex flex-col gap-3 justify-start ">
                    <Button
                      as={Link}
                      href="#"
                      className="bg-white-bg p-5 w-max rounded-md text-black text-base hover:opacity-80 transition text-center capitalize"
                      size="md"
                      variant="solid"
                    >
                      Shop Now
                    </Button>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-6 lg:px-8 xl:px-12">
        <div className="container mx-auto space-y-8 py-4">
          <div className="flex items-center justify-center py-3">
            <span className="text-primary text-center md:text-2xl text-xl 2xl:text-4xl font-semibold">
              PROMOTIONAL MERCHANDISE AT GUARANTEED LOWEST PRICES
            </span>
          </div>

          <div className="relative border-3 border-orange py-5 sm:py-2 px-2 sm:px-5 2xl:px-12 xl:pb-6">
            <div className="bg-white  p-4 absolute top-[-1.65rem]">
              <div className="flex justify-between gap-2 font-semibold text-orange text-2xl">
                <ImFire />
                <h5>WHAT'S HOT</h5>
              </div>
            </div>
            <div className="md:pt-8">
              <Carousel numberOfItems={4}>
                {loaderData &&
                  loaderData.products.map((item: any) => {
                    // const price = item.product.prices.priceGroups;
                    // const initPrice = "";
                    // const lastPrice = item[price.length - 1];
                    return (
                      <div key={item.id} className="flex flex-row">
                        <ProductCard
                          image={item.overview.heroImage}
                          images={item.product.images}
                          title={item.overview.name}
                          productCode={item.overview.code}
                          description={item.product.description}
                          price={0}
                          newPrice={""}
                          qunatity={item.overview.minQty}
                          handlePreviewFn={(data) => handlePreviewProd(data)}
                          id={item.id}
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

      <div className="md:px-0 flex flex-col space-y-20 pb-20">
        <ProductSection
          categoryName="Health & Personal"
          heroImage={HealthImage}
          Icon={PiFirstAidKitLight}
          title="Health & Fitness"
          products={loaderData && loaderData.healthProducts ? loaderData.healthProducts : []}
        />
        {/* <FeaturedProducts sectionlabel="Featured Products" gridno={10} /> */}
        <ProductSection
          heroImage={ClothingImage}
          Icon={GiClothes}
          title="Mens Wear"
          categoryName="Clothing"
          products={loaderData && loaderData.clothingProducts ? loaderData.clothingProducts : []}
        />
        <FeaturedProducts
          sectionlabel="New Arrivals"
          gridno={5}
          products={loaderData && loaderData.leastProducts ? loaderData.leastProducts : []}
        />
        <ProductSection
          heroImage=""
          Icon={FaFemale}
          title="Home & Living"
          categoryName="Home & Living"
          showmore
          products={
            loaderData && loaderData.homeAndLivingProducts ? loaderData.homeAndLivingProducts : []
          }
        />
        <ContactUs />
        <section className="bg-white-bg p-10 ">
          <div className="mt-4 flex flex-col justify-center items-center gap-4 w-full w-max-ppn">
            <div className="py-2">
              <h2 className="font-bold text-2xl text-black capitalize text-center">
                You are fully protected
              </h2>
              <p className=" md:text-lg text-sm text-gray text-center">
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
          <h1 className="font-bold text-2xl text-black capitalize text-center">Our Blog</h1>
          <h3 className="font-semibold text-lg text-gray text-center">Browse Our Latest News</h3>

          <div className="md:mx-4">
            <Carousel numberOfItems={3}>
              {loaderData &&
                loaderData.blog.length > 0 &&
                loaderData.blog.map((post: BlogCardProps) => (
                  <div key={post._id} className="flex flex-col md:flex-row gap-1 sm:mx-2 md:mx-1">
                    <BlogCard
                      title={post.title}
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
