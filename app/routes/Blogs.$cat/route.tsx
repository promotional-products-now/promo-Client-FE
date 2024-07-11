import { useLoaderData, useParams } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { BlogCard } from "app/components/Blog/BlogCard";
import { blog as blogPosts } from "app/api_dummy";
import { fetchAllBlogsCategoryApi } from "app/api/blog.api";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "" }];
};

export async function loader({ params }: { params: { cat: string } }) {
  const { data } = await fetchAllBlogsCategoryApi(params.cat);
  if (data.isError) {
    return { error: data.message, posts: [] };
  } else {
    return { posts: data.payload };
  }
}

const Blog = () => {
  const loaderData = useLoaderData<typeof loader>();

  let { category } = useParams();

  return (
    <div className="flex flex-col gap-10 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold capitalize">{category} Blog</h2>
        <h3 className="text-default-500">Browse our latest {category} posts</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {loaderData.posts &&
          loaderData.posts.map((post: any) => (
            <BlogCard
              key={post?._id}
              title={post?.title}
              description={post?.description}
              image={
                post.image ??
                "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
              }
              id={post?._id}
              category={post?.category?.title}
              body={post?.body}
            />
          ))}
      </div>
    </div>
  );
};

export default Blog;
