import VerifiedIcon from "app/assets/verifiedIcon";
import { guarantees } from "app/contents/guarantees";

const Guarantees = () => {
  return (
    <div className="flex flex-col gap-10 w-full p-4 lg:p-0 mx-auto md:w-4/5">
      <div className="flex flex-col gap-2 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Guarantees</h2>
        <p className="text-gray text-medium">
          Here's a 5 Rock Solid Guarantees to give you peace of mind and confidence that your
          satisfaction is our number 1 priority at all times.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {guarantees.map((guarantee) => (
          <div
            key={guarantee.id}
            className="flex flex-col gap-3 py-3 px-3 border border-neutral-100 md:px-5"
          >
            <div className="flex flex-col items-center space-y-2 lg:block">
              <div className="lg:hidden">
                <VerifiedIcon />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm md:text-lg font-semibold text-primary">{guarantee.title}</p>
                <p className="text-yellow text-sm md:text-lg font-normal">{guarantee.subTitle}</p>
              </div>
            </div>
            <div className="flex gap-5">
              <p className="text-gray text-center lg:text-left">{guarantee.body}</p>
              <div className="hidden lg:block">
                <VerifiedIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guarantees;
