import { Link } from "@remix-run/react";
import { FaArrowRight } from "react-icons/fa";
import image from "app/assets/item.png";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { blogPosts } from "app/mock/blogData";

const Blog = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto py-10 text-sm lg:w-[90%]">
      <div className="flex flex-col gap-1 text-center ">
        <h1 className="text-xl font-extrabold">Our Blog</h1>
        <p className="text-foreground-500">Browse our latest news</p>
      </div>
      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3">
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
    </div>
  );
};

export default Blog;
