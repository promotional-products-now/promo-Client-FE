import { IconType } from "react-icons";
import { ShopIcon } from "app/assets/ShopIcon";
import { GuaranteeIcon } from "app/assets/GuaranteeIcon";
import { FaqIcon } from "app/assets/FaqIcon";
import { BlogIcon } from "app/assets/BlogIcon";

export type ServicesT = {
  icon: IconType;
  title: string;
  action: string;
  id: string;
};

export const services = [
  {
    icon: ShopIcon,
    title: "Shopping now",
    action: "",
    id: "shopping",
  },
  {
    icon: GuaranteeIcon,
    title: "Our Guarantees",
    action: "guarantees",
    id: "guarantees",
  },
  {
    icon: FaqIcon,
    title: "Our FAQs",
    action: "faq",
    id: "faqs",
  },
  {
    icon: BlogIcon,
    title: "Blog Articles",
    action: "blog",
    id: "blog",
  },
];
