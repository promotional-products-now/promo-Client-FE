export interface BlogCardProps {
  _id: string;
  title: string;
  description: string;
  authorName: string;
  imageSrc: string;
  createdAt: string;
  slug: string;
}

export const blogSchema = (posts: BlogCardProps[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog | Promotional Products Now",
    url: "https://promotionalproductsnow.au/blog",
    description:
      "Browse the latest news and updates from Promotional Products Now, covering topics on fashion trends, technology in fashion, and more.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://app.promotionalproductsnow.au/${post.slug}`,
      datePublished: post.createdAt,
      author: {
        "@type": "Person",
        name: post.authorName,
      },
      image: post.imageSrc,
    })),
  };
};
