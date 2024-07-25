import { services } from "app/contents/aboutServices";
import {
  schemaAddress,
  schemaContactPoint,
  schemaSocialLinks,
  schemaorganization,
} from "app/utils/schema.org";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us | Promotional Products Now",
  url: "https://promotionalproductsnow.au/about",
  description:
    "Promotional Products Now is a progressive promotional products company dedicated to customer satisfaction, serving Australia for over 20 years with unmatched service, price, and product quality.",
  address: schemaAddress,
  contactPoint: schemaContactPoint,
  sameAs: schemaSocialLinks,
};

export const servicesSchema = {
  "@context": "https://schema.org",
  ...schemaorganization,
  service: services.map((service) => ({
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    url: `https://promotionalproductsnow.au/${service.action}`,
    provider: schemaorganization,
  })),
};
