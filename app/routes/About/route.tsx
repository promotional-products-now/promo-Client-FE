import Heading from "app/blocks/Heading";
import Container from "app/components/Container";
import { services } from "app/data";
import { Link } from "@remix-run/react";

const route = () => {
  return (
    <Container>
      <div className="my-[40px] px-8">
        <div className="mb-[30px]">
          <Heading title="Company Profile" center />
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
                className="flex flex-row gap-[16px] p-[25px] border-[1px] border-bordercolor border-b-blue rounded-sm justify-between "
              >
                <div className="flex flex-col justify-center gap-[4px]">
                  <div className="text-blue font-semibold text-sm text-start">{item.title}</div>
                  <Link to={`/${item.action}`} className="text-textcolor text-sm ">
                    Click here
                  </Link>
                </div>

                <div className="object-cover w-[100px] h-[100px]">
                  <img
                    src={item.img}
                    alt="about-img"
                    height="100"
                    width="100"
                    className="w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default route;
