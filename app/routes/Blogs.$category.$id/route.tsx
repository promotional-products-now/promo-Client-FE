import { useState } from "react";
import { Link, Form, MetaFunction, useLoaderData, json } from "@remix-run/react";
import { Button, Image, Input, Tabs, Tab, Textarea, Tooltip, Avatar } from "@nextui-org/react";
import { BiUser, BiChat, BiSearch, BiShareAlt } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentSchema } from "app/schema/comment.schema";
import {
  blogCommentApi,
  fetchAllBlogsApi,
  fetchSingleBlogApi,
  fetchBlogsCategoryApi,
} from "app/api/blog.api";
import { getSession } from "app/sessions";

import SocialShareButton from "app/components/SocialIconBtn";
import { icons } from "app/contents/socialIcons";
import axios from "axios";
import { LoaderFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog Post | Promotional Products Now " },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const email = session.get("email");
  const phone = session.get("phone");
  const uid = session.get("uid");

  if (params.id) {
    try {
      // Fetch data concurrently
      const [singleBlogData, allBlogsData, blogCategories] = await Promise.all([
        fetchSingleBlogApi(params.id),
        fetchAllBlogsApi(),
        fetchBlogsCategoryApi(),
      ]);

      const blog = singleBlogData.data.isError
        ? { error: singleBlogData.data.message, category: params.category, post: [] }
        : { category: params.category, post: singleBlogData.data.payload };

      const blogs = allBlogsData.data.isError ? [] : allBlogsData.data.payload?.data;

      return json({
        blog,
        blogs,
        user: { email, phone, uid },
        blogCategories: blogCategories?.data?.payload?.data || [],
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Response(error.message, {
          status: error.response?.status || 500,
          statusText: error.response?.statusText || "Internal Server Error",
        });
      } else {
        throw new Response("An unexpected error occurred", {
          status: 500,
          statusText: "Internal Server Error",
        });
      }
    }
  } else {
    throw new Response("Blog ID not provided", {
      status: 400,
      statusText: "Bad Request",
    });
  }
};

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { blog, blogs, user, blogCategories } = useLoaderData<typeof loader>();
  const { post } = blog;

  const [query, setQuery] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    resolver: yupResolver(CommentSchema),
    defaultValues: { email: user.email, phone: user.phone },
  });

  const handlePostPostUrl = async () => {
    await navigator.clipboard.writeText(`http://localhost:3000/blogs/${blog.category}/${post._id}`);
  };

  const onSubmit = async (data: CommentSchema) => {
    setIsSubmitting(true);
    try {
      const postComment = await blogCommentApi({
        blogId: post._id,
        comment: data.comment,
        author: user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone as string,
      }).then(() => setIsSubmitting(false));
    } catch (err) {
      setIsSubmitting(false);
      console.error(err);
    }
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
              post.imageSrc ??
              "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            }
          />
          <div className="flex flex-col gap-10 my-5">
            <h2 className="font-bold text-2xl text-black md:text-3xl">{post && post.title}</h2>

            <div className="text-justify md:text-left md:text-lg">
              <p>{post && post.body}</p>
            </div>

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
                  {post && post.comments.length === 0 ? (
                    <div>
                      <span>No comments</span>
                    </div>
                  ) : (
                    <div>
                      {post &&
                        post.comments.map((comment: any) => {
                          return (
                            <div className="bg-zinc-50 rounded-md mb-2">
                              <div className="flex gap-2 items-center font-medium p-2 mb-1 border-b border-zinc-100">
                                <Avatar name={comment.firstName} />
                                <div>
                                  {comment.lastName} {comment.firstName}
                                  {comment && !comment.firstName && (
                                    <div className="p-2  font-normal">{comment.body}</div>
                                  )}
                                </div>
                              </div>
                              {comment && comment.firstName && (
                                <div className="p-2">{comment.body}</div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  )}
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

        <div className="flex flex-col gap-2">
          <div className="w-full border border-lightGray shadow-md"></div>
          <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
            <h2 className="font-bold text-black text-2xl">Share this blog article</h2>
            <div className="flex flex-wrap gap-3 items-start">
              <Tooltip showArrow={false} content="Copy" color="foreground">
                <button onClick={handlePostPostUrl} className="bg-gray text-white px-2 py-1.5">
                  <BiShareAlt size={30} />
                </button>
              </Tooltip>
              {icons.map(({ id, IconBtn, Icon, href, color }) => (
                <SocialShareButton
                  key={id}
                  IconBtn={IconBtn}
                  Icon={Icon}
                  href={href}
                  color={color}
                />
              ))}
            </div>
          </div>
          <div className="w-full border"></div>
        </div>

        <Form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray1 p-5 my-5 flex flex-col md:gap-8 py-10 md:py-5"
        >
          <div className="text-black mb-3 md:mb-0">
            <h2 className="font-bold text-2xl">Leave your reply</h2>
            <p className="text-sm">
              Your email address will not be published. Required fields are marked
            </p>
          </div>

          <Textarea
            variant="underlined"
            labelPlacement="outside"
            placeholder="Comment*"
            classNames={{ innerWrapper: "h-32 md:h-fit" }}
            className="bg-white col-span-12 md:col-span-6 mb-6 md:mb-0"
            {...register("comment")}
            isInvalid={!!errors?.comment?.message}
            errorMessage={errors?.comment?.message}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              type="text"
              variant="underlined"
              label="First Name*"
              className="bg-white"
              {...register("firstName")}
              isInvalid={!!errors?.firstName?.message}
              errorMessage={errors?.firstName?.message}
            />
            <Input
              type="text"
              variant="underlined"
              label="Last Name"
              className="bg-white"
              {...register("lastName")}
              isInvalid={!!errors?.lastName?.message}
              errorMessage={errors?.lastName?.message}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              type="text"
              variant="underlined"
              label="Your phone"
              className="bg-white"
              {...register("phone")}
              isInvalid={!!errors?.phone?.message}
              errorMessage={errors?.phone?.message}
            />
            <Input
              type="text"
              variant="underlined"
              label="Email*"
              className="bg-white"
              {...register("email")}
              isInvalid={!!errors?.email?.message}
              errorMessage={errors?.email?.message}
            />
          </div>
          <div className="mt-8 md:pt-0">
            <Button
              type="submit"
              color="default"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              radius="none"
              className="w-full md:w-fit bg-primary text-white py-3"
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
              label="Search blog by title"
              className=" py-0 pl-2 w-full h-[50px] border border-r-0"
              onValueChange={setQuery}
            />
            <Link
              to={`/Blog/?q=${query}`}
              className="bg-primary py-2 px-3 flex items-center justify-center"
            >
              <BiSearch size={20} color="white" />
            </Link>
          </div>
        </div>
        <div className="w-full bg-gray1 px-5 py-8 flex flex-col gap-4 [&_p]:text-sm">
          <div className="flex gap-2 items-center border-b pb-4 font-medium text-lg">
            <FaArrowRightLong />
            BLOG CATEGORY
          </div>

          {blogCategories &&
            blogCategories.length > 0 &&
            blogCategories.map((category: { _id: String; title: string }) => {
              return (
                <Link key={category._id as string} to={`/blogs/${category?.title}`}>
                  <div className="border-b border-zinc-300 pb-4 text-lg  text-zinc-700">
                    {category?.title || ""}
                  </div>
                </Link>
              );
            })}
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
              blogs.length > 0 &&
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
