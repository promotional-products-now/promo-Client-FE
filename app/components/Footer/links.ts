import { IconType } from "react-icons";
import { TfiFacebook, TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";

export type FooterT = {
  name: string;
  pathname: string;
};

export const aboutLinks: FooterT[] = [
  { name: "Message from Sales Manager", pathname: "/national-sales-manager" },
  { name: "Company Profile", pathname: "/about" },
  { name: "Terms & Conditions", pathname: "/terms-&-conditions" },
  { name: "Privacy Policy", pathname: "/privacy-policy" },
  { name: "Contact", pathname: "/contact" },
];

export const companyInfo: FooterT[] = [
  { name: "Home", pathname: "/" },
  { name: "About Us", pathname: "/about" },
  { name: "FAQs", pathname: "/faq" },
  { name: "Blog", pathname: "/blog" },
  { name: "Guarantees", pathname: "/guarantees" },
  { name: "Contact Us", pathname: "/contact" },
];

export const categoryLinks: FooterT[] = [
  { name: "24 Hour Product", pathname: "/" },
  { name: "3 Day Express", pathname: "/" },
  { name: "Australian Made Products", pathname: "/categories/australianMade" },
  { name: "Bags", pathname: "/categories/bags" },
  { name: "Balloons", pathname: "/categories/ballons" },
  { name: "Caps & Hats", pathname: "/categories/caps_and_hats" },
  { name: "Catering & Barware", pathname: "/categories/catering" },
  { name: "Chocolates", pathname: "/categories/chocolates" },
  { name: "Clothing", pathname: "/categories/clothing" },
  { name: "Confectionery", pathname: "/categories/confectionary" },
  { name: "Conference & Trade Shows", pathname: "/categories/conference" },
  { name: "Cups", pathname: "/categories/cups" },
  { name: "Drink Bottles", pathname: "/categories/drinks_bottle" },
  { name: "Eco Friendly Products", pathname: "/categories/eco_friendly_products" },
];

export const otherLinks: FooterT[] = [
  { name: "Terms & Conditions", pathname: "/terms-&-conditions" },
  { name: "Privacy Statement", pathname: "/privacy-policy" },
];

export const faqLinks: FooterT[] = [
  { name: "FAQ - Your Artwork & Logo", pathname: "/faq" },
  { name: "FAQ - Placing Your Order", pathname: "/faq" },
];

export type SocialsT = {
  id: string;
  icon: IconType;
  pathname: string;
};

export const socialLinks: SocialsT[] = [
  { id: "facebook", icon: TfiFacebook, pathname: "" },
  { id: "youtube", icon: TfiYoutube, pathname: "" },
  { id: "linkedin", icon: FaLinkedinIn, pathname: "" },
  { id: "twitterx", icon: FaXTwitter, pathname: "" },
  { id: "google", icon: TiSocialGooglePlus, pathname: "" },
];
