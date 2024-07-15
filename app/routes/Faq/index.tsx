import type { MetaFunction } from "@remix-run/node";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaQuestion } from "react-icons/fa";
import { questions } from "app/contents/faqs";
import { Link, useLoaderData } from "@remix-run/react";
import { fetchFaqApi } from "app/api/faq.api";

interface FAQ {
  title: string;
  answer: string;
  section: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface GroupedFAQs {
  [key: string]: FAQ[];
}

export const meta: MetaFunction = () => {
  return [{ title: "App" }, { name: "description", content: "Welcome to Remix!" }];
};

function groupFAQsBySection(faqs: FAQ[]): GroupedFAQs {
  if (faqs) {
    return faqs.reduce((acc: GroupedFAQs, faq: FAQ) => {
      if (!acc[faq.section]) {
        acc[faq.section] = [];
      }
      acc[faq.section].push(faq);
      return acc;
    }, {});
  }
  return {};
}

export const loader = async () => {
  const { data } = await fetchFaqApi({});
  console.log({ data: data.payload.data });

  const groupedFAQs = groupFAQsBySection(data?.payload?.data || []);

  return groupedFAQs;
};

const Faq = () => {
  const groupedFAQs = useLoaderData<GroupedFAQs>();

  return (
    <div className="flex flex-col gap-3 w-full mx-auto md:w-4/5 space-y-6">
      <div className="flex flex-col gap-3 text-center pt-16 md:pt-0">
        <h2 className="text-2xl md:text-3xl font-bold">FAQs</h2>
        <div className="px-2 md:px-0">
          <p className="text-default-500 text-sm md:text-base">
            Here are the most frequenty asked questions. We are here to help you, so please feel
            free to{" "}
            <Link
              to="/contact"
              className="text-yellow font-semibold text-yellow-400 cursor-pointer"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4 md:p-0">
        {Object.keys(groupedFAQs).map((section) => (
          <div key={section}>
            {/* <h2>{section}</h2> */}
            <h2 className="text-left text-yellow ml-2">FAQ-{section}</h2>
            {groupedFAQs[section].map((faq) => (
              <Accordion variant="light" showDivider={false}>
                <AccordionItem
                  key={faq._id}
                  aria-label={`Accordion-${faq._id}`}
                  startContent={
                    <div className="border-2 border-primary p-1 rounded">
                      <FaQuestion size={10} className="text-primary font-bold" />
                    </div>
                  }
                  title={faq.title}
                  className="border border-neutral-200 my-2 px-3"
                  classNames={{
                    title: "font-semibold",
                  }}
                >
                  <div className="border-t border-neutral-200 mb-2"></div>
                  <div className="w-full px-3">
                    <p className="text-foreground-600 text-sm leading-loose">{faq.answer}</p>
                  </div>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
