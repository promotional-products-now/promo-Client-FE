import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { ServicesT, services } from "app/contents/aboutServices";
import { organizationSchema, servicesSchema } from "./seo";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | Promotional Products Now" },
    {
      name: "description",
      content:
        "Promotional Products Now is a progressive promotional products company founded on the belief that customer satisfaction is of paramount and continuing importance",
    },
  ];
};

export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400",
  };
}


const AboutPage = () => {
  return (
    <div className="flex flex-col gap-3 w-full mx-auto py-4 px-0 lg:p-0 ">
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-bold">Company Profile</h2>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col text-center p-2 space-y-3">
          <p className="">
            <a href="/" className="text-primary">
              Promotional Products Now
            </a>{" "}
            is a progressive promotional products company founded on the belief that customer
            satisfaction is of paramount and continuing importance.
          </p>
          <p>
            Serving all organisations around Australia for over 20 years, our success to date is
            directly contributed to the feedback received from our customers. Together with our
            proven cost-saving strategies, which have driven down prices, you can be assured our
            service, price, and product quality you receive from us will not be matched by our
            competitors.
          </p>
          <p>
            We are bound by the Code of Conduct of the Australasian Promotional Products Association
            and together with our 5 Rock Solid Guarantees, you are well and truly protected in the
            unlikely event something goes wrong with your order.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item: ServicesT) => {
            const IconTag = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-row p-6 border-b-3 border border-neutral-200 border-b-primary border-b-blue rounded-sm justify-between"
              >
                <div className="flex flex-col justify-around">
                  <div className="text-primary font-bold text-base text-start">{item.title}</div>
                  <Link to={`/${item.action}`} className="text-black text-sm">
                    Click here
                  </Link>
                </div>
                <div>
                  <IconTag className="text-yellow text-7xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </div>
  );
};

export default AboutPage;
