import { Card, CardHeader, CardBody, Image, Link, Button, useDisclosure } from "@nextui-org/react";
import { useSetAtom } from "jotai";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { PreviewProduct } from "./PreviewProduct";
import { productAtom } from "app/atoms/product.atom";

export type ProductCardProps = {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  newPrice: string;
  qunatity: string;
};

export const ProductCard = ({
  image,
  title,
  subtitle,
  price,
  newPrice,
  qunatity,
}: ProductCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const setProduct = useSetAtom(productAtom);

  const props = { image, title, subtitle, price, newPrice, qunatity };

  const handlePreviewProd = () => {
    onOpen();
    setProduct(props); // doesn't really work...yikes
  };

  return (
    <>
      <div className="cursor-pointer group lg:max-w-80">
        <div className="aspect-square w-full relative overflow-hidden p-0 md:mb-4-">
          <Image
            alt={title}
            radius="none"
            src={image}
            removeWrapper
            className="object-cover border-2 border-zinc-100 h-full w-full transition aspect-square inset-0"
          />

          <div className="grid grid-cols-2 absolute bottom-0 opacity-0 group-hover:opacity-100 transition w-full z-20">
            <Button
              radius="none"
              className="bg-orange text-white"
              startContent={<FiEye />}
              onPress={handlePreviewProd}
            >
              Preview
            </Button>
            <Button
              as={Link}
              href={`/products/${title}`}
              radius="none"
              className="bg-primary text-white"
              startContent={<BsCart3 />}
            >
              View
            </Button>
          </div>
        </div>

        <div className="overflow-visible text-justify py-2">
          <div className="text-primary capitalize font-semibold  2x:text-lg">{title}</div>
          <p className="text-black text-small mb-2">{subtitle}</p>
          <div className="flex flex-row text-sm justify-between">
            <div className="text-gray-700 flex flex-row gap-1">
              <span className="text-small">
                from <span className="text-orange text-small">{price}</span> to
                <span className="text-primary text-small"> {newPrice}</span>
              </span>
            </div>
            <div className="text-xs">{qunatity}</div>
          </div>
        </div>
      </div>

      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
