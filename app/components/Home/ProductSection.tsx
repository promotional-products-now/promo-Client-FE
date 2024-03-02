import { Link } from "@remix-run/react";
import { Button, Image, Select, SelectItem } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { IconType } from "react-icons";
import { ProductCard } from "../Product/ProductCard";
import { items } from "app/api_dummy";

const options = [
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
  { value: "AUSTRALIAN MADE PRODUCTS", label: "AUSTRALIAN MADE PRODUCTS" },
];

interface ProductSectionProps {
  Icon: IconType;
  title?: string;
  showmore?: boolean;
}

const ProductSection = ({ showmore, title, Icon }: ProductSectionProps) => {
  return (
    <div className="bg-white-bg mt-20">
      <div className="flex flex-col justify-center items-center lg:px-20 ">
        <div className="md:grid md:grid-cols-[4fr_7fr] py-10 flex flex-col">
          <div className="md:hidden lg:hidden flex flex-row justify-between item-center my-10 p-3 border  border-orange rounded-md">
            <div className="flex flex-row items-center justify-center gap-2 p-4">
              <Icon size={25} className="text-primary" />
              <h1 className="text-black-bg md:text-xl text-sm">{title}</h1>
            </div>
            <Select label="Explore what suits" color="default" className="w-2/4  text-center">
              {options.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>{" "}
          </div>

          <div className="relative md:flex flex-row justify-start items-center left-0 hidden">
            <div className="relative w-[275px] border h-full z-20 ">
              <div className="md:relative absolute mx-6 flex flex-col gap-4 top-[50%] -translate-y-[50%] -p-6 z-20 outline-red-900">
                <div className="w-14 h-14">
                  <Icon className="text-white h-full w-full transition aspect-auto" />
                </div>

                <div className="text-white-bg text-2xl">{title}</div>

                {[1, 2, 4, 5, 6, 7, 8].map((_, index) => (
                  <ul className="flex flex-col gap-4">
                    <Link to={"/"}>
                      <li key={index} className="text-white-bg">
                        AUSTRALIAN MADE PRODUCTS{" "}
                      </li>
                    </Link>
                  </ul>
                ))}

                <div className="w-3/4 mt-5">
                  <Button
                    as={Link}
                    href="#"
                    className="bg-white-bg px-3 py-3 rounded-sm  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
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

            <div className="w-[302px] h-[600.11px] absolute md:right-1 lg:right-1 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="bg"
                removeWrapper
                className="object-cover h-full w-full transition aspect-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 z-20 bg-backgroundgray gap-4">
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
          <div className="flex flex-row gap-2 items-center justify-center md:w-2/6 w-3/4">
            <Button
              as={Link}
              href="#"
              variant="solid"
              color="primary"
              startContent={<IoIosArrowDown className="sm:text-2xl lg:text-xl" />}
              className="bg-primary px-5 py-6 rounded-sm text-white-bg flex flex-row gap-5 text-base font-semibold hover:opacity-80 transition text-center capitalize"
            >
              Show more Products{" "}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
