import BlogGrid from "app/components/BlogGrid";
import { blogPosts } from "app/components/BlogGrid/data";

const Blog = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto py-10 text-sm lg:w-[90%]">
      <div className="flex flex-col gap-1 text-center capitalize">
        <b className="text-xl font-extrabold">our Blog</b>
        <p className="text-foreground-500">Browse our latest new</p>
      </div>
      <BlogGrid posts={blogPosts} />
    </div>
  );
};

export default Blog;
