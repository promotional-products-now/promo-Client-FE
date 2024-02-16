import { Link } from "@remix-run/react";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  newPrice: string;
  qunatity: string;
}

const ProductCard = ({ image, title, subtitle, price, newPrice, qunatity }: ProductCardProps) => {
  return (
    <Card className="col-span-1 cursor-pointer group" radius="none">
      <CardHeader className="aspect-square w-full relative overflow-hidden p-0">
        <Image
          alt="item"
          radius="none"
          src={image}
          removeWrapper
          className="object-cover h-full w-full transition aspect-square inset-0"
        />

        <div className="flex flex-row absolute bottom-0 right-0 left-0 opacity-0 group-hover:opacity-100 transition w-full text-white z-20">
          <div className="bg-orange px-2 py-2 flex flex-row items-center flex-1 gap-2 justify-center ">
            <FiEye /> <div className="">Preview</div>
          </div>
          <div className="bg-blue px-2 py-2 flex flex-row items-center flex-1 gap-2 justify-center">
            <BsCart3 /> <div className="">View product</div>
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-visible p-2 gap-3">
        <div className="text-blue capitalize font-semibold">{title}</div>
        <div className="text-black">{subtitle}</div>
        <div className="flex flex-row text-sm justify-between">
          <div className="text-gray-700 flex flex-row gap-1">
            <p>
              {" "}
              from <span className="text-orange">{price}</span> to
            </p>
            <span className="text-blue">{newPrice}</span>
          </div>
          <div className="">{qunatity}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
