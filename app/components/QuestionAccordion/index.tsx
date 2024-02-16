import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaQuestion } from "react-icons/fa";

type AccordionType = {
  id: string | number;
  title: string;
  body: string;
};

const QuestionAccordion: React.FC<{ questions: AccordionType[] }> = ({ questions }) => {
  return (
    <Accordion showDivider={false}>
      {questions &&
        questions.map((question) => (
          <AccordionItem
            aria-label={`Accordion ${question.id}`}
            startContent={
              <div className="border border-blue-300 p-1 rounded">
                <FaQuestion color="blue" size={10} />
              </div>
            }
            title={question.title}
            className="border my-2 px-3"
          >
            <div className="border-t mb-2"></div>
            <div className="w-full px-3">
              <p className="text-foreground-600 text-sm leading-loose">{question.body}</p>
            </div>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default QuestionAccordion;
