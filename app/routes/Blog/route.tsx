import { MetaFunction } from "@remix-run/node";
import { blog as blogPosts } from "app/api_dummy";
import { BlogCard } from "app/components/Blog/BlogCard";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "" }];
};

const Blog = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts &&
          blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              image={post.image}
              id={post.id}
              category={post.category}
              body={post.body}
            />
          ))}
      </div>
    </div>
  );
};

export default Blog;
