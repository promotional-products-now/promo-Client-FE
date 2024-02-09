import { FaQuestion, FaAngleDown } from "react-icons/fa";

const Fqas = () => {
  const questions = [
    {
      title: "What are PMS colour codes and why do I need to provide these to you ?",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      title: "What can you see through a PMS color code Chart ?",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      title: "What do you mean when you say decoration type ?",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      title: "Can i just send you my logo, which i copied from my website ?",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      title:
        "If you need my artwork in EPS file, can I just rename my logo filename from xxx.JPG to xxx.ESP ?",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full mx-auto px-5 py-10 lg:w-[70%]">
      <div className="flex flex-col gap-3 text-center">
        <b className="text-lg uppercase">fqas</b>
        <p>
          Here are the most frequently asked questions. We are here to help you, so please feel free
          to <span className="text-yellow font-semibold cursor-pointer">contact us</span>
        </p>
        <b className="text-left text-yellow">FAQ-Your Artwork and Logo</b>
      </div>
      {questions &&
        questions.map((question, index) => (
          <div key={index} className="w-full relative my-2">
            <div className="flex justify-between gap-5 items-center border border-secondary-100 px-4 py-2 cursor-pointer">
              <div className="flex gap-3 items-center">
                <FaQuestion size={15} color="blue" />
                <b className="text-sm">{question.title}</b>
              </div>
              <FaAngleDown size={15} />
            </div>
            <div className="hidden w-full py-4 border border-t-0 border-secondary-100 px-10">
              <p className="text-foreground-500">{question.body}</p>
            </div>
          </div>
        ))}

      {/* Ordering Promotional Products */}
      <div className="mt-5">
        <b className="text-left text-yellow">Ordering Promotional Products</b>
        {questions &&
          questions.map((question, index) => (
            <div key={index} className="w-full relative my-2">
              <div className="flex justify-between gap-5 items-center border border-secondary-100 px-4 py-2 cursor-pointer">
                <div className="flex gap-3 items-center">
                  <FaQuestion size={15} color="blue" />
                  <b className="text-sm">{question.title}</b>
                </div>
                <FaAngleDown size={15} />
              </div>
              <div className="hidden w-full py-4 border border-t-0 border-secondary-100 px-10">
                <p className="text-foreground-500">{question.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Fqas;
