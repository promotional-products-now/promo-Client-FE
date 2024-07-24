interface Data {
  products: {
    overview: {
      name: string;
    };
    product: {
      description: string;
      prices?: {
        price: number;
      };
    };
  }[];
  healthProducts: {
    overview: {
      name: string;
    };
    product: {
      description: string;
    };
  }[];
  clothingProducts: {
    overview: {
      name: string;
    };
    product: {
      description: string;
    };
  }[];
  homeAndLivingProducts: {
    overview: {
      name: string;
    };
    product: {
      description: string;
    };
  }[];
  blog: {
    title: string;
    description: string;
    imageSrc: string;
    category: {
      title: string;
    };
    _id: string;
  }[];
}

export const homePageSchema = (data: Data) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Promotional Products Now",
    description: "Welcome to Promotional Products Now",
    mainEntity: {
      "@type": "WebPage",
      name: "Home",
      hasPart: [
        {
          "@type": "Product",
          name: "Featured Products",
          offers: data.products.map((product: { [key: string]: any }) => ({
            "@type": "Offer",
            name: product.overview.name,
            description: product.product.description,
            priceCurrency: "USD",
            price: product.product.prices?.price || 0,
          })),
        },
        {
          "@type": "ProductCategory",
          name: "Health & Personal",
          hasProduct: data.healthProducts.map((product: { [key: string]: any }) => ({
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            category: "Health & Personal",
          })),
        },
        {
          "@type": "ProductCategory",
          name: "Clothing",
          hasProduct: data.clothingProducts.map((product: { [key: string]: any }) => ({
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            category: "Clothing",
          })),
        },
        {
          "@type": "ProductCategory",
          name: "Home & Living",
          hasProduct: data.homeAndLivingProducts.map((product: { [key: string]: any }) => ({
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            category: "Home & Living",
          })),
        },
        {
          "@type": "Blog",
          name: "Our Blog",
          blogPost: data.blog.map((post: { [key: string]: any }) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: post.imageSrc,
            url: `/blog/${post.category.title || "_"}/${post._id}`,
          })),
        },
      ],
    },
  };
};
