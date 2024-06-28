import { useParams } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { BlogCard } from "app/components/Blog/BlogCard";
import { blog as blogPosts } from "app/api_dummy";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "" }];
};

const Blog = () => {
  let { cat } = useParams();

  const blogs = blogPosts.filter((item) => item.category == cat);

  return (
    <div className="flex flex-col gap-10 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold capitalize">{cat} Blog</h2>
        <h3 className="text-default-500">Browse our latest {cat} posts</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {blogs &&
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              subtitle={blog.subtitle}
              image={blog.image}
              id={blog.id}
              category={blog.category}
              body={blog.body}
            />
          ))}
      </div>
    </div>
  );
};

export default Blog;
