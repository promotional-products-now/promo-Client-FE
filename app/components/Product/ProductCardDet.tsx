import { Card, CardBody, Button, CardFooter, useDisclosure, Image } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { PreviewProduct } from "./PreviewProduct";
import { ProductCardProps } from "./ProductCard";

export function ProductCardDet({ product }: { product: ProductCardProps }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card
        shadow="none"
        radius="none"
        isPressable
        className="col-span-1 cursor-pointer group border border-zinc-100"
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0  ">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={product.title}
            removeWrapper
            className="w-full object-cover h-60 transition"
            src={product.image}
          />
          <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition w-full z-20">
            <Button
              fullWidth
              radius="none"
              className="bg-orange text-white"
              startContent={<FiEye />}
              onPress={onOpen}
            >
              Preview
            </Button>
          </div>
        </CardBody>

        <CardFooter className="p-0 flex flex-col items-start justify-start gap-3">
          <div className="p-2 space-y-3 flex flex-col items-start justify-start">
            <div className=" capitalize font-semibold text-sm">{product.title}</div>
            {/* <div className="text-black text-xs">{product.description}</div> */}
            <div className="flex text-sm justify-between">
              <div className="text-gray-700 flex gap-1">
                <p className="text-xs">
                  from <span className="text-orange text-xs">{product.price}</span> to
                </p>
                <span className="text-primary text-xs">{product.newPrice}</span>
              </div>
              <div className="text-xs">{product.qunatity}</div>
            </div>
          </div>
          <Button
            as={Link}
            href={`/products/${product.title}`}
            radius="none"
            fullWidth
            color="primary"
            startContent={<BsCart3 />}
          >
            View Product
          </Button>
        </CardFooter>
      </Card>

      <PreviewProduct isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
