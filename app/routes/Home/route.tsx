import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";

const Home = () => {
  return (
    <div className="bg-[#F8F8F8] py-12  md:px-20 px-5">
      <div className="flex flex-col md:flex-row ">
        <div className=" flex flex-row bg-[#84C9F2] justify-center items-center pl-[40px] pt-[20px] flex-4">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-semibold text-xl text-white space-y-2">CLOTHING</h3>
            <h1 className="font-bold text-2xl text-white capitalize ">
              Podium Cool Piping Polo Shirt Short Sleeve
            </h1>
            <h3 className="text-base text-white space-y-2">PRICE RANGE </h3>
            <h3 className="text-base text-white space-y-2">$21.95</h3>
            <div className="flex flex-col gap-3 justify-start">
              <Button
                as={Link}
                href="#"
                className="bg-[#0079C0] w-min p-5 rounded-md  text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
                size="md"
                variant="solid"
              >
                Shop now
              </Button>

              <Button
                as={Link}
                href="#"
                className="bg-white p-5 w-max rounded-md  text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
                size="md"
                variant="solid"
              >
                View Collection
              </Button>
            </div>
          </div>

          <div className="object-cover w-[500px] h-[595px] z-10">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
              height="100"
              width="100"
              alt="man-img"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col align-center">
          <div className="bg-lime-100 flex flex-row justify-center items-center gap-1 h-full p-10 flex-1">
            <div className="max-w-[317px] max-h-[230px] flex flex-col gap-3">
              <h3 className=" text-lg text-[#0079C0]">HEALTH & FITNESS</h3>
              <h1 className="font-bold text-2xl text-gray-800 capitalize space-y-2">
                Champion Fitness Activity Tracker{" "}
              </h1>
              <div className="flex flex-col gap-3 justify-start">
                <Button
                  as={Link}
                  href="#"
                  className="bg-[#0079C0] p-5 w-min rounded-md  text-white text-base hover:opacity-80 transition text-center capitalize"
                  size="md"
                  variant="solid"
                >
                  Shop now
                </Button>
              </div>{" "}
            </div>

            <Link to={"/Checkout"} className="w-[360px] h-[240px]">
              <img
                src="https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=600"
                height="100"
                width="100"
                alt="man-img"
                className="w-full h-full"
              />
            </Link>
          </div>

          <div className="bg-[#0079C0] flex flex-row justify-center items-center gap-5 p-6 flex-1">
            <div className="w-[260px] h-[240px]">
              <img
                src="https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=600"
                height="100"
                width="100"
                alt="man-img"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl space-y-2 text-[#0079C0]">BAGS</h3>
              <h1 className="font-bold text-2xl text-white capitalize space-y-2">
                Harley Laptop Backpack 152 mm(w) x 127 mm(d){" "}
              </h1>
              <div className="flex flex-col gap-3 justify-start ">
                <Button
                  as={Link}
                  href="#"
                  className="bg-white p-5 w-max rounded-md text-black text-base hover:opacity-80 transition text-center capitalize"
                  size="md"
                  variant="solid"
                >
                  Shop Now
                </Button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
