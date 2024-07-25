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
    slug: string;
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
    url: "https://promotionalproductsnow.au/",
    description: "Welcome to Promotional Products Now",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://promotionalproductsnow.au/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    mainEntity: [
      {
        "@type": "ItemList",
        name: "Featured Products",
        itemListElement: data.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: product.product.prices?.price || 0,
            },
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Health & Personal",
        itemListElement: data.healthProducts.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            category: "Health & Personal",
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Clothing",
        itemListElement: data.clothingProducts.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            category: "Clothing",
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Home & Living",
        itemListElement: data.homeAndLivingProducts.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            category: "Home & Living",
          },
        })),
      },
      {
        "@type": "Blog",
        name: "Our Blog",
        blogPost: data.blog.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: post.imageSrc,
          url: `/blog/${post.category.title || "_"}/${post.slug}`,
        })),
      },
    ],
  };
};
