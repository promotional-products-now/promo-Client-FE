import { Button, Input, Textarea } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { LocationDetails } from "app/contents/contactLoactions";

const ContactUS = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-5">
      <b className="text-xl font-extrabold capitalize">contact us</b>
      <div className="grid grid-cols-1 gap-5 py-10 [&_p]:text-sm [&_p]:text-gray [&_span]:text-yellow lg:grid-cols-3">
        <div className="flex flex-col gap-5">
          <div className="mb-2">
            <b className="capitalize">give out team a call</b>
            <p>We are happy to hear how we can help you out.</p>
          </div>
          {LocationDetails.map((data) => (
            <div key={data.id} className="flex gap-3">
              <Link
                to={data.href}
                className={
                  data.href == "" ? "flex gap-3 cursor-default" : "flex gap-3 hover:[&_p]:underline"
                }
              >
                <div>
                  <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center border border-yellow">
                    <data.icon color="blue" />
                  </div>
                </div>
                <div>
                  <span className="text-sm uppercase">{data.title}</span>
                  <p>{data.body}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <div className="flex flex-col justify-between lg:flex-row">
            <div>
              <b className="capitalize">How can we help you?</b>
              <p>Fill your information below to contact us</p>
            </div>
            <span>Promotional Merchandise at Guaranteed Lowest Prices</span>
          </div>
          <form>
            <div className="w-full flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-x-4 gap-y-9 md:grid-cols-2">
                <Input type="text" variant="underlined" label="Name" color="primary" />
                <Input type="email" variant="underlined" label="Email" color="primary" />
                <Input type="text" variant="underlined" label="Phone" color="primary" />
                <Input type="text" variant="underlined" label="Subject" color="primary" />
              </div>
              <Textarea
                variant="underlined"
                labelPlacement="outside"
                placeholder="Your Message"
                color="primary"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              />
              <div>
                <Button color="primary" className="rounded-sm py-3">
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
