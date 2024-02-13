import React from "react";
import ProductCard from "./ProductCard";
import { items } from "app/data";
import Heading from "app/blocks/Heading";
import Button from "app/blocks/Button";
import { Link } from "@remix-run/react";
import { IoIosArrowDown } from "react-icons/io";


interface ProductSectionProps {
  sideImage?: string;
  bgimage?: string;
  title?: string
  showmore?: boolean
}

const ProductSection = ({ sideImage, bgimage, showmore}: ProductSectionProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-[4fr_7fr] py-[40px]">
        <div className="relative flex flex-row justify-start items-center left-0 ">
          <div className="relative w-[275px] border-[1px] h-full z-20">
            <div
              className="absolute mx-[24px] flex flex-col gap-[16px]
            top-[50%] -translate-y-[50%] -p-6 z-20"
            >
              <div className="w-[56px] h-[56px]">
                <img
                  src="/images/first-aid-kit.png"
                  alt="bg"
                  className="object-cover h-full w-full transition aspect-auto"
                />
              </div>

              <div className="text-white text-[24px]">Health & Fitness</div>
              <ul className="flex flex-col gap-[16px]">
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
                <Link to={'/'}><li className="text-white">AUSTRALIAN MADE PRODUCTS </li></Link>
              </ul>

              <div className="w-[70%] mt-5">
                <Button outline label="View Collection" />
              </div>
            </div>
            <img
              src="/images/woman.png"
              alt="bg"
              className=" h-full w-full transition aspect-auto absolute inset-0 "
            />
            <div className="bg-[#0079C0] inset-0 absolute opacity-60"></div>
          </div>

          <div className="w-[302.21px] h-[600.11px] absolute -right-[5rem]">
            <img
              src="/images/bg.png"
              alt="bg"
              className="object-cover h-full w-full transition aspect-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 z-20 bg-backgroundgray gap-4">
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

      {showmore && <div className="flex flex-row gap-2 items-center justify-center w-[30%]">
          <Button label="Show more Products" icon={IoIosArrowDown} />
        </div>}
    </div>
  );
};

export default ProductSection;
