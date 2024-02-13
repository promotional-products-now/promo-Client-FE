import Button from "app/blocks/Button";
import Heading from "app/blocks/Heading";
import React from "react";

const Home = () => {
  return (
    <div className="bg-backgroundgray p-10 ">
      <div className="flex flex-col md:flex-row">
        <div className=" flex flex-row bg-lightblue justify-center items-center pl-[40px] pt-[20px] flex-4">
          <div className="flex flex-col gap-3 ">
            <Heading
              subtitle="CLOTHING"
              title="Podium Cool Piping Polo Shirt Short Sleeve"
              secondarysubtitle="PRICE RANGE:"
              price="$21.95"
              home
            />

            <div className="flex flex-col gap-3 justify-start w-[50%]">
<div className="bg-blue px-3 py-3 text-white rounded-lg hover:opacity-80 transition w-full text-center capitalize text-md font-semibold  ">Shop Now</div>
              <Button label="View collection" outline />
            </div>
          </div>

          <div className="object-cover w-[500px] h-[595px] z-10">
            <img
              src="/images/man.png"
              height="100"
              width="100"
              alt="man-img"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col align-center">
          <div className="bg-white flex flex-row justify-center items-center gap-1 h-full p-10 flex-1">
            <div className="max-w-[317px] max-h-[230px]">
              <Heading title="Champion Fitness Activity Tracker" subtitle="HEALTH & FITNESS" />
              <div className="flex flex-col gap-3 justify-start w-[50%]">
                <Button label="Shop now" />
              </div>{" "}
            </div>

            <div className="w-[360px] h-[240px]">
              <img
                src="/images/smartwatch.png"
                height="100"
                width="100"
                alt="man-img"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="bg-blue flex flex-row justify-center items-center gap-4 p-6 flex-1">
            <div className="w-[260px] h-[240px]">
              <img
                src="/images/bag.png"
                height="100"
                width="100"
                alt="man-img"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <Heading title="Harley Laptop Backpack 152 mm(w) x 127 mm(d)" subtitle="BAGS" home />
              <div className="flex flex-col gap-3 justify-start w-[50%]">
                <Button label="Shop now" outline />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
