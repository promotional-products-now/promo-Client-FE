const faqSchema = (groupedFAQs: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: "https://promotionalproductsnow.au/faq",
    mainEntity: Object.values(groupedFAQs)
      .flat()
      .map((faq: any) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
  };
};

export { faqSchema };
