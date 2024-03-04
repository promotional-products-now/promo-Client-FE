import { Link } from "@remix-run/react";
import { FaArrowRightLong } from "react-icons/fa6";
import image from "app/assets/item.png";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { blogPosts } from "app/mock/blogData";

const Blog = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto py-10 px-5 lg:px-0 lg:w-[80%]">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-4xl font-extrabold">Our Blog</h2>
        <h3 className="text-gray text-2xl">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts &&
          blogPosts.map((post) => (
            <Card key={post.id} isPressable className="rounded-none shadow-none">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="none"
                  radius="none"
                  width="100%"
                  alt={post.title}
                  className="h-[200px] object-cover lg:h-[200px]"
                  src={image}
                />
              </CardBody>
              <CardFooter className="bg-white-bg flex flex-col gap-2 justify-between text-left px-3">
                <h4 className="line-clamp-2 text-[18px]">{post.title}</h4>
                <p className="text-default-500 line-clamp-2 ">{post.body}</p>
                <div className="w-full">
                  <Link
                    to={`/blogpost/${post.title}`}
                    className="flex items-center gap-2 font-semibold uppercase"
                  >
                    <FaArrowRightLong color="blue" />
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
