import { Link } from "@remix-run/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BlogCardProps } from "../../routes/Blog/interface";

export const BlogCard = ({ imageSrc, title, category, _id, body }: BlogCardProps) => {
  return (
    <Card isPressable className="rounded-none shadow-none" radius="sm">
      <CardBody className="overflow-visible p-0 relative">
        <Image
          shadow="none"
          radius="none"
          width="100%"
          alt={title}
          className="h-[200px] object-fill lg:h-[180px]"
          src={
            imageSrc ??
            "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          }
        />
        {category && category.title && (
          <div className="absolute left-0 top-0 w-full h-full z-10">
            <div className="flex p-4">
              <Link to={`/blogs/${category?.title}`}>
                <div className="bg-yellow text-white px-2 py-1 rounded text-sm uppercase">
                  {category.title}
                </div>
              </Link>
            </div>
          </div>
        )}
      </CardBody>
      <CardFooter className="bg-white-bg flex flex-col gap-4 justify-between px-4">
        <Link to={`/blogs/${category?.title ?? "_"}/${_id}`}>
          <h4 className="font-semibold text-base flex justify-start items-start text-left w-full capitalize">
            {title}
          </h4>
          <div className="w-full text-start">
            <p className="text-default-500 line-clamp-3 first-letter:capitalize">{body}</p>
          </div>
          <div className="w-full">
            <Link
              to={`/blogs/${category?.title ?? "_"}/${_id}`}
              className="flex items-center gap-2 text-medium uppercase"
            >
              <FaArrowRightLong className="text-primary" />
              <span className="font-semibold text-sm">View article</span>
            </Link>
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};
