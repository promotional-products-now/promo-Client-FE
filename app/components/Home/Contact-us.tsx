import { Button, Image, Link } from "@nextui-org/react";
import { FiShoppingCart } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

function ContactUs() {
  return (
    <section className="lg:px-20 my-20 px-4">
      <div className="mt-16 w-full flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold text-2xl text-black capitalize text-center">
          We are Promotional Promotional Products Now
        </h1>

        <div className="flex flex-col gap-5 text-center">
          {[1, 2, 3].map((_, i) => (
            <p className="text-gray text-base" key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, rerum hic. Quasi
              dicta, quo temporibus consequatur atque, ex ad natus commodi cum eius itaque excepturi
              voluptas qui numquam id? Saepe!
            </p>
          ))}
        </div>

        <div className="flex flex-row gap-8 md:w-1/2 w-full justify-center">
          <Button
            as={Link}
            href="#"
            size="md"
            variant="solid"
            startContent={<FiShoppingCart className="text-base" />}
            className="rounded-md bg-primary text-white-bg p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
          >
            Shop Now
          </Button>

          <Button
            as={Link}
            href="tel:+12334587"
            size="md"
            variant="solid"
            startContent={<FiPhoneCall className="text-base" />}
            className="rounded-md bg-yellow text-white-bg p-6 hover:opacity-80 transition text-center capitalize flex flex-row"
          >
            Contact Us{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
