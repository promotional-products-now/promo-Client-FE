import { IconType } from "react-icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { SlSocialGoogle, SlSocialLinkedin } from "react-icons/sl";

export type FooterT = {
  name: string;
  pathname: string;
};

export const aboutLinks: FooterT[] = [
  { name: "Message from Sales Manager", pathname: "/" },
  { name: "Company Profile", pathname: "/" },
  { name: "Terms & Conditions", pathname: "/terms-&-conditions" },
  { name: "Privacy Policy", pathname: "/privacy-policy" },
  { name: "Contact", pathname: "/" },
];

export const companyInfo: FooterT[] = [
  { name: "Home", pathname: "/" },
  { name: "About Us", pathname: "/" },
  { name: "FAQs", pathname: "/" },
  { name: "Blog", pathname: "/" },
  { name: "Guarantees", pathname: "/" },
  { name: "Contact Us", pathname: "/" },
];

export const categoryLinks: FooterT[] = [
  { name: "24 Hour Product", pathname: "/" },
  { name: "3 Day Express", pathname: "/" },
  { name: "Australian Made Products", pathname: "/" },
  { name: "Bags", pathname: "/" },
  { name: "Balloons", pathname: "/" },
  { name: "Caps & Hats", pathname: "/" },
  { name: "Catering & Barware", pathname: "/" },
  { name: "Chocolates", pathname: "/" },
  { name: "Clothing", pathname: "/" },
  { name: "Confectionery", pathname: "/" },
  { name: "Conference & Trade Shows", pathname: "/" },
  { name: "Cups", pathname: "/" },
  { name: "Drink Bottles", pathname: "/" },
  { name: "Eco Friendly Products", pathname: "/" },
];

export const otherLinks: FooterT[] = [
  { name: "Terms & Conditions", pathname: "/terms-&-conditions" },
  { name: "Privacy Statement", pathname: "/privacy-policy" },
];

export const faqLinks: FooterT[] = [
  { name: "FAQ - Your Artwork & Logo", pathname: "/" },
  { name: "FAQ - Placing Your Order", pathname: "/" },
];

export type SocialsT = {
  id: string;
  icon: IconType;
  pathname: string;
};

export const socialLinks: SocialsT[] = [
  { id: "facebook", icon: FiFacebook, pathname: "" },
  { id: "youtube", icon: AiOutlineYoutube, pathname: "" },
  { id: "linkedin", icon: SlSocialLinkedin, pathname: "" },
  { id: "twitterx", icon: BsTwitterX, pathname: "" },
  { id: "google", icon: SlSocialGoogle, pathname: "" },
];
