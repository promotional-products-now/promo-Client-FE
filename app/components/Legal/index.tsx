import React, { FC, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./legal.module.css"

interface LegalI {
  content: string;
}

interface HeadingI {
  children?: React.ReactNode;
  node?: any;
}

function stringConverter(str: string): string {
  return str?.replace(/\s+/g, "-").toLowerCase() ?? "";

}

function useScrollIntoView(): {
  headingRef: React.RefObject<HTMLHeadingElement>;
  handleClick: () => void;
} {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { headingRef, handleClick };
}

const H1: FC<HeadingI> = ({ children }) => {
  const { headingRef, handleClick } = useScrollIntoView();
  const id =
    typeof children === "string" ? stringConverter(children.toString()) : undefined;

  return (
    <h1 id={id} className="text-primary text-2xl md:text-3xl py-2" ref={headingRef}>
      <a href={`#${id}`} onClick={handleClick}>
        {children}
      </a>
    </h1>
  );
};

const H2: FC<HeadingI> = ({ children }) => {
  const { headingRef, handleClick } = useScrollIntoView();
  const id = typeof children === "string" ? stringConverter(children.toString()) : undefined;

  return (
    <h2 id={id} className="text-primary text-xl py-2" ref={headingRef}>
      <a href={`#${id}`} onClick={handleClick}>
        {children}
      </a>
    </h2>
  );
};

const H3: FC<HeadingI> = ({ children }) => {
  const { headingRef, handleClick } = useScrollIntoView();
  const id =
    typeof children === "string" ? stringConverter(children.toString()) : undefined;

  return (
    <h3 id={id} className="text-primary text-lg" ref={headingRef}>
      <a href={`#${id}`} onClick={handleClick}>
        {children}
      </a>
    </h3>
  );
};
const LI: FC<HeadingI> = ({ children }) => {
  const id = typeof children === "string" ? stringConverter(children.toString()) : undefined;
  return (
    <li id={id} className="list-disc">{children}</li>
  )
}

const renderers: any = {
  h1: H1,
  h2: H2,
  h3: H3,
  li: LI
};

const Legal: FC<LegalI> = ({ content }) => {
  const headings = content.match(/#{2,}(.+)/g);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3 className="text-primary">Contents</h3>
        <ul>
          {headings &&
            headings.map((heading, index) => {
              const title = heading.replace(/#{2,}\s*/g, "");
              const anchor = stringConverter(title);

              return (
                <li key={index}>
                  <a href={`#${anchor}`} className="hover:underline hover:text-primary">{title}</a>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="py-2">
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Legal;
