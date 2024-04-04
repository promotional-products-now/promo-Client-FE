import { Link } from "@remix-run/react";
import { HiArrowRight } from "react-icons/hi2";
import { Image } from "@nextui-org/react";

interface BlogCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const BlogCard = ({ image, title, subtitle }: BlogCardProps) => {
  return (
    <Link to={`/blogpost/${title}`}>
      <div className="col-span-1 cursor-pointer group align-center">
        <div className="aspect-square w-full relative overflow-hidden p-0">
          <Image
            alt={title}
            radius="none"
            src={image}
            removeWrapper
            className="object-cover h-full w-full transition aspect-square inset-0"
          />
          <div className="px-2 py-1 bg-yellow absolute rounded-md top-2 left-2 z-10">News</div>
        </div>

        <div className="overflow-visible p-2 gap-3 align-middle">
          <div className="text-black capitalize font-semibold">{title}</div>
          <div className="text-black">{subtitle}</div>
          <div className="flex flex-row justify-start items-center gap-3 mt-4">
            <HiArrowRight size={20} className="text-primary" />
            <div className="">View Article</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
