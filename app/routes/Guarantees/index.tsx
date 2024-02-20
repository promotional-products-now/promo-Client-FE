import { BiCheckShield } from "react-icons/bi";
import { guarantees } from "app/contents/guarantees";

const Guarantees = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto py-10 text-sm leading-6">
      <div className="flex flex-col gap-1 text-center ">
        <h1 className="text-xl font-extrabold">Our Guarantees</h1>
        <p className="text-foreground-500">
          Here is a 5 Rock Solid Guarantees to give you peace of mind and confidence that your
          satisfaction is our number 1 priority at all times.
        </p>
      </div>

      <div className="grid grid-cols-1 gap- md:grid-cols-2">
        {guarantees.map((guarantee) => (
          <div
            key={guarantee.id}
            className="flex flex-col gap-3 py-3 px-3 border border-neutral-100 md:px-5"
          >
            <div>
              <p className="text-lg text-primary">{guarantee.title}</p>
              <p className="text-yellow">{guarantee.subTitle}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-gray leading-6">{guarantee.body}</p>
              <div>
                <BiCheckShield size={50} className="hidden text-primary md:block" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guarantees;
