import { LocationDetails } from "app/contents/contactLoactions";

export const contactSeo = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Promotional Products Now",
  url: "https://www.promotionalproductsnow.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: LocationDetails[2].href,
    email: LocationDetails[3].body,
    description: LocationDetails[0].body,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: LocationDetails[1].body,
    addressLocality: LocationDetails[0].body,
  },
};
