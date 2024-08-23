import { Link } from "@remix-run/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BlogCardProps } from "../../routes/Blog/interface";

export const BlogCard = ({ imageSrc, title, category, summary, slug }: BlogCardProps) => {
  return (
    <Card isPressable className="rounded-none shadow-none w-full" radius="sm">
      <CardBody className="overflow-visible p-0 relative">
        <Image
          shadow="none"
          radius="none"
          width="100%"
          height={200}
          alt={`Image related to ${title}`}
          className="h-[13rem] max-h-[13rem] object-fill lg:h-[11.5rem]"
          src={
            imageSrc ??
            "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          }
          loading="lazy"
        />
        {category && category?.title && (
          <div className="absolute left-0 top-0 w-full h-full z-10">
            <div className="flex p-4">
              <Link to={`/blogs/${category.title}`} prefetch="intent">
                <div className="bg-yellow text-white px-2 py-1 rounded text-sm uppercase">
                  {category.title}
                </div>
              </Link>
            </div>
          </div>
        )}
      </CardBody>
      <CardFooter className="bg-white-bg flex items-start flex-col gap-4 justify-between px-4">
        <Link to={`/blogs/${category?.title ?? "_"}/${slug}`} prefetch="intent">
          <h4 className="font-semibold text-base flex justify-start items-start text-left w-full capitalize">
            {title}
          </h4>
          <div className="w-full text-start mt-2">
            <p className="text-default-500 line-clamp-3 text-sm first-letter:capitalize">
              {summary}
            </p>
          </div>
          <div className="w-full mt-2">
            <div className="flex items-center gap-2 text-medium uppercase">
              <FaArrowRightLong className="text-primary" />
              <span className="font-semibold text-sm">View article</span>
            </div>
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};
