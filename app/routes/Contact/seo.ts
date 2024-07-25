import { schemaAddress, schemaContactPoint, schemaSocialLinks } from "app/utils/schema.org";

export const contactSeo = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us | Promotional Products Now",
  url: "https://promotionalproductsnow.au/contact",
  description:
    "Get in touch with Promotional Products Now for any inquiries or support. Visit our showroom, call us, or send an email.",
  address: schemaAddress,
  contactPoint: [schemaContactPoint],
  sameAs: schemaSocialLinks,
};
