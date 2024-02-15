import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

type AccordionType = {
  id: string | number;
  title: string;
  body: string;
};

const QuestionAccordion: React.FC<{ questions: AccordionType[] }> = ({ questions }) => {
  return (
    <Accordion>
      {questions &&
        questions.map((question) => (
          <AccordionItem aria-label={`Accordion ${question.id}`} title={question.title}>
            <div className="w-full px-3">
              <p className="text-foreground-600 text-sm leading-loose">{question.body}</p>
            </div>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default QuestionAccordion;
