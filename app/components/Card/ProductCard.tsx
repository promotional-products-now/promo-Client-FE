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

const ProductCard = ({ image, title, subtitle, price, newPrice, qunatity }: ProductCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const setProduct = useSetAtom(productAtom);

  const props = { image, title, subtitle, price, newPrice, qunatity };

  const handlePreviewProd = () => {
    onOpen();
    setProduct(props); // doesn't really work...yikes
  };

  return (
    <>
      <Card className="col-span-1 cursor-pointer group" radius="none">
        <CardHeader className="aspect-square w-full relative overflow-hidden p-0">
          <Image
            alt={title}
            radius="none"
            src={image}
            removeWrapper
            className="object-cover h-full w-full transition aspect-square inset-0"
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
        </CardHeader>

        <CardBody className="overflow-visible p-2 gap-3">
          <div className="text-primary capitalize font-semibold text-sm">{title}</div>
          <div className="text-black text-xs">{subtitle}</div>
          <div className="flex text-sm justify-between">
            <div className="text-gray-700 flex gap-1">
              <p className="text-xs">
                from <span className="text-orange text-xs">{price}</span> to
              </p>
              <span className="text-primary text-xs">{newPrice}</span>
            </div>
            <div className="text-xs">{qunatity}</div>
          </div>
        </CardBody>
      </Card>

      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default ProductCard;
