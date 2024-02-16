import QuestionAccordion from "app/components/QuestionAccordion";
import { questions } from "app/components/QuestionAccordion/data";

const Faq = () => {
  return (
    <div className="flex flex-col gap-3 w-full mx-auto py-10 lg:px-5 lg:w-[80%]">
      <div className="flex flex-col gap-3 text-center">
        <b className="text-lg">FAQs</b>
        <p>
          Here are the most frequenty asked questions. We are here to help you, so please feel free
          to{" "}
          <span className="text-yellow font-semibold text-yellow-400 cursor-pointer">
            Contact us
          </span>
        </p>
        <b className="text-left text-yellow-400">FAQ-Your Artwork and Logo</b>
      </div>
      <QuestionAccordion questions={questions} />

      {/*=== Ordering Promotional Products ===*/}
      <div className="mt-5">
        <b className="text-left text-yellow-400">Ordering Promotional Products</b>
        <QuestionAccordion questions={questions} />
      </div>
    </div>
  );
};

export default Faq;
