import { services } from "app/contents/aboutServices";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Promotional Products Now",
  url: "", //Site url
  description:
    "A progressive promotional products company founded on the belief that customer satisfaction is of paramount and continuing importance.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Australia",
  },
  sameAs: "", //Site url
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Promotional Products Now",
  service: services.map((service) => ({
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    url: `https://yourwebsite.com/${service.action}`,
    provider: {
      "@type": "Organization",
      name: "Promotional Products Now",
    },
  })),
};
