import ProductCard from "./Card/ProductCard";
import { items } from "app/api_dummy";
import { Button, Image } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { IoIosArrowDown } from "react-icons/io";
import { PiFirstAidKitLight } from "react-icons/pi";

interface ProductSectionProps {
  sideImage?: string;
  bgimage?: string;
  title?: string;
  showmore?: boolean;
}

const ProductSection = ({ sideImage, bgimage, showmore }: ProductSectionProps) => {
  return (
    <div className="flex flex-col justify-center items-center md:px-20 px-5">
      <div className="grid grid-cols-[4fr_7fr] py-10 ">
        <div className="relative flex flex-row justify-start items-center left-0 ">
          <div className="relative w-[275px] border h-full z-20">
            <div
              className="absolute mx-6 flex flex-col gap-4
            top-[50%] -translate-y-[50%] -p-6 z-20"
            >
              <div className="w-14 h-14">
                <PiFirstAidKitLight className="text-white h-full w-full transition aspect-auto" />
              </div>

              <div className="text-white text-2xl">Health & Fitness</div>
              <ul className="flex flex-col gap-4">
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-white">AUSTRALIAN MADE PRODUCTS </li>
                </Link>
              </ul>

              <div className="w-9/12 mt-5">
                <Button
                  as={Link}
                  href="#"
                  className="bg-white px-3 py-3 rounded-sm  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
                  size="md"
                  variant="ghost"
                >
                  View Collection
                </Button>
              </div>
            </div>
            <Image
              src="https://images.pexels.com/photos/7674483/pexels-photo-7674483.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="overlay"
              removeWrapper
              radius="none"
              className=" h-full w-full transition aspect-auto absolute inset-0"
            />
            <div className="bg-primary inset-0 absolute opacity-60 z-20"></div>
          </div>

          <div className="w-[302px] h-[600.11px] absolute md:-right-4 -right-8">
            <Image
              src="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="bg"
              removeWrapper
              className="object-cover h-full w-full transition aspect-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3  grid-cols-1 z-20 bg-backgroundgray gap-4">
          {items.slice(0, 6).map((item, index) => {
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
        </div>
      </div>

      {showmore && (
        <div className="flex flex-row gap-2 items-center justify-center w-2/6">
          <Button
            as={Link}
            href="#"
            variant="solid"
            color="primary"
            startContent={<IoIosArrowDown className="text-base" />}
            className="bg-primary px-5 py-3 rounded-sm text-white flex flex-row gap-5 text-base font-semibold hover:opacity-80 transition text-center capitalize"
          >
            Show more Products{" "}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
