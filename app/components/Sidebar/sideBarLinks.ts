import { SidebarRoutes } from "./routes";
import { IconType } from "react-icons";
import {
    FiBarChart2,
    FiBook,
    FiBox,
    FiCoffee,
    FiHelpCircle,
    FiMail,
    FiShoppingBag,
    FiTruck,
    FiUser,
    FiUsers,
} from "react-icons/fi";

export type SidebarLinkT = {
    title: string;
    icon: IconType;
    pathname: SidebarRoutes;
    seo?: { title: string; description: string };
};

export const sidebarLinks: SidebarLinkT[] = [
    {
        title: "Home",
        pathname: SidebarRoutes.home,
        icon: FiBarChart2,
        seo: {
            title: "Home",
            description: "Home page",
        },
    },
    {
        title: "About Us",
        pathname: SidebarRoutes.about,
        icon: FiShoppingBag,
        seo: {
            title: "About US",
            description: "About PPN",
        },
    },
    {
        title: "Blog",
        pathname: SidebarRoutes.blog,
        icon: FiTruck,
        seo: {
            title: "Blog",
            description: "An overview of all orders placed",
        },
    },
    {
        title: "Contact US",
        pathname: SidebarRoutes.contact,
        icon: FiUsers,
        seo: {
            title: "Contact US",
            description: "Need to talk send use a message",
        },
    },
    {
        title: "FAQ",
        pathname: SidebarRoutes.faq,
        icon: FiHelpCircle,
        seo: {
            title: "FAQ",
            description: "The Guardians of our digital realm",
        },
    },
    {
        title: "Our Guarantees",
        pathname: SidebarRoutes.guarantees,
        icon: FiBox,
        seo: {
            title: "Our Guarantees",
            description: "Our Guarantees",
        },
    },
    {
        title: "Terms",
        pathname: SidebarRoutes.terms,
        icon: FiBook,
        seo: {
            title: "Terms",
            description: "Terms of condition",
        },
    },
    {
        title: "Privacy",
        pathname: SidebarRoutes.privacy,
        icon: FiUser,
        seo: {
            title: "Privacy",
            description: "Privacy Policy",
        },
    },

    // {
    //     title: "Company Profile",
    //     pathname: SidebarRoutes.companyProfile,
    //     icon: FiMail,
    //     seo: {
    //         title: "Company Profile",
    //         description: "Company Profile",
    //     },
    // },

];
