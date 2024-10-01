import { Image, Link, Button, Chip } from "@nextui-org/react";
import { useNavigate } from "@remix-run/react";
import { toSnakeCase } from "app/utils/fn";
import { BsCart3 } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

export type ProductCardProps = {
  image: string;
  images?: string[];
  productCode?: string;
  title: string;
  labels: string[];
  description: string;
  basePrice: { min: number; max: number };
  qty: { min: number; max: number };
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
  labels,
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
            {basePrice && basePrice.min && (
              <div className="text-gray-700 flex flex-row gap-1">
                <span className="text-small">
                  from <span className="text-orange text-small">{basePrice?.min}</span> to
                  <span className="text-primary text-small"> {basePrice?.max}</span>
                </span>
              </div>
            )}
            {qty && qty?.min && <div> {qty?.min} min qty</div>}
          </div>
          {labels && labels.length > 0 && (
            <div className="flex gap-1 mt-2 ">
              {labels?.map((label, i) => {
                if (i < 2) {
                  return (
                    <Chip
                      key={label}
                      size="sm"
                      className={`${
                        label === "Just Released or New"
                          ? "bg-green-600"
                          : label === "On Sale"
                          ? "bg-primary"
                          : label === "Best Buy"
                          ? "bg-orange"
                          : "bg-purple-600"
                      }  text-white`}
                    >
                      {label}
                    </Chip>
                  );
                }
              })}
              {labels.length > 2 && (
                <Chip size="sm" color="default">
                  {labels.length - 2}
                </Chip>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
