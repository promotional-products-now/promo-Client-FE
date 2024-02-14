import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

type AccordionType = {
  title: string;
  body: string;
};

const QuestionAccordion: React.FC<{ questions: AccordionType[] }> = ({ questions }) => {
  return (
    <Accordion>
      {questions &&
        questions.map((question, index) => (
          <AccordionItem aria-label={`Accordion ${index}`} title={question.title}>
            <div className="w-full px-3">
              <p className="text-foreground-600 text-sm leading-loose">{question.body}</p>
            </div>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default QuestionAccordion;
