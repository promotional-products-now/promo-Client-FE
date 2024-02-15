import { BsCart3 } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { TbMessage } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa6";

export type ServicesT = {
  icon: JSX.Element;
  title: string;
  action: string;
  id: string;
}

export const services = [
  {
    icon: <BsCart3 style={{ color: "orange", fontSize: "4rem" }} />,
    title: "Shopping now",
    action: "shopping",
    id: "shopping"
  },
  {
    icon: <GoVerified style={{ color: "orange", fontSize: "4rem" }} />,
    title: "Our Guarantees",
    action: "guarantees",
    id: "guarantees"
  },
  {
    icon: <TbMessage style={{ color: "orange", fontSize: "4rem" }} />,
    title: "Our FAQs",
    action: "faqs",
    id: "faqs"
  },
  {
    icon: <FaRegNewspaper style={{ color: "orange", fontSize: "4rem" }} />,
    title: "Blog Articles",
    action: "blog",
    id: "blog"
  },
];


