import { Image } from "@nextui-org/react";
import { Link, Form, useLoaderData } from "@remix-run/react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { BiUser, BiChat, BiSearch } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { socialIcons } from "app/contents/blogSocialHandles";
import blogImage from "app/assets/item.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentSchema } from "app/schema/comment.schema";
import { blog } from "app/api_dummy";

export const loader = ({ params }: { params: { title: string } }) => {
  const post = blog.find((item) => item.title == params.title);

  // Handle Not Found Error here
  // if (!post) throw Error("Post not found");

  const data = { post };
  return data;
};

type BlogPost = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const SingleBlog = () => {
  const { post }: { post: BlogPost } = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    resolver: yupResolver(CommentSchema),
  });

  const onSubmit = (data: CommentSchema) => {
    console.log(data);
  };
  return (
    <div className="w-full flex flex-wrap text-gray gap-10 mx-auto px-3 py-10 md:px-0 md:flex-nowrap md:w-5/6">
      <div className="w-full flex flex-col gap-5 md:w-2/3">
        <div>
          <Image
            shadow="none"
            radius="none"
            width="100%"
            alt=""
            className="h-[200px] object-cover lg:h-[450px]"
            src={post && post.image}
          />
          <div className="flex flex-col gap-10 my-5">
            <h2 className="font-bold text-2xl text-black md:text-3xl">{post && post.title}</h2>

            <div className="flex w-full flex-col">
              <Tabs aria-label="Options" color="default" radius="none">
                <Tab
                  key="photos"
                  title={
                    <div className="flex items-center gap-3">
                      <div className="border p-1">
                        <BiChat size={20} />
                      </div>
                      <p>0 Comments</p>
                    </div>
                  }
                />
                <Tab
                  key="music"
                  title={
                    <div className="flex items-center gap-3">
                      <div className="border p-1">
                        <BiUser size={20} />
                      </div>
                      <div>
                        <p>By Admin</p>
                        <span>23/10/2024</span>
                      </div>
                    </div>
                  }
                />
              </Tabs>
            </div>
          </div>

          <div className="relative my-4">
            <div className="w-[100px] border border-gray -mb-[1px] z-10 absolute"></div>
            <div className="border border-lightGray"></div>
          </div>
        </div>

        <div className="text-justify md:text-left">
          <p>{post && post.subtitle}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full border border-lightGray shadow-md"></div>
          <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
            <h2 className="font-bold text-black text-2xl">Share this blog article</h2>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((socialIcon) => (
                <Link to={socialIcon.href} key={socialIcon.id} className="bg-black p-2">
                  <socialIcon.icon size={25} color="white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full border"></div>
        </div>

        <Form method="post" className="bg-lightGray p-5 my-5 flex flex-col gap-8">
          <div className="text-black">
            <h2 className="font-bold text-2xl">Leave your reply</h2>
            <p className="text-sm">
              Your emaila ddress will not be published. Required fields are marked
            </p>
          </div>
          <Textarea
            variant="underlined"
            labelPlacement="outside"
            placeholder="Comment"
            className="bg-white col-span-12 md:col-span-6 mb-6 md:mb-0"
            {...register("comment")}
            errorMessage={errors?.comment?.message}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              type="text"
              variant="underlined"
              label="Your phone"
              className="bg-white"
              {...register("phone")}
              errorMessage={errors?.phone?.message}
            />
            <Input
              type="text"
              variant="underlined"
              label="Email"
              className="bg-white"
              {...register("email")}
              errorMessage={errors?.email?.message}
            />
            <Input type="text" variant="underlined" label="Website" className="bg-white" />
          </div>
          <div>
            <Button
              color="default"
              radius="none"
              className="bg-black text-white py-3"
              onClick={handleSubmit(onSubmit)}
            >
              Leave your comment
            </Button>
          </div>
        </Form>
      </div>

      <div className="w-full text-black flex flex-col gap-8 md:w-1/3">
        <div className="w-full bg-lightGray px-5 py-8 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <FaArrowRightLong />
            SEARCH
          </div>
          <div className="flex">
            <Input
              type="text"
              radius="none"
              variant="underlined"
              label="Search blog here"
              className="border py-0 pl-2 h-[50px] bg-white"
            />
            <button className="bg-black py-2 px-3 flex items-center justify-center">
              <BiSearch size={20} color="white" />
            </button>
          </div>
        </div>
        <div className="w-full bg-lightGray px-5 py-8 flex flex-col gap-4 [&_p]:text-sm">
          <div className="flex gap-2 items-center border-b pb-4">
            <FaArrowRightLong />
            BLOG CATEGORY
          </div>
          <div className="border-b pb-4">
            <p>Corporate Gifts (28)</p>
          </div>
          <div className="border-b pb-4">
            <p>Promotional Products (33)</p>
          </div>
          <div className="pb-4">
            <p>Tips & Tricks (7)</p>
          </div>
        </div>
        <div className="w-full bg-lightGray px-5 py-8 flex flex-col gap-4">
          <div>
            <div className="flex gap-2 items-center">
              <FaArrowRightLong />
              RECENT POSTS
            </div>
            <div className="border-b border-gray shadow-sm pb-4"></div>
          </div>
          <div className="flex flex-col gap-6">
            {blog.map(
              (post, index) =>
                index < 3 && (
                  <div className="flex items-center gap-3">
                    <Image
                      shadow="none"
                      radius="none"
                      width="100%"
                      alt=""
                      className="w-[100px] h-[65px] object-cover"
                      src={post.image}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="line-clamp-2 font-bold">
                        How Customers Appreciation Helps Your B2B Sales
                      </h3>
                      <Link to={`/blogpost/${post.title}`} className="text-sm hover:underline">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
