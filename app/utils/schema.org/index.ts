const schemaAddress = {
  "@type": "PostalAddress",
  streetAddress: "Your street address here",
  addressLocality: "City Name",
  addressRegion: "State/Region Name",
  postalCode: "Postal Code",
  addressCountry: "Australia",
};

const schemaContactPoint = {
  "@type": "ContactPoint",
  telephone: "+61-1234-5678",
  contactType: "Customer Service",
  email: "support@promotionalproductsnow.com",
  areaServed: "AU",
  availableLanguage: ["English"],
};

const schemaSocialLinks = [
  "https://www.facebook.com/YourFacebookPage",
  "https://www.linkedin.com/in/YourLinkedInProfile",
  "https://twitter.com/YourTwitterHandle",
];

const schemaorganization = {
  "@type": "Organization",
  name: "Promotional Products Now",
  url: "https://promotionalproductsnow.au",
  logo: "https://promotionalproductsnow.au/logo.png",
};

export { schemaAddress, schemaContactPoint, schemaSocialLinks, schemaorganization };
