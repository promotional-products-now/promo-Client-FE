import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchAllBlogsApi } from "app/api/blog.api";
import { BlogCard } from "app/components/Blog/BlogCard";
import { BlogCardProps } from "../../components/Blog/interface";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "" }];
};

export async function loader() {
  const { data } = await fetchAllBlogsApi();
  if (data.isError) {
    return { error: data.message, posts: [] };
  } else {
    return { posts: data.payload };
  }
}

const Blog = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-10 lg:gap-7 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {loaderData?.posts?.map((post: BlogCardProps) => (
          <BlogCard
            key={post?._id}
            title={post?.title}
            description={post?.description}
            imageSrc={
              post.imageSrc ??
              "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
            }
            _id={post?._id}
            category={post?.category}
            body={post?.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
