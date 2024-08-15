import { Button, Image, Link } from "@nextui-org/react";
import { FiShoppingCart } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

function ContactUs() {
  return (
    <section className="lg:px-20 px-4 w-max-ppn">
      <div className="m-16 w-full flex flex-col justify-center items-center gap-8 -border border-red-500 container mx-auto md:px-4">
        <h1 className="font-bold text-2xl text-black capitalize text-center">
          We are Promotional Promotional Products Now
        </h1>

        <div className="flex flex-col gap-5 text-justify md:text-center w-full md:w-10/12">
          <p className="">
            <a href="/" className="text-primary">
              Promotional Products Now
            </a>{" "}
            is a progressive promotional products company founded on the belief that customer
            satisfaction is of paramount and continuing importance.
          </p>
          <p className="">
            Serving all organisations around Australia for over 20 years, our success to date is
            directly contributed to the feedback received from our customers. Together with our
            proven cost-saving strategies, which have driven down prices, you can be assured our
            service, price, and product quality you receive from us will not be matched by our
            competitors.
          </p>
          <p className="">
            We are bound by the Code of Conduct of the Australasian Promotional Products Association
            and together with our 5 Rock Solid Guarantees, you are well and truly protected in the
            unlikely event something goes wrong with your order.
          </p>
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
