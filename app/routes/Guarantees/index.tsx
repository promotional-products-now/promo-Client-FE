import { GuaranteeIcon } from "app/assets/GuaranteeIcon";
import { guarantees } from "app/contents/guarantees";

const Guarantees = () => {
  return (
    <div
      itemScope
      itemType="https://schema.org/OurGuarantees"
      className="flex flex-col gap-10 w-full p-4 lg:p-0 mx-auto md:w-4/5"
    >
      <div className="flex flex-col gap-2 text-center pt-10 md:pt-0">
        <h2 className="text-2xl md:text-3xl font-bold">Our Guarantees</h2>
        <p className="text-gray text-xl">
          Here is a 5 Rock Solid Guarantees to give you peace of mind and confidence that your
          satisfaction is our <br /> number 1 priority at all times.
        </p>
      </div>

      <div
        itemScope
        itemType="https://schema.org/guarantees"
        className="grid grid-cols-1 md:grid-cols-2 gap-2"
      >
        {guarantees.map((guarantee, index) => (
          <div
            key={guarantee.id}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/guarantee"
            className="py-6 px-4 flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 border border-neutral-100"
          >
            <meta itemProp="position" content={`${index + 1}`} />
            <div itemProp="item" className="space-y-4 text-center md:text-start">
              <h3 itemProp="name" className="text-lg font-bold text-primary">
                {guarantee.title}
              </h3>
              <p itemProp="description" className="text-base font-medium text-yellow">
                {guarantee.description}
              </p>
              <p itemProp="description" className="text-base text-gray font-medium">
                {guarantee.body}
              </p>
            </div>
            <div className="order-first md:order-last">
              <GuaranteeIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guarantees;
