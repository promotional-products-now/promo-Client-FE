import { useState, useRef, useEffect } from "react";
import { Button, Image, Link } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { useMediaQuery } from "react-responsive";
import { GiClothes } from "react-icons/gi";
import { PiFirstAidKitLight } from "react-icons/pi";
import { FaFemale } from "react-icons/fa";
import { HiOutlineFire } from "react-icons/hi";
import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";
import { ProductCard } from "app/components/Product/ProductCard";
import ProductSection from "app/components/Home/ProductSection";
import FeaturedProducts from "app/components/Home/FeaturedProducts";
import Carousel from "app/components/Carousel";
import { items } from "app/api_dummy";
import BlogSection from "app/components/Home/BlogSection";
import FullyProtected from "app/components/Home/FullyProtected";
import ContactUs from "app/components/Home/Contact-us";

export const meta: MetaFunction = () => {
  return [
    { title: "Promotional Products Now" },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};

export default function Index() {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="bg-white-bg py-12 lg:px-20  mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row justify-center">
          <div className=" flex flex-row bg-lightBlue justify-center items-center pl-10 pt-5 flex-4">
            <div className="flex flex-col gap-3 ">
              <h3 className="font-semibold text-xl text-white-bg space-y-2">CLOTHING</h3>
              <h1 className="font-bold text-2xl text-white-bg capitalize ">
                Podium Cool Piping Polo Shirt Short Sleeve
              </h1>
              <h3 className="text-base text-white-bg space-y-2">PRICE RANGE </h3>
              <h3 className="text-base text-white-bg space-y-2">$21.95</h3>
              <div className="flex flex-col gap-3 justify-start">
                <Button
                  as={Link}
                  href="#"
                  className="bg-primary w-min p-5 rounded-md  text-white-bg text-base font-semibold hover:opacity-80 transition text-center capitalize"
                  size="md"
                  variant="solid"
                >
                  Shop now
                </Button>

                <Button
                  as={Link}
                  href="/cart"
                  className="bg-white-bg p-5 w-max rounded-md  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
                  size="md"
                  variant="solid"
                >
                  View Collection
                </Button>
              </div>
            </div>

            <div className="object-cover w-[500px] h-[595px] z-10">
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
              <div className=" flex flex-col gap-3">
                <h3 className=" text-lg text-primary">HEALTH & FITNESS</h3>
                <h1 className="font-bold text-2xl text-gray-800 capitalize space-y-2">
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

              <Link href="cart" className="w-[360px] h-[240px]">
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
              <div className="w-[360px] h-[240px]">
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
                <h3 className="font-semibold text-xl space-y-2 text-white-bg">BAGS</h3>
                <h1 className="font-bold text-2xl text-white-bg capitalize space-y-2">
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
      <div className="lg:px-20 ">
        <div className="mt-20  ">
          <div className="text-primary text-center md:text-2xl text-xl font-semibold mb-8">
            PROMOTIONAL MERCHANDISE AT GUARANTEED LOWEST PRICES
          </div>

          <div className="border-2 border-orange relative md:p-8 py-2 px-5">
            <div className="h-[32rem] sm:h-[32rem] xl:h-[32rem] 2xl:h-96">
              <Carousel>
                {items.map((item, index) => (
                  <div key={index} className="flex flex-row pointer-events-none sm:mx-4">
                    <ProductCard
                      key={index}
                      image={item.image}
                      title={item.title}
                      subtitle={item.subtitle}
                      price={item.price}
                      newPrice={item.newPrice}
                      qunatity={item.qunatity}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <ProductSection Icon={PiFirstAidKitLight} title="Health & Fitness" />
      <FeaturedProducts sectionlabel="Featured Products" gridno={10} />
      <ProductSection Icon={GiClothes} title="Mens Wear" />
      <FeaturedProducts sectionlabel="New Arrivals" gridno={5} />
      <ProductSection Icon={FaFemale} title="Womens Wear" showmore />
      {/* contact */}
      <ContactUs />
      <FullyProtected />
      <BlogSection />
    </>
  );
}
