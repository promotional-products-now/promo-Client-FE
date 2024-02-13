import { Link } from "@remix-run/react";
import Button from "app/blocks/Button";
import { useCallback, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

interface ProductCardProps {
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionid?: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  newPrice: string;
  qunatity: string;
}

const ProductCard = ({
  onAction,
  disabled,
  actionLabel,
  actionid = "",
  image,
  title,
  subtitle,
  price,
  newPrice,
  qunatity,
}: ProductCardProps) => {

  return (
    <Link to={`/`} className="col-span-1 cursor-pointer group ">
      <div className="flex flex-col gap-2 w-full ">
        <div className="aspect-square w-full relative overflow-hidden rounded-sm ">
          <img
            alt="listing"
            src={image}
            className="object-cover h-full w-full transition aspect-auto"
          />

          <div className="flex flex-row absolute bottom-0 right-0 left-0 opacity-0 group-hover:opacity-100 transition w-full">
            <div className="bg-orange px-2 py-2 flex flex-row items-center flex-1 gap-2 justify-center">
              <FiEye /> <div className="">Preview</div>
            </div>
            <div className="bg-blue px-2 py-2 flex flex-row items-center flex-1 gap-2 justify-center">
              <CiShoppingCart /> <div className="">view product</div>
            </div>
          </div>
        </div>

        <div className="text-blue capitalize font-semibold">{title}</div>
        <div className="text-black">{subtitle}</div>
        <div className="flex flex-row justify-between">
          <div className="text-textcolor flex flex-row gap-1">
            from <span className="text-orange">{price}</span> to
               <span className="text-blue">{newPrice}</span>
          </div>
          <div className="">{qunatity}</div>
        </div>

        {onAction && actionLabel && (
          <Button disabled={disabled} small label={actionLabel} onClick={() => {}} />
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
