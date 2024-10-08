import { Link } from "@nextui-org/react";
import { FooterT } from "./links";

export const FooterLinkComp = ({ title, links }: { title: string; links: Array<FooterT> }) => {
  return (
    <div>
      <h2 className="mb-2 text-base md:text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {links.map((link) => {
          return (
            <li className="mb-1" key={link.name}>
              <Link href={link.pathname} className="hover:underline text-gray text-xs font-normal">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
