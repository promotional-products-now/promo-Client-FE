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
  productShowCase: {
    [x: string]: {
      overview: {
        name: string;
      };
      product: {
        description: string;
      };
    }[];
  };

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
  const featuredProducts: any = {
    "@type": "ItemList",
    name: "Featured Products",
    itemListElement: [],
  };

  for (let i = 0; i < data.products.length; i++) {
    const product = data.products[i];
    featuredProducts.itemListElement.push({
      "@type": "ListItem",
      position: i + 1,
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
    });
  }

  const productShowCaseItems: any[] = [];
  for (const category in data.productShowCase) {
    if (data.productShowCase.hasOwnProperty(category)) {
      const products = data.productShowCase[category];
      const itemListElement = [];

      for (let index = 0; index < products.length; index++) {
        const product = products[index];
        itemListElement.push({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.overview.name,
            description: product.product.description,
            category: category,
          },
        });
      }

      productShowCaseItems.push({
        "@type": "ItemList",
        name: category,
        itemListElement: itemListElement,
      });
    }
  }

  const blogPosts: any = {
    "@type": "Blog",
    name: "Our Blog",
    blogPost: data.blog.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.imageSrc,
      url: `/blog/${post.category.title || "_"}/${post.slug}`,
    })),
  };

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
    mainEntity: [featuredProducts, ...productShowCaseItems, blogPosts],
  };
};
