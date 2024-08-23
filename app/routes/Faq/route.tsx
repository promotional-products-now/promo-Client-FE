import type { MetaFunction } from "@remix-run/node";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaQuestion } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import { fetchFaqApi } from "app/api/faq.api";
import { faqSchema } from "./seo";

interface FAQ {
  title: string;
  answer: string;
  section: { _id: string; title: string };
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface GroupedFAQs {
  [key: string]: FAQ[];
}

export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400",
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ | Promotional Products Now" },
    {
      name: "description",
      content: "Find answers to common questions about Promotional Products Now.",
    },
    { property: "og:title", content: "FAQ | Promotional Products Now" },
    {
      property: "og:description",
      content: "Find answers to common questions about Promotional Products Now.",
    },
    // { property: "og:image", content: "URL_TO_IMAGE" },
  ];
};

function groupFAQsBySection(faqs: FAQ[]): GroupedFAQs {
  return faqs.reduce((acc: GroupedFAQs, faq: FAQ) => {
    const sectionTitle = faq?.section?.title ?? "Uncategorized";
    if (!acc[sectionTitle]) {
      acc[sectionTitle] = [];
    }
    acc[sectionTitle].push(faq);
    return acc;
  }, {});
}

export const loader = async () => {
  try {
    const { data } = await fetchFaqApi();
    const groupedFAQs = groupFAQsBySection(data?.payload?.data || []);
    return groupedFAQs;
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
    return {};
  }
};

const Faq = () => {
  const groupedFAQs = useLoaderData<GroupedFAQs>();

  return (
    <div
      itemScope
      itemType="https://schema.org/FAQPage"
      className="flex flex-col gap-3 w-full mx-auto space-y-6"
    >
      <div className="flex flex-col gap-3 text-center pt-16 md:pt-0">
        <h2 itemProp="headline" className="text-2xl md:text-3xl font-bold">
          FAQs
        </h2>
        <p className="text-default-500 text-sm md:text-base">
          Here are the most frequently asked questions. We are here to help you, so please feel free
          to{" "}
          <Link
            itemProp="url"
            to="/contact"
            prefetch="intent"
            className="text-yellow font-semibold text-yellow-400 cursor-pointer"
          >
            Contact us
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col gap-2 py-4 md:p-0">
        {Object.keys(groupedFAQs).map((section) => (
          <div key={section}>
            <h3 className="text-left text-yellow ml-2">FAQ - {section}</h3>
            {groupedFAQs[section].map((faq) => (
              <Accordion variant="light" key={faq._id} showDivider={false}>
                <AccordionItem
                  key={faq._id}
                  itemProp="title"
                  aria-label={`Accordion-${faq._id}`}
                  startContent={
                    <div className="border-2 border-primary p-1 rounded">
                      <FaQuestion size={10} className="text-primary font-bold" />
                    </div>
                  }
                  title={faq.title}
                  className="border border-neutral-200 my-2 px-3"
                  classNames={{ title: "font-semibold" }}
                >
                  <div className="border-t border-neutral-200 mb-2"></div>
                  <div className="w-full px-3">
                    <p
                      itemProp="acceptedAnswer"
                      className="text-foreground-600 text-sm leading-loose"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(groupedFAQs)) }}
      />
    </div>
  );
};

export default Faq;
