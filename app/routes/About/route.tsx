import Container from "app/components/Container";
import { services } from "app/data";
import { Link } from "@remix-run/react";

const route = () => {
  return (
    <Container>
      <div className="my-[40px] px-8">
        <div className="mb-[30px] flex justify-center font-extrabold">
          <h2 className="text-xl">Company Profile</h2>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-textcolor text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
            dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
            voluptas qui numquam id? Saepe!
          </p>

          <p className="text-textcolor text-[16px]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
            dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
            voluptas qui numquam id? Saepe!
          </p>

          <p className="text-textcolor text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
            dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
            voluptas qui numquam id? Saepe!
          </p>
        </div>

        <div className="md:grid md:grid-cols-4 grid grid-cols-1 gap-[32px] mt-[40px]">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-[16px] p-[25px] border-[1px] border-b-blue-500 border-b-blue rounded-sm justify-between "
              >
                <div className="flex flex-col justify-around ">
                  <div className="text-blue-500 font-semibold text-sm text-start">{item.title}</div>
                  <Link to={`/${item.action}`} className="text-textcolor text-sm ">
                    Click here
                  </Link>
                </div>

                <div className=" ">{item.icon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default route;
