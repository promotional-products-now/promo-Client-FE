import { Link } from "@remix-run/react";
import { FaArrowRight } from "react-icons/fa";
import image from "../../assets/item.png";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

type PostType = {
  id: string | number;
  title: string;
  img: string;
  body: string;
};

const BlogGrid: React.FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {posts &&
        posts.map((post, index) => (
          <Card key={index} isPressable className="rounded-none shadow-none">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="none"
                radius="none"
                width="100%"
                alt={post.title}
                className="w-full object-cover h-[140px]"
                src={image}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col gap-2 justify-between text-left px-3">
              <b>{post.title}</b>
              <p className="text-default-500 line-clamp-2 ">{post.body}</p>
              <div className="w-full">
                <Link to={""} className="flex items-center gap-2 font-semibold uppercase">
                  <FaArrowRight color="blue" />
                  View article
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default BlogGrid;
