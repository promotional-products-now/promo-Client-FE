import { HiOutlineFire } from "react-icons/hi";
import { items } from "app/data";
import ProductCard from "app/components/Card/ProductCard";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";

const Hot = () => {
  return (
    <div className="md:px-20 px-5">
      <div className="mt-[62px]  ">
        <div className="text-[#0079C0] text-center text-[30px] font-semibold mb-[32px]">
          PROMOTIONAL MERCHANDISE AT GUARANTEED LOWEST PRICES
        </div>

        <div className="border-[2px] border-[#FB853C] relative p-8">
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {items.slice(0, 4).map((item, index) => {
              return (
                <Card className="py-4">
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={item.image}
                      width={270}
                    />
                  </CardBody>
                  <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                  </CardFooter>
                </Card>
              );
            })}

            <div className="absolute -top-7 flex flex-row gap-1 px-2 py-3 bg-[#FFFFFF] z-10 items-center">
              <HiOutlineFire className="text-[#FB853C]" size={25} />
              <div className="text-[#FB853C]">WHAT’S HOT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
