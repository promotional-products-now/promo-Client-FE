import Heading from "app/blocks/Heading";
import BlogCard from "app/components/BlogCard";
import Container from "app/components/Container";
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
    <Container>
      <div className="mt-[62px] px-[100px] flex flex-col gap-[30px]">
        <Heading title="Our Blog" center secondarysubtitle="Browse Our Latest News" />

        <motion.div className="flex flex-row gap-5 cursor-grab overflow-x-hidden" ref={carouselRef}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
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
    </Container>
  );
};

export default Blog;
