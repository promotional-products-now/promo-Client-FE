import { GuaranteeIcon } from "app/assets/GuaranteeIcon";
import { guarantees } from "app/contents/guarantees";
import { guaranteeSchema } from "./seo";

const Guarantees = () => {
  return (
    <div className="flex flex-col gap-10 w-full p-4 lg:p-0 mx-auto md:w-4/5">
      <div className="flex flex-col gap-2 text-center pt-10 md:pt-0">
        <h2 className="text-2xl md:text-3xl font-bold">Our Guarantees</h2>
        <p className="text-gray text-xl">
          Here is a 5 Rock Solid Guarantees to give you peace of mind and confidence that your
          satisfaction is our <br /> number 1 priority at all times.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {guarantees.map((guarantee) => (
          <div
            key={guarantee.id}
            className="py-6 px-4 flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 border border-neutral-100"
          >
            <div className="space-y-4 text-center md:text-start">
              <h3 className="text-lg font-bold text-primary">{guarantee.title}</h3>
              <p className="text-base font-medium text-yellow">{guarantee.description}</p>
              <p className="text-base text-gray font-medium">{guarantee.body}</p>
            </div>
            <div className="order-first md:order-last">
              <GuaranteeIcon />
            </div>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guaranteeSchema(guarantees)) }}
      />
    </div>
  );
};

export default Guarantees;
