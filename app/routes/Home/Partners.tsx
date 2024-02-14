import { FiShoppingCart } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";

const Partners = () => {
  return (
    <div className="bg-[#F8F8F8] p-6 mt-5">
      <div className="md:px-20 px-5">
        <div className="mt-[62px] md:px-[100px] w-full flex flex-col justify-center items-center gap-8">
          <h1 className="font-bold text-2xl text-black capitalize text-center">
            We are Promotional Promotional Products Now
          </h1>

          <div className="flex flex-col gap-5">
            <p className="text-[#4D4D4D] text-base text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
              dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
              voluptas qui numquam id? Saepe!
            </p>

            <p className="text-[#4D4D4D] text-base   text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
              dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
              voluptas qui numquam id? Saepe!
            </p>

            <p className="text-[#4D4D4D] text-base text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
              dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
              voluptas qui numquam id? Saepe!
            </p>
          </div>

          <div className="flex flex-row gap-8 w-[50%] justify-center">
            <Button
              as={Link}
              href="#"
              variant="solid"
              startContent={<FiShoppingCart className="text-base" />}
              className="rounded-sm bg-[#0079C0] text-white p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
            >
              Shop Now
            </Button>

            <Button
              as={Link}
              href="#"
              variant="solid"
              startContent={<FiPhoneCall className="text-base" />}
              className="rounded-sm bg-[#FAB102] text-white p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
            >
              Contact Us{" "}
            </Button>
          </div>

          <div className="mt-[62px] flex flex-col justify-center items-center gap-2 w-full">
            <h1 className="font-bold text-2xl text-black capitalize text-center">
              You are fully protected
            </h1>
            <h3 className="font-semibold md:text-lg text-sm text-[#4D4D4D] text-center">
              We are bound by the code of conduct of the Australian Promotional Products Association
            </h3>
            <div className="md:w-[50%] w-full">
              <img src="/images/Group.png" alt="appa" className="object-fit w-full h-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
