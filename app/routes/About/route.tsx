import { services } from "app/data";
import { Link } from "@remix-run/react";

const route = () => {
  return (
    <div className="my-10 px-8">
      <div className="mb-8 flex justify-center font-extrabold">
        <h2 className="text-xl">Company Profile</h2>
      </div>

      <div className="flex flex-col text-center ">
        <p className="text-black p-2 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
          dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
          voluptas qui numquam id? Saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus, rerum hic. Quasi dicta,
        </p>

        <p className="text-black p-2 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
          dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
          voluptas qui numquam id? Saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus, rerum hic. Quasi dicta, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusamus, rerum hic. Quasi dicta,
        </p>

        <p className="text-black p-2 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
          dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
          voluptas qui numquam id? Saepe!
        </p>
      </div>

      <div className="md:grid md:grid-cols-4 grid grid-cols-1 gap-4 mt-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-row p-8 border-1 border-b-blue-500 border-b-blue rounded-sm justify-between"
          >
            <div className="flex flex-col justify-around">
              <div className="text-blue-500 font-semibold text-sm text-start">{item.title}</div>
              <Link to={`/${item.action}`} className="text-black text-sm">
                Click here
              </Link>
            </div>

            <div>{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default route;
