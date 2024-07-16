import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchAllBlogsApi } from "app/api/blog.api";
import { BlogCard } from "app/components/Blog/BlogCard";
import { SEOHandle } from "@nasa-gcn/remix-seo";
// import { BlogCardProps } from "./interface";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "" }];
};

export const handle: SEOHandle = {
  getSitemapEntries: async (request) => {
    const { data } = await fetchAllBlogsApi();
    return data?.payload?.data.map((blog: any) => {
      return { route: `/blog/${blog.category.title || "_"}/${blog._id}`, priority: 0.7 };
    });
  },
};

export async function loader({ params }: { params: { title: string } }) {
  const { data } = await fetchAllBlogsApi();

  if (data.isError) {
    return { error: data.message, posts: [] };
  } else {
    if (params.title) {
      const blog = data?.payload?.data.find(
        (post) => post.title.toLowerCase() === params.title.toLowerCase(),
      );
      return { posts: [blog] };
    }
  }
}

export default function SearcResult() {
  const loaderData = useLoaderData<typeof loader>();
  console.log(loaderData);
  return (
    <div className="flex flex-col gap-10 lg:gap-7 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {loaderData &&
          loaderData.posts.length > 0 &&
          loaderData.posts &&
          loaderData.posts.map((post: any) => (
            <BlogCard
              key={post?._id}
              title={post?.title}
              description={post?.description}
              imageSrc={post?.image || ""}
              _id={post?._id}
              category={post?.category}
              body={post?.body}
            />
          ))}
      </div>
    </div>
  );
}
