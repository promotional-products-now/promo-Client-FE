import type { MetaFunction } from "@remix-run/node";
import { Button, Image } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { HiOutlineFire } from "react-icons/hi";
import { items } from "app/api_dummy";
import ProductCard from "app/components/Card/ProductCard";
import ProductSection from "../components/ProductSection";
import FeaturedProducts from "./Home/FeaturedProducts";
import NewArrivals from "./Home/NewArrivals";
import { FiShoppingCart } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { blog } from "app/api_dummy";
import BlogCard from "./Home/Blog";

export const meta: MetaFunction = () => {
  return [{ title: "App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);
  }, []);
  return (
    <div className="">
      <div className="bg-[#F8F8F8] py-12  md:px-20 px-5">
        <div className="flex flex-col md:flex-row ">
          <div className=" flex flex-row bg-lightblue justify-center items-center pl-[40px] pt-5 flex-4">
            <div className="flex flex-col gap-3 ">
              <h3 className="font-semibold text-xl text-white space-y-2">CLOTHING</h3>
              <h1 className="font-bold text-2xl text-white capitalize ">
                Podium Cool Piping Polo Shirt Short Sleeve
              </h1>
              <h3 className="text-base text-white space-y-2">PRICE RANGE </h3>
              <h3 className="text-base text-white space-y-2">$21.95</h3>
              <div className="flex flex-col gap-3 justify-start">
                <Button
                  as={Link}
                  href="#"
                  className="bg-blue w-min p-5 rounded-md  text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
                  size="md"
                  variant="solid"
                >
                  Shop now
                </Button>

                <Button
                  as={Link}
                  href="#"
                  className="bg-white p-5 w-max rounded-md  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
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
            <div className="bg-lime-100 flex flex-row justify-center items-center gap-1 h-full p-10 flex-1">
              <div className="max-w-[317px] max-h-[230px] flex flex-col gap-3">
                <h3 className=" text-lg text-blue">HEALTH & FITNESS</h3>
                <h1 className="font-bold text-2xl text-gray-800 capitalize space-y-2">
                  Champion Fitness Activity Tracker{" "}
                </h1>
                <div className="flex flex-col gap-3 justify-start">
                  <Button
                    as={Link}
                    href="#"
                    className="bg-blue p-5 w-min rounded-md  text-white text-base hover:opacity-80 transition text-center capitalize"
                    size="md"
                    variant="solid"
                  >
                    Shop now
                  </Button>
                </div>{" "}
              </div>

              <Link to={"/Checkout"} className="w-[360px] h-[240px]">
                <Image
                  src="https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="man-img"
                  radius="none"
                  removeWrapper
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>

            <div className="bg-blue flex flex-row justify-center items-center gap-5 p-6 flex-1">
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
                <h3 className="font-semibold text-xl space-y-2 text-white">BAGS</h3>
                <h1 className="font-bold text-2xl text-white capitalize space-y-2">
                  Harley Laptop Backpack 152 mm(w) x 127 mm(d){" "}
                </h1>
                <div className="flex flex-col gap-3 justify-start ">
                  <Button
                    as={Link}
                    href="#"
                    className="bg-white p-5 w-max rounded-md text-black text-base hover:opacity-80 transition text-center capitalize"
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
      <div className="md:px-20 px-5">
        <div className="mt-16  ">
          <div className="text-blue text-center text-2xl font-semibold mb-8">
            PROMOTIONAL MERCHANDISE AT GUARANTEED LOWEST PRICES
          </div>

          <div className="border-2 border-orange relative p-8">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              {items.slice(0, 4).map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                    newPrice={item.newPrice}
                    qunatity={item.qunatity}
                  />
                );
              })}

              <div className="absolute -top-7 flex flex-row gap-1 px-2 py-3 bg-whitewhite z-10 items-center">
                <HiOutlineFire className="text-orange" size={25} />
                <div className="text-orange">WHAT’S HOT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSection />
      <FeaturedProducts sectionlabel="Featured Products" gridno={10} />
      <ProductSection />
      <NewArrivals />
      <ProductSection showmore />
      <div className="bg-backgroundgray p-6 mt-5">
        <div className="md:px-20 px-5">
          <div className="mt-16 md:px-20 w-full flex flex-col justify-center items-center gap-8">
            <h1 className="font-bold text-2xl text-black capitalize text-center">
              We are Promotional Promotional Products Now
            </h1>

            <div className="flex flex-col gap-5">
              <p className="text-textcolor text-base text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
                dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque
                excepturi voluptas qui numquam id? Saepe!
              </p>

              <p className="text-textcolor text-base   text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
                dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque
                excepturi voluptas qui numquam id? Saepe!
              </p>

              <p className="text-textcolor text-base text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
                dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque
                excepturi voluptas qui numquam id? Saepe!
              </p>
            </div>

            <div className="flex flex-row gap-8 w-1/2 justify-center">
              <Button
                as={Link}
                href="#"
                size="md"
                variant="solid"
                startContent={<FiShoppingCart className="text-base" />}
                className="rounded-md bg-blue text-white p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
              >
                Shop Now
              </Button>

              <Button
                as={Link}
                href="#"
                size="md"
                variant="solid"
                startContent={<FiPhoneCall className="text-base" />}
                className="rounded-md bg-yellow text-white p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
              >
                Contact Us{" "}
              </Button>
            </div>

            <div className="mt-4 flex flex-col justify-center items-center gap-2 w-full">
              <h1 className="font-bold text-2xl text-black capitalize text-center">
                You are fully protected
              </h1>
              <h3 className="font-semibold md:text-lg text-sm text-textcolor text-center">
                We are bound by the code of conduct of the Australian Promotional Products
                Association
              </h3>
              <div className="md:w-1/2 w-full">
                <Image
                  src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  alt="appa"
                  removeWrapper
                  className="object-fit w-full h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16 md:px-[100px] w-full px-5 flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-black capitalize text-center">Our Blog</h1>
          <h3 className="font-semibold text-lg text-textcolor text-center">
            Browse Our Latest News
          </h3>
          <motion.div
            className="flex flex-row gap-5 cursor-grab overflow-x-hidden space-y-3"
            ref={carouselRef}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width - 50 }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              className="flex gap-5"
            >
              {blog.map((item, index) => {
                return (
                  <motion.div className="min-w-[23rem] flex flex-row gap-3 pointer-events-none">
                    <BlogCard
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      image={item.image}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>{" "}
    </div>
  );
}
