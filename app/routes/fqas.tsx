interface Question {
  title: string;
  body: string;
}

interface QuestionsProps {
  data: Question[];
}

const Questions: React.FC<QuestionsProps> = ({ data }) => {
  return (
    <>
      {data.map((question, index) => (
        <div key={index} className="w-full relative my-2">
          <div className="flex justify-between gap-5 items-center border border-secondary-50 px-4 py-2 cursor-pointer">
            <div className="flex gap-3 items-center">
              <div className="w-[20px] h-[20px] flex items-center justify-center border border-primary rounded">
                <img src="./images/icons/Vector.png" alt="" className="" />
              </div>
              <p className="text-sm font-bold">{question.title}</p>
            </div>
            <img src="./images/icons/arrow-up.png" alt="" className="" />
          </div>
          <div className="hidden w-full py-4 border border-t-0 border-secondary-50 px-10">
            <p className="text-foreground-600 text-sm leading-loose">{question.body}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const Fqas = () => {
  const questions = [
    {
      title: "Search product catalogue",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. ",
    },
    {
      title: "Search product catalogue",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      title: "Search product catalogue",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      title: "Search product catalogue",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      title: "Search product catalogue",
      body: "PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full mx-auto px-5 py-10 lg:w-[70%]">
      <div className="flex flex-col gap-3 text-center">
        <b className="text-lg uppercase">fqas</b>
        <p>
          Here are the most frequenty asked questions. We are here to help you, so please feel free
          to <span className="text-yellow font-semibold cursor-pointer">Contact us</span>
        </p>
        <b className="text-left text-yellow">FAQ-Your Artwork and Logo</b>
      </div>
      <Questions data={questions} />

      {/*=== Ordering Promotional Products ===*/}
      <div className="mt-5">
        <b className="text-left text-yellow">Ordering Promotional Products</b>
        <Questions data={questions} />
      </div>
    </div>
  );
};

export default Fqas;
