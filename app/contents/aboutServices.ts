import { BsCart3 } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { TbMessage } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa6";
import { IconType } from "react-icons";

export type ServicesT = {
  icon: IconType;
  title: string;
  action: string;
  id: string;
};

export const services = [
  {
    icon: BsCart3,
    title: "Shopping now",
    action: "shopping",
    id: "shopping",
  },
  {
    icon: GoVerified,
    title: "Our Guarantees",
    action: "guarantees",
    id: "guarantees",
  },
  {
    icon: TbMessage,
    title: "Our FAQs",
    action: "faqs",
    id: "faqs",
  },
  {
    icon: FaRegNewspaper,
    title: "Blog Articles",
    action: "blog",
    id: "blog",
  },
];
