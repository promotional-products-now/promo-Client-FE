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
      <div className="cursor-pointer group h-[23rem] overflow-hidden bg-white-bg">
        <div className="w-full h-52 relative overflow-hidden p-0">
          <Image
            alt={title}
            radius="none"
            src={image}
            removeWrapper
            className="object-cover w-full h-full transition"
          />
          <div className="px-2 py-1 bg-yellow absolute rounded-md top-2 left-2 z-10">News</div>
        </div>

        <div className="flex flex-col justify-between items-start h-[10rem] p-2 overflow-visible">
          <h3 className="text-black capitalize font-bold text-sm line-clamp-2 text-left">
            {title}
          </h3>
          <p className="text-black text-xs line-clamp-3 text-left">{subtitle}</p>
          <div className="flex flex-row items-center space-x-3">
            <HiArrowRight size={20} className="text-primary" />
            <div className="text-sm font-semibold">View Article</div>
          </div>
        </div>
      </div>
    </Link>
  );
};


export default BlogCard;
