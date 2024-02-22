import { useState, useRef, useEffect } from "react";
import { Button, Image, Link } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { GiClothes } from "react-icons/gi";
import { PiFirstAidKitLight } from "react-icons/pi";
import { FaFemale } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi";
import { items } from "app/api_dummy";
import ProductCard from "app/components/Card/ProductCard";
import ProductSection from "app/components/Home/ProductSection";
import FeaturedProducts from "app/components/Home/FeaturedProducts";
import { blog } from "app/api_dummy";
import BlogCard from "app/components/Home/Blog";

export const meta: MetaFunction = () => {
  return [{ title: "App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      if (scrollWidth && offsetWidth) {
        setWidth(scrollWidth - offsetWidth);
      }
    }
  }, []);
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

          <div className="border-2 border-orange relative md:p-8 py-10 px-5">
            <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
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

              <div className="absolute -top-7 flex flex-row gap-1 px-2 py-3 bg-white z-10 items-center">
                <HiOutlineFire className="text-orange" size={25} />
                <div className="text-orange">WHAT’S HOT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSection Icon={PiFirstAidKitLight} title="Health & Fitness" />
      <FeaturedProducts sectionlabel="Featured Products" gridno={10} />
      <ProductSection Icon={GiClothes} title="Mens Wear" />
      <FeaturedProducts sectionlabel="New Arrivals" gridno={5} />
      <ProductSection Icon={FaFemale} title="Womens Wear" showmore />
      <div className="lg:px-20 my-20">
        <div className="mt-16 w-full flex flex-col justify-center items-center gap-8">
          <h1 className="font-bold text-2xl text-black capitalize text-center">
            We are Promotional Promotional Products Now
          </h1>

          <div className="flex flex-col gap-5">
            {[1, 2, 3].map((_, i) => (
              <p className="text-gray text-base" key={i}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
                dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque
                excepturi voluptas qui numquam id? Saepe!
              </p>
            ))}
          </div>

          <div className="flex flex-row gap-8 md:w-1/2 w-full justify-center">
            <Button
              as={Link}
              href="#"
              size="md"
              variant="solid"
              startContent={<FiShoppingCart className="text-base" />}
              className="rounded-md bg-primary text-white-bg p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
            >
              Shop Now
            </Button>

            <Button
              as={Link}
              href="tel:+12334587"
              size="md"
              variant="solid"
              startContent={<FiPhoneCall className="text-base" />}
              className="rounded-md bg-yellow text-white-bg p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
            >
              Contact Us{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white-bg p-10 mb-20">
        <div className="mt-4 flex flex-col justify-center items-center gap-4 w-full">
          <div className="py-2">
            <h2 className="font-bold text-2xl text-black capitalize text-center">
              You are fully protected
            </h2>
            <p className=" md:text-lg text-sm text-gray text-center">
              We are bound by the code of conduct of the Australian Promotional Products Association
            </p>
          </div>

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
      <div>
        <div className="mb-20 md:px-20 w-full flex flex-col gap-2 ">
          <h1 className="font-bold text-2xl text-black capitalize text-center">Our Blog</h1>
          <h3 className="font-semibold text-lg text-gray text-center">Browse Our Latest News</h3>
          <motion.div
            className="flex flex-row gap-5 cursor-grab overflow-x-hidden space-y-3"
            ref={carouselRef}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              className="flex gap-5"
            >
              {blog.map((item, index) => {
                return (
                  <motion.div className="md:min-w-[20rem] min-w-[23rem] flex flex-row gap-3 pointer-events-none">
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
    </>
  );
}
