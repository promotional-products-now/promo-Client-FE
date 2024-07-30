import { useLoaderData, useParams } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { BlogCard } from "app/components/Blog/BlogCard";
import { fetchAllBlogsCategoryApi } from "app/api/blog.api";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | Promotional Products Now " },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};

export async function loader({ params }: { params: { cat: string } }) {
  const { data } = await fetchAllBlogsCategoryApi({ category: params.cat, page: 1 });
  if (data.isError) {
    return { error: data.message, posts: [] };
  } else {
    return { posts: data?.payload?.data || [] };
  }
}

const Blog = () => {
  const loaderData = useLoaderData<typeof loader>();

  let { cat } = useParams();

  return (
    <div className="flex flex-col gap-10 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold capitalize">{cat} Blog</h2>
        <h3 className="text-default-500">Browse our latest {cat} posts</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {loaderData &&
          loaderData.posts.length > 0 &&
          loaderData.posts &&
          loaderData.posts.map((post: any) => (
            <BlogCard
              key={post?._id}
              title={post?.title}
              slug={post?.slug || post?.title}
              description={post?.description}
              imageSrc={post.image}
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
