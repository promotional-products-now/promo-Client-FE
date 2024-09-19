import { Card, CardBody, Button, CardFooter, useDisclosure, Image } from "@nextui-org/react";
import { Link, useNavigate } from "@remix-run/react";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { ProductCardProps } from "./ProductCard";
import { toSnakeCase } from "app/utils/fn";

export function ProductCardDet({
  image,
  images,
  productCode,
  title,
  description,
  basePrice,
  qty,
  category,
  slug,
  handlePreviewFn,
}: ProductCardProps) {
  const props = {
    image,
    title,
    description,
    basePrice,
    qty,
    images,
    productCode,
    category,
    slug,
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navigate = useNavigate();

  return (
    <>
      <Card
        shadow="none"
        radius="none"
        isPressable
        className="col-span-1 cursor-pointer group border border-zinc-100"
      >
        <CardBody className="overflow-visible p-0  ">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={title}
            removeWrapper
            className="w-full object-scale-down h-60 transition"
            src={image}
            onClick={() => {
              navigate(`/products/${category ? toSnakeCase(category) : "_"}/${slug}`);
            }}
          />
          <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition w-full z-20">
            <Button
              fullWidth
              radius="none"
              className="bg-orange text-white"
              startContent={<FiEye />}
              onPress={() => handlePreviewFn(props)}
            >
              Preview
            </Button>
          </div>
        </CardBody>

        <CardFooter className="p-0 flex flex-col items-start justify-start gap-3">
          <div className="p-2 space-y-3 flex flex-col items-start justify-start">
            <div className=" capitalize font-semibold text-sm">{title}</div>
            {/* <div className="text-black text-xs">{product.description}</div> */}
            {/* <div className="flex text-sm justify-between">
              <div className="text-gray-700 flex gap-1">
                <p className="text-xs">
                  from <span className="text-orange text-xs">{product.price}</span> to
                </p>
                <span className="text-primary text-xs">{product.newPrice}</span>
              </div>
              <div className="text-xs">{product.qty}</div>
            </div> */}
          </div>
          <Link
            to={`/products/${category ? toSnakeCase(category) : "_"}/${slug}`}
            className="bg-primary py-2 px-4 w-full flex gap-4 text-white items-center justify-center"
          >
            <BsCart3 /> View Product
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
