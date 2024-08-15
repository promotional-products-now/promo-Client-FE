export const guaranteeSchema = (guarantees: { title: string; description: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Guarantees | Promotional Products Now",
    url: "https://promotionalproductsnow.au/guarantees",
    description:
      "Promotional Products Now provides five rock-solid guarantees to ensure customer satisfaction, including on-time delivery, product satisfaction, extended warranty, communication guarantee, and order size flexibility.",
    mainEntity: [
      {
        itemListElement: guarantees.map((guarantee, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: guarantee.title,
            description: guarantee.description,
          },
        })),
      },
    ],
  };
};
