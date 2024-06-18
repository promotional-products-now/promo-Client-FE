import { NavLink, useLocation } from "react-router-dom";
import { Link } from "@nextui-org/react";
import { SidebarLinkT } from "./sidebarLinks";
import { CustomTooltip } from "./CustomTooltip";

type SidebarProps = {
  isSnapped: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export const SidebarLink = (props: SidebarProps & SidebarLinkT) => {
  const Icon = props.icon;
  const location = useLocation();

  const exactLocation = location.pathname === props.pathname;

  const closeSidebar = () => {
    if (props.sidebarOpen) {
      props.setSidebarOpen(false);
    }
  };

  return (
    <CustomTooltip isSnapped={props.isSnapped} title={props.title}>
      <Link
        as={NavLink}
        to={props.pathname}
        onClick={closeSidebar}
        className={` z-10 group relative flex w-full items-center gap-2 rounded-md py-2 px-4 font-medium text-dark dark:text-white duration-400 ease-in-out transition-width ${
          exactLocation ? "text-white bg-primary" : ""
        }`}
      >
        {Icon && (
          <Icon
            width={4}
            height={4}
            className={`text-dark dark:text-white text-xl  text-center ${
              exactLocation && "text-white bg-primary"
            }`}
          />
        )}
        <div
          className={`font-medium text-base text-dark dark:text-white  ${
            exactLocation ? "text-white bg-primary" : ""
          } ${!props.isSnapped ? "animate-sidebar-text-show" : "animate-sidebar-text-hide"}`}
        >
          {props.title}
        </div>
      </Link>
    </CustomTooltip>
  );
};
