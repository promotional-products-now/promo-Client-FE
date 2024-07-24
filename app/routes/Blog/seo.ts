export interface BlogCardProps {
  _id: string;
  title: string;
  description: string;
  authorName: string;
  imageSrc: string;
  publishedDate: string;
}

export const blogSchema = (posts: BlogCardProps[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Our Blog",
    description: "Browse our latest news and updates.",
    url: "https://app.promotionalproductsnow.au/",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://app.promotionalproductsnow.au/`,
      datePublished: post.publishedDate,
      author: {
        "@type": "Person",
        name: post.authorName,
      },
      image: post.imageSrc,
    })),
  };
};
