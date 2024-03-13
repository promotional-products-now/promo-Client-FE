import { Link } from "@remix-run/react";
import { FaArrowRightLong } from "react-icons/fa6";
import image from "app/assets/item.png";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { blogPosts } from "app/mock/blogData";

const Blog = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto py-10 px-5 lg:px-0 lg:w-[80%]">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts &&
          blogPosts.map((post) => (
            <Card key={post.id} isPressable className="rounded-none shadow-none" radius="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="none"
                  radius="none"
                  width="100%"
                  alt={post.title}
                  className="h-[200px] object-fill lg:h-[180px]"
                  src={image}
                />
              </CardBody>
              <CardFooter className="bg-white-bg flex flex-col gap-2 justify-between text-left px-3">
                <h4 className="font-semibold md:text-medium">{post.title}</h4>
                <p className="text-default-500 line-clamp-3 ">{post.body}</p>
                <div className="w-full">
                  <Link
                    to={`/blogpost/${post.title}`}
                    className="flex items-center gap-2 text-medium uppercase"
                  >
                    <FaArrowRightLong className="text-primary" />
                    View article
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Blog;
