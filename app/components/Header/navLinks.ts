export const navLinks: {
  name: string;
  pathname: string;
  prefetch: "intent" | "render" | "none" | "viewport";
}[] = [
  { name: "Home", pathname: "/", prefetch: "render" },
  { name: "About Us", pathname: "/about", prefetch: "render" },
  { name: "FAQs", pathname: "/faq", prefetch: "render" },
  { name: "Blog", pathname: "/blog", prefetch: "intent" },
  { name: "Contact", pathname: "/contact", prefetch: "render" },
];
