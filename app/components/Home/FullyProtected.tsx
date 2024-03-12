import { Image } from "@nextui-org/react";

function FullyProtected() {
  return (
    <section className="bg-white-bg p-10 mb-20">
      <div className="mt-4 flex flex-col justify-center items-center gap-4 w-full">
        <div className="py-2">
          <h2 className="font-bold text-2xl text-black capitalize text-center">
            You are fully protected
          </h2>
          <p className=" md:text-lg text-sm text-gray text-center">
            We are bound by the code of conduct of the Australian Promotional Products Association
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          <Image
            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            alt="appa"
            removeWrapper
            className="object-fit w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}

export default FullyProtected;
