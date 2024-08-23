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
    { title: "Blog | Promotional Products Now" },
    { name: "description", content: "Welcome to Promotional Products Now" },
    { name: "og:image", content: "URL_TO_IMAGE" }, // Add og:image for better social sharing
  ];
};

export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400",
  };
}

export const handle: SEOHandle = {
  getSitemapEntries: async (request) => {
    const { data } = await fetchAllBlogsApi();
    return data?.payload?.data.map((blog: any) => {
      return { route: `/blog/${blog.category.title || "_"}/${blog.slug}`, priority: 0.7 };
    });
  },
};

export async function loader({ request }: any) {
  const searchTerm = new URL(request.url).searchParams.get("q");
  const { data } = searchTerm
    ? await fetchAllBlogsApi({ title: searchTerm })
    : await fetchAllBlogsApi();

  if (data.isError) {
    return { error: data.message, posts: [] };
  } else {
    return { posts: data.payload.data || [] };
  }
}

const Blog = () => {
  const loaderData = useLoaderData<typeof loader>();
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useMemo(
    () =>
      loaderData.posts?.map((post: BlogCardProps) => (
        <div key={post?._id}>
          <BlogCard
            title={post?.title}
            summary={post?.summary}
            slug={post?.slug || post?.title}
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
      )),
    [loaderData.posts],
  );

  return (
    <div className="flex flex-col gap-10 lg:gap-7 w-full mx-auto p-4 lg:p-0">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 md:grid-cols-3">
        {posts && posts.length > 0 ? posts : <p>No blogs found.</p>}
      </div>
      <div className="flex items-center justify-center">
        {loaderData && loaderData.posts && loaderData.posts?.length > 0 && (
          <Pagination
            variant="light"
            size="sm"
            total={loaderData?.posts?.pages}
            page={currentPage}
            onChange={setCurrentPage}
            aria-label="Blog pagination"
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
