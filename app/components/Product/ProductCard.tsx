import { Image, Link, Button } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";
import { toSnakeCase } from "app/utils/fn";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

export type ProductCardProps = {
  image: string;
  images?: string[];
  productCode?: string;
  title: string;
  description: string;
  basePrice: { minPrice: number; maxPrice: number };
  qty: { minQty: number; maxQty: number };
  handlePreviewFn: (data: unknown) => void;
  category: string;
  slug: string;
};

export const ProductCard = ({
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
}: ProductCardProps) => {
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
  const navigate = useNavigate();

  return (
    <>
      <div className="cursor-pointer group lg:max-w-80">
        <div className="aspect-square w-full relative overflow-hidden p-0 md:mb-4-">
          {image ? (
            <Image
              alt={`Image of ${title}`}
              radius="none"
              src={image}
              removeWrapper
              onClick={() => {
                navigate(`/products/${category ? toSnakeCase(category) : "_"}/${slug}`);
              }}
              className=" !object-scale-down border-2 border-zinc-100"
              classNames={{
                wrapper:
                  "!object-scale-down border-2 border-zinc-100 h-full w-full transition aspect-square inset-0",
              }}
              loading="lazy"
            />
          ) : (
            <div className="bg-slate-100 h-full w-full"></div>
          )}

          <div className="hidden md:grid grid-cols-2 absolute bottom-0 opacity-0 group-hover:opacity-100 transition w-full z-20">
            <Button
              radius="none"
              className="bg-orange text-white"
              startContent={<FiEye />}
              onPress={() => handlePreviewFn(props)}
              aria-label={`Preview ${title}`}
            >
              Preview
            </Button>
            <Button
              as={Link}
              href={`/products/${category ? toSnakeCase(category) : "_"}/${slug}`}
              radius="none"
              className="bg-primary text-white"
              startContent={<BsCart3 />}
              aria-label={`View details of ${title}`}
            >
              View Product
            </Button>
          </div>
        </div>

        <div className="overflow-visible text-left py-2">
          <div className="text-primary capitalize font-semibold  2x:text-lg">{title}</div>
          <p className="text-black text-small mb-2 text-wrap line-clamp-2 truncate">
            {description}
          </p>
          <div className="flex flex-row text-sm justify-between">
            {basePrice && (
              <div className="text-gray-700 flex flex-row gap-1">
                <span className="text-small">
                  from <span className="text-orange text-small">{basePrice?.minPrice}</span> to
                  <span className="text-primary text-small"> {basePrice?.maxPrice}</span>
                </span>
              </div>
            )}
            <div> {qty && qty?.minQty} min qty</div>
          </div>
        </div>
      </div>
    </>
  );
};
