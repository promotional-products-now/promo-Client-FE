import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Image, ScrollShadow, useDisclosure } from "@nextui-org/react";
import { FiChevronsLeft, FiChevronsRight, FiLink2 } from "react-icons/fi";
import AppLogo from "app/assets/logo.svg";
import { sidebarLinks } from "./sideBarLinks";
import { SidebarLink } from "./SidebarLink";
import { CustomTooltip } from "./CustomTooltip";
import { motion } from "framer-motion";
import ContactDetails from "../Footer/ContactDetails";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [isSnapped, setIsSnapped] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const triggerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleSnapped = useCallback(() => {
    setIsSnapped((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => setSidebarOpen(false), [setSidebarOpen]);

  useEffect(() => {
    const clickOutsideHandler = ({ target }: MouseEvent) => {
      if (
        sidebarOpen &&
        !sidebarRef.current?.contains(target as Node) &&
        !triggerRef.current?.contains(target as Node) &&
        !backdropRef.current?.contains(target as Node)
      ) {
        closeSidebar();
      }
    };

    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (sidebarOpen && keyCode === 27) {
        closeSidebar();
      }
    };

    document.addEventListener("click", clickOutsideHandler);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [sidebarOpen, closeSidebar]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (sidebarOpen && keyCode === 27) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <>
      {sidebarOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
          onClick={() => closeSidebar()}
        ></div>
      )}

      <aside
        ref={sidebarRef}
        className={`fixed w-4/5 sm:w-[65%] left-0 top-0 z-[1000] flex flex-col items-start justify-start overflow-y-clip bg-[#f5f6fa] transition-transform duration-300 ease-linear dark:bg-dark lg:static lg:translate-x-0 h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }  ${isSnapped ? "animate-sidebar-width-snap " : "animate-sidebar-width-inc"}`}
      >
        <div className="w-full flex justify-start">
          <div className={`flex w-full items-center justify-between px-6 py-4 `}>
            <NavLink
              to="/"
              className={`${
                !isSnapped ? "animate-sidebar-text-show" : "animate-sidebar-text-hide"
              }`}
            >
              <Image src={AppLogo} alt="Logo" />
            </NavLink>
          </div>
        </div>

        <div className="w-full flex flex-col overflow-y-auto duration-300 ease-linear">
          <ScrollShadow hideScrollBar={true} as={"nav"} className={`p-4`}>
            <div className="overflow-x-hidden w-full">
              <ul className={`flex flex-col space-y-1  ${isSnapped ? "space-y-2" : ""}`}>
                {sidebarLinks.map((link) => (
                  <li
                    key={link.pathname}
                    onMouseEnter={() => setFocused(link.title)}
                    className="group relative"
                  >
                    <SidebarLink
                      pathname={link.pathname}
                      title={link.title}
                      icon={link.icon}
                      isSnapped={isSnapped}
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={closeSidebar}
                    />
                    {focused === link.title ? (
                      <motion.div
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="absolute bottom-0 left-0 right-0 w-full h-full group-hover:text-dark bg-light/90 px-5 pr-8 m-0 z-0 rounded-lg space-x-0"
                        layoutId="highlight"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <Divider className="my-3" />

            <ContactDetails />
          </ScrollShadow>
        </div>
      </aside>
    </>
  );
};
