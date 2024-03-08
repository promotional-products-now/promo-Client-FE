import { Link } from "@remix-run/react";
import { HiArrowRight } from "react-icons/hi2";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export type BlogCardProps = {
  image: string;
  title: string;
  subtitle: string;
};

export default function BlogCard({ image, title, subtitle }: BlogCardProps) {
  return (
    <Card className="col-span-1 cursor-pointer group" radius="none">
      <CardHeader className="aspect-square w-full relative overflow-hidden p-0">
        <Image
          radius="none"
          alt={title}
          src={image}
          className="object-cover h-full w-full transition aspect-square inset-0"
        />

        <div className="px-2 py-1 bg-yellow absolute rounded-md top-2 left-2 z-10">News</div>
      </CardHeader>

      <CardBody className="bg-white-bg rounded-sm p-2 space-y-3">
        <div className="text-black capitalize font-semibold text-sm">{title}</div>
        <div className="text-black text-xs">{subtitle}</div>
        <Link to={`/blogpost/${title}`} className="flex flex-row justify-start items-center gap-3">
          <HiArrowRight size={20} className="text-primary" />
          <div className="">View Article</div>
        </Link>
      </CardBody>
    </Card>
  );
};
