import { Link } from "@remix-run/react";
import Button from "app/blocks/Button";
import { HiArrowRight } from "react-icons/hi2";

interface BlogCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const BlogCard = ({ image, title, subtitle }: BlogCardProps) => {
  return (
    <Link to={`/`} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full ">
        <div className="aspect-square w-full relative overflow-hidden rounded-sm ">
          <img
            alt="listing"
            src={image}
            className="object-cover h-full w-full transition aspect-auto pointer-events-none"
          />

          <div className="px-2 py-1 bg-yellow absolute top-2 left-2">News</div>
        </div>
        <div className="bg-backgroundgray rounded-sm">
          <div className="text-black capitalize font-semibold">{title}</div>
          <div className="text-black">{subtitle}</div>
          <div className="flex flex-row justify-start items-center gap-3 mt-[16px]">
            <HiArrowRight size={20} className="text-blue"/>
            <div className="">View Article</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
