import { useMemo, useState } from "react";
import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Pagination } from "@nextui-org/react";
import { fetchAllBlogsApi } from "app/api/blog.api";
import { BlogCard } from "app/components/Blog/BlogCard";
import { BlogCardProps } from "./interface";
import { SEOHandle } from "@nasa-gcn/remix-seo";
import { blogSchema } from "./seo";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | Promotional Products Now " },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};

export const handle: SEOHandle = {
  getSitemapEntries: async (request) => {
    const { data } = await fetchAllBlogsApi();
    return data?.payload?.data.map((blog: any) => {
      return { route: `/blog/${blog.category.title || "_"}/${blog._id}`, priority: 0.7 };
    });
  },
};

export async function loader({ request }: any) {
  const searchTerm = new URL(request.url).searchParams.get("q");
  if (searchTerm) {
    const { data } = await fetchAllBlogsApi({ title: searchTerm });
    if (data.isError) {
      return { error: data.message, posts: [] };
    } else {
      return { posts: data.payload.data || [] };
    }
  } else {
    const { data } = await fetchAllBlogsApi();
    if (data.isError) {
      return { error: data.message, posts: [] };
    } else {
      return { posts: data.payload.data || [] };
    }
  }
}

const Blog = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-10 lg:gap-7 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {loaderData &&
          loaderData.posts &&
          loaderData.posts.length > 0 &&
          loaderData?.posts?.map((post: BlogCardProps) => (
            <div key={post?._id}>
              <BlogCard
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
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center">
        {loaderData && loaderData.posts?.length > 0 && (
          <Pagination
            variant="light"
            size="sm"
            total={loaderData?.posts?.pages}
            page={currentPage}
            onChange={setCurrentPage}
          />
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema(loaderData.posts)) }}
      />
    </div>
  );
};

export default Blog;
