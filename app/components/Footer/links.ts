import { IconType } from "react-icons";
import { TfiFacebook, TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import allCategory from "app/utils/categories";
import { toSnakeCase } from "app/utils/fn";

export type FooterT = {
  name: string;
  pathname: string;
};

export const aboutLinks: FooterT[] = [
  { name: "Message from Sales Manager", pathname: "/national-sales-manager" },
  { name: "Company Profile", pathname: "/about" },
  { name: "Terms & Conditions", pathname: "/terms-conditions" },
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

export const categoryLinks: FooterT[] = allCategory.map((cat) => {
  return { name: cat.name, pathname: `/categories/${toSnakeCase(cat.name)}` };
});

export const otherLinks: FooterT[] = [
  { name: "Terms & Conditions", pathname: "/terms-conditions" },
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
