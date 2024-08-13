import { Button, Image } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function route() {
  return (
    <div className="space-y-6 md:space-y-10">
      <div className="flex flex-row border-b border-white-border md:px-20 px-5 py-3 md:pb-3 md:py-0">
        <div className="flex flex-row items-center">
          <Link to="/">
            <div className="text-sm md:text-base text-gray">Home</div>
          </Link>
          <MdKeyboardDoubleArrowRight size={18} className="text-gray" />
          <span className="text-sm md:text-base text-primary">Request Quote</span>
        </div>
      </div>
      <div className="text-center">
        <h2 itemProp="name" className="text-2xl md:text-3xl font-bold">
          My Quote Request
        </h2>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 p-4">
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="border border-b-0 md:border-b md:border-r-0 space-y-3 p-3">
            <Image
              alt=""
              radius="none"
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
              removeWrapper
              className="object-cover w-full max-h-44 transition"
            />
            <div className="flex flex-col items-center w-full">
              <span className="text-primary font-semibold">Mix N Match Type-C</span>
              <span>Product Code: PPN1123</span>
            </div>
          </div>
          <div className="grid grid-cols-2 border w-full">
            <div className="border-r">
              <div className="p-3 flex items-center justify-center border-b border-gray bg-lightBlue">
                <span className="text-primary font-semibold">Requirements</span>
              </div>
              <div className="p-3 border-b">
                <span className="text-sm">Quantity: 50</span>
              </div>
              <div className="p-3 border-b">
                <span className="text-sm">Color: red</span>
              </div>
              <div className="p-3">
                <span className="text-sm">USB Memory: 1GB</span>
              </div>
            </div>
            <div className="">
              <div className="p-3 flex items-center justify-center border-b bg-lightBlue">
                <span className="text-primary font-semibold">Branding</span>
              </div>
              <div className="p-3 border-b">
                <span className="text-sm">Method: Printing</span>
              </div>
              <div className="p-3 border-b">
                <span className="text-sm">Positions: 1 position</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 w-full md:w-1/5">
          <Button
            variant="bordered"
            radius="sm"
            className="border border-primary text-primary"
            color="default"
            as={Link}
            to="/"
          >
            Continue Shopping
          </Button>
          <Button radius="sm" color="primary">
            Finalise Quote Request
          </Button>
        </div>
      </div>
    </div>
  );
}
