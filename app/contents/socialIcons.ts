import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

export const icons = [
  {
    id: "2",
    IconBtn: TwitterShareButton,
    Icon: TwitterIcon,
    href: "http://twitterhub.com",
    color: "#000000",
  },
  {
    id: "3",
    IconBtn: FacebookShareButton,
    Icon: FacebookIcon,
    href: "http://facebook.com",
    color: "#1877F2",
  },
  {
    id: "4",
    IconBtn: PinterestShareButton,
    Icon: PinterestIcon,
    href: "http://printerest.com",
    color: "#E60023",
  },
  {
    id: "5",
    IconBtn: LinkedinShareButton,
    Icon: LinkedinIcon,
    href: "http://linkedin.com",
    color: "#0077B5",
  },
  {
    id: "6",
    IconBtn: EmailShareButton,
    Icon: EmailIcon,
    href: "http://gmail.com",
    color: "blue",
  },
];
