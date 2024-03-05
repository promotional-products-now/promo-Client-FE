import { Link } from "@remix-run/react";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { Image } from "@nextui-org/react";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  newPrice: string;
  qunatity: string;
  key: number
}

const ProductCard = ({ image, title, subtitle, price, newPrice, qunatity, key }: ProductCardProps) => {
  return (
    <div className="col-span-1 cursor-pointer group" key={key}>
      <div className="aspect-square w-full relative overflow-hidden p-0">
        <Image
          alt={title}
          radius="none"
          src={image}
          removeWrapper
          className="object-cover h-full w-full transition aspect-square inset-0"
        />

        <div className="flex flex-row absolute bottom-0 right-0 left-0 opacity-0 group-hover:opacity-100 transition w-full text-white z-20">
          <div className="bg-orange px-2 py-2 flex flex-row items-center flex-1 gap-2 justify-center ">
            <FiEye /> <div className="">Preview</div>
          </div>
          <div className="bg-primary px-2 py-2 flex flex-row items-center flex-1 gap-2 justify-center">
            <BsCart3 /> <div className="">View product</div>
          </div>
        </div>
      </div>

      <div className="overflow-visible p-2 gap-3">
        <div className="text-primary capitalize font-semibold">{title}</div>
        <div className="text-black">{subtitle}</div>
        <div className="flex flex-row text-sm justify-between">
          <div className="text-gray-700 flex flex-row gap-1">
            <p>
              {" "}
              from <span className="text-orange">{price}</span> to
            </p>
            <span className="text-primary">{newPrice}</span>
          </div>
          <div className="">{qunatity}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
