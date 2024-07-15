import { useMemo, useState } from "react";
import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Pagination } from "@nextui-org/react";
import { fetchAllBlogsApi } from "app/api/blog.api";
import { BlogCard } from "app/components/Blog/BlogCard";
import { BlogCardProps } from "./interface";

export const meta: MetaFunction = () => {
  return [{ title: "Blog" }, { name: "description", content: "" }];
};

export async function loader() {
  const { data } = await fetchAllBlogsApi();
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
    () => (Array.isArray(loaderData?.posts) ? loaderData.posts : []),
    [loaderData],
  );

  return (
    <div className="flex flex-col gap-10 lg:gap-7 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-1 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Blog</h2>
        <h3 className="text-default-500">Browse our latest news</h3>
      </div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post: BlogCardProps) => (
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
      <div className="flex items-center justify-center">
        {loaderData.posts?.length > 0 && (
          <Pagination
            variant="light"
            size="sm"
            total={loaderData?.posts?.pages}
            page={currentPage}
            onChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Blog;

const xx = {
  total: 2,
  pages: 1,
  data: [
    {
      _id: "66905fff74eebe6ef4d5b2d7",
      slug: "summer-fashion-trends-2024",
      title: "Summer Fashion Trends 2024: What’s Hot This Season",
      body: "n 2024, the world of fashion has embraced a captivating blend of nostalgia and futuristic innovation. Designers are weaving together threads of the past with bold strokes of modernity, creating a tapestry of styles that redefine elegance. This year, runways are ablaze with a revival of 1970s glamour—think flowing bohemian dresses adorned with intricate floral patterns and wide-brimmed hats that exude a sense of effortless chic. \n Simultaneously, technology-inspired fashion has taken center stage, with garments that not only dazzle the eye but also serve practical functions. Smart fabrics, embedded with sensors and responsive to environmental changes, transform everyday attire into a dynamic expression of style and functionality.\n Beyond the runway, sustainable fashion continues to gain momentum, with eco-conscious consumers seeking out brands committed to ethical practices and renewable materials. From upcycled couture to biodegradable textiles, the fashion landscape in 2024 is as much about making a statement as it is about making a difference.\n In this whirlwind of creativity and conscience, 2024 emerges as a year where fashion isn't just worn—it's lived, felt, and celebrated as a reflection of both individuality and collective aspirations.",
      category: {
        _id: "66905ace74eebe6ef4d5b2be",
        title: "news",
        createdAt: "2024-07-11T22:21:02.400Z",
        updatedAt: "2024-07-11T22:21:02.400Z",
        __v: 0,
      },
      tags: [],
      comments: [],
      isPublished: false,
      author: "507f1477bcf86cd799439011",
      createdAt: "2024-07-11T22:43:11.724Z",
      updatedAt: "2024-07-11T22:43:11.724Z",
      __v: 0,
    },
    {
      _id: "6690606474eebe6ef4d5b2df",
      slug: "tech-meets-texture",
      title: "Tech Meets Texture: The Revolution of 3D-Printed Couture",
      body: "In 2024, technology and fashion converge in groundbreaking ways with 3D-printed couture. Designers are pushing boundaries with avant-garde creations that blend intricate textures and futuristic aesthetics. From bespoke accessories to haute couture gowns, 3D printing redefines what's possible in the realm of fashion innovation.",
      category: {
        _id: "6690602b74eebe6ef4d5b2dd",
        title: "tech",
        createdAt: "2024-07-11T22:43:55.448Z",
        updatedAt: "2024-07-11T22:43:55.448Z",
        __v: 0,
      },
      tags: [],
      comments: [],
      isPublished: false,
      author: "507f1477bcf86cd799439011",
      createdAt: "2024-07-11T22:44:52.056Z",
      updatedAt: "2024-07-11T22:44:52.056Z",
      __v: 0,
    },
  ],
};
