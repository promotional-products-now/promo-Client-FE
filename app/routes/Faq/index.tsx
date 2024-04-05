import type { MetaFunction } from "@remix-run/node";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaQuestion } from "react-icons/fa";
import { questions } from "app/contents/faqs";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "App" }, { name: "description", content: "Welcome to Remix!" }];
};

const Faq = () => {
  return (
    <div className="flex flex-col gap-3 w-full mx-auto p-4 lg:p-0 lg:w-4/5">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">FAQs</h2>
        <p className="text-default-500">
          Here are the most frequenty asked questions. We are here to help you, so please feel free
          to{" "}
          <Link to="/contact" className="text-yellow font-semibold text-yellow-400 cursor-pointer">
            Contact us
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <b className="text-left text-yellow">FAQ-Your Artwork and Logo</b>
        <Accordion showDivider={false}>
          {questions &&
            questions.map((question) => (
              <AccordionItem
                key={question.id}
                aria-label={`Accordion ${question.id}`}
                startContent={
                  <div className="border border-primary p-1 rounded">
                    <FaQuestion size={10} className="text-primary" />
                  </div>
                }
                title={question.title}
                className="border border-neutral-200 my-2 px-3"
              >
                <div className="border-t border-neutral-200 mb-2"></div>
                <div className="w-full px-3">
                  <p className="text-foreground-600 text-sm leading-loose">{question.body}</p>
                </div>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
