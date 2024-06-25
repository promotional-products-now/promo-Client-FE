import { Link } from "@remix-run/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MetaFunction } from "@remix-run/node";
import image from "app/assets/item.png";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { blog as blogPosts } from "app/api_dummy";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "" }];
};


const Blog = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts &&
          blogPosts.map((post) => (
            <Link to={`/blogpost/${post.title}`} key={post.id}>
              <Card isPressable className="rounded-none shadow-none" radius="sm">
                <CardBody className="overflow-visible p-0 relative">
                  <Image
                    shadow="none"
                    radius="none"
                    width="100%"
                    alt={post.title}
                    className="h-[200px] object-fill lg:h-[180px]"
                    src={post.image}
                  />
                  <div className="absolute left-0 top-0 w-full h-full z-10">
                    <div className="flex p-4">
                      <div className="bg-yellow text-white px-2 py-1 rounded text-sm uppercase">
                        {post.category}
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="bg-white-bg flex flex-col gap-4 justify-between px-4">
                  <h4 className="font-semibold text-base flex justify-start items-start text-left w-full">
                    {post.title}
                  </h4>
                  <p className="text-default-500 line-clamp-3 text-left">{post.body}</p>
                  <div className="w-full">
                    <Link
                      to={`/blogpost/${post.title}`}
                      className="flex items-center gap-2 text-medium uppercase"
                    >
                      <FaArrowRightLong className="text-primary" />
                      <span className="font-semibold text-sm">View article</span>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blog;
