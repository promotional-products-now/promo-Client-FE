import BlogCard from "app/components/Card/BlogCard";
import { blog } from "app/data";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Blog = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);
  }, []);

  return (
    <div className="flex justify-center" >
      <div className="mt-16 md:px-[100px] w-10/12 px-5 flex flex-col justify-center gap-2">
        <h1 className="font-bold text-2xl text-black capitalize text-center">Our Blog</h1>
        <h3 className="font-semibold text-lg text-[#4D4D4D] text-center">Browse Our Latest News</h3>
        <motion.div
          className="flex flex-row gap-5 cursor-grab overflow-x-hidden space-y-3"
          ref={carouselRef}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width - 50 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="flex gap-5"
          >
            {blog.map((item, index) => {
              return (
                <motion.div className="min-w-[23rem] flex flex-row gap-3 pointer-events-none">
                  <BlogCard
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
