import { Link } from "@remix-run/react";
import { ServicesT, services } from "app/contents/aboutServices";

const AboutPage = () => {
  return (
    <div className="my-10 mx-8 px-8 space-y-6">
      <div className="flex justify-center">
        <h2 className="text-xl font-extrabold">Company Profile</h2>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col text-center ">
          {[1, 2, 3].map((_, index) => {
            return (
              <p className="text-black p-2 text-base" key={index}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
                dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque
                excepturi voluptas qui numquam id? Saepe! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus, rerum hic. Quasi dicta,
              </p>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item: ServicesT) => {
            const IconTag = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-row p-8 border-1 border-b-blue-500 border-b-blue rounded-sm justify-between"
              >
                <div className="flex flex-col justify-around">
                  <div className="text-blue-500 font-semibold text-sm text-start">{item.title}</div>
                  <Link to={`/${item.action}`} className="text-black text-sm">
                    Click here
                  </Link>
                </div>
                <div>
                  <IconTag className="text-orange text-7xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
