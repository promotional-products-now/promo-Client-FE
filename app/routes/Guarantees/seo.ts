export const guaranteeSchema = (guarantees: { title: string; description: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Guarantees",
    description:
      "Here is a 5 Rock Solid Guarantees to give you peace of mind and confidence that your satisfaction is our number 1 priority at all times.",
    itemListElement: guarantees.map((guarantee, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: guarantee.title,
        description: guarantee.description,
      },
    })),
  };
};
