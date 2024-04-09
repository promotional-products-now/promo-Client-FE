import BlogCard from "../Blog/BlogCard";
import Carousel from "../Carousel";
import { blog } from "app/api_dummy";

function BlogSection() {
  return (
    <section className="mb-20 md:px-20 w-full flex flex-col gap-2 md:space-y-6 w-max-ppn">
      <h1 className="font-bold text-2xl text-black capitalize text-center">Our Blog</h1>
      <h3 className="font-semibold text-lg text-gray text-center">Browse Our Latest News</h3>

      <div className="mx-4">
        <Carousel numberOfItems={3}>
          {blog.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-3 sm:mx-4">
              <BlogCard title={item.title} subtitle={item.subtitle} image={item.image} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default BlogSection;
