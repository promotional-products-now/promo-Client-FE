import { Link, Form, MetaFunction, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { Button, Image, Input, Tabs, Tab, Textarea } from "@nextui-org/react";
import { BiUser, BiChat, BiSearch, BiShareAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { socialIcons } from "app/contents/blogSocialHandles";
import { CommentSchema } from "app/schema/comment.schema";
import { CONTENT_BASE_URL } from "app/api/api";
import { fetchAllBlogsApi } from "app/api/blog.api";
import { FacebookShareButton } from "react-share";

export const meta: MetaFunction = () => {
  return [{ title: "Blog Post" }, { name: "", content: "" }];
};

export async function loader({ params }: { params: { category: string; id: string } }) {
  if (params.id) {
    const { data } = await axios.get(`${CONTENT_BASE_URL}/blog/${params.id}`);

    const blog = data.isError
      ? { error: data.message, category: params.category, post: [] }
      : { category: params.category, post: data.payload };

    const request = await fetchAllBlogsApi();
    const response = await request.data;
    const blogs = response.isError ? [] : response.payload;

    // console.log(blogs);
    return {
      blog,
      blogs,
    };
  }
}

interface Category {
  title: string;
}

interface BlogPostType {
  _id: string;
  title: string;
  image?: string;
  category: Category;
}

export default function BlogPost() {
  const { blog, blogs } = useLoaderData<typeof loader>();
  const { post } = blog;

  console.log(blogs);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    resolver: yupResolver(CommentSchema),
  });

  const copyPostLink = async () => {
    await navigator.clipboard.writeText(`http://localhost:3000/blogs/${blog.category}/${post._id}`);
  };

  const onSubmit = (data: CommentSchema) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-wrap text-gray gap-5 md:gap-10 mx-auto px-3 py-10 md:px-0 md:flex-nowrap md:w-5/6">
      <div className="w-full flex flex-col gap-5 md:w-2/3">
        <div>
          <Image
            shadow="none"
            radius="none"
            width="100%"
            alt=""
            className="h-[200px] object-cover lg:h-[450px]"
            src={
              post.image ??
              "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            }
          />
          <div className="flex flex-col gap-10 my-5">
            <h2 className="font-bold text-2xl text-black md:text-3xl">{post && post.title}</h2>

            <div className="flex w-full flex-col gap-6">
              <Tabs
                variant="underlined"
                aria-label="Tabs variants"
                classNames={{
                  tabList: "gap-8 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-primary h-1",
                  tab: "max-w-fit px-0 h-12",
                }}
              >
                <Tab
                  key="photos"
                  title={
                    <div className="flex items-center gap-3 mb-1">
                      <div className="border p-1">
                        <BiChat size={20} />
                      </div>
                      <p>0 Comments</p>
                    </div>
                  }
                >
                  <div>
                    <span>No comments</span>
                  </div>
                </Tab>
                <Tab
                  key="music"
                  title={
                    <div className="flex items-center gap-3 mb-1">
                      <div className="border p-1">
                        <BiUser size={20} />
                      </div>
                      <div>
                        <p>By Admin</p>
                        <span>23/10/2024</span>
                      </div>
                    </div>
                  }
                >
                  <div>
                    <span>Admin comments Here</span>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="text-justify md:text-left">
          <p>{post && post.body}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full border border-lightGray shadow-md"></div>
          <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
            <h2 className="font-bold text-black text-2xl">Share this blog article</h2>
            <div className="flex flex-wrap gap-3">
              <div className="bg-gray p-2 cursor-pointer active:opacity-80" onClick={copyPostLink}>
                <BiShareAlt size={25} color="white" />
              </div>
              <FacebookShareButton url={`http://localhost:3000/blogs/${blog.category}/${post._id}`}>
                <BiShareAlt size={25} />
              </FacebookShareButton>
              {socialIcons.map((socialIcon) => (
                <Link
                  to={socialIcon.href}
                  key={socialIcon.id}
                  style={{ backgroundColor: socialIcon.color }}
                  className="p-2"
                >
                  <socialIcon.icon size={25} color="white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full border"></div>
        </div>

        <Form method="post" className="bg-gray1 p-5 my-5 flex flex-col md:gap-8 py-10 md:py-5">
          <div className="text-black mb-3 md:mb-0">
            <h2 className="font-bold text-2xl">Leave your reply</h2>
            <p className="text-sm">
              Your emaila ddress will not be published. Required fields are marked
            </p>
          </div>
          <Textarea
            variant="underlined"
            labelPlacement="outside"
            placeholder="Comment"
            classNames={{ innerWrapper: "h-32 md:h-fit" }}
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
          <div className="mt-8 md:pt-0">
            <Button
              color="default"
              radius="none"
              className="w-full md:w-fit bg-primary text-white py-3"
              onClick={handleSubmit(onSubmit)}
            >
              <p className="text-start">Leave your comment</p>
            </Button>
          </div>
        </Form>
      </div>

      <div className="w-full text-black flex flex-col gap-8 md:w-1/3">
        <div className="w-full bg-gray1 px-5 py-8 flex flex-col gap-4">
          <div className="flex gap-2 items-center font-medium text-lg">
            <FaArrowRightLong />
            SEARCH
          </div>
          <div className="flex">
            <Input
              type="text"
              radius="none"
              label="Search blog here"
              className=" py-0 pl-2 w-full h-[50px] border border-r-0"
            />
            <button className="bg-primary py-2 px-3 flex items-center justify-center">
              <BiSearch size={20} color="white" />
            </button>
          </div>
        </div>
        <div className="w-full bg-gray1 px-5 py-8 flex flex-col gap-4 [&_p]:text-sm">
          <div className="flex gap-2 items-center border-b pb-4 font-medium text-lg">
            <FaArrowRightLong />
            BLOG CATEGORY
          </div>
          <div className="border-b border-zinc-300 pb-4 text-lg  text-zinc-700">
            Corporate Gifts (28)
          </div>
          <div className="border-b border-zinc-300 pb-4 text-lg  text-zinc-700">
            Promotional Products (33)
          </div>
          <div className="pb-4 text-lg border-zinc-300 text-zinc-700">Tips & Tricks (7)</div>
        </div>
        <div className="w-full bg-gray1  px-5 py-8 flex flex-col gap-4">
          <div>
            <div className="flex gap-2 items-center font-medium text-lg">
              <FaArrowRightLong />
              RECENT POSTS
            </div>
            <div className="border-b border-gray shadow-sm pb-4"></div>
          </div>
          <div className="flex flex-col gap-6">
            {blogs &&
              blogs.map(
                (post: BlogPostType, index: number) =>
                  index < 3 && (
                    <div className="flex items-center gap-3">
                      <Image
                        shadow="none"
                        radius="none"
                        width="100%"
                        alt=""
                        className="w-[10rem] h-[6rem] object-cover"
                        src={
                          post?.image ??
                          "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                        }
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="line-clamp-2  mb-2">{post?.title}</h3>
                        <Link
                          to={`/blogs/${post?.category?.title}/${post._id}`}
                          className="text-sm hover:underline text-orange"
                        >
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
}
