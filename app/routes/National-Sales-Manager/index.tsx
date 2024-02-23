import { BiUser } from "react-icons/bi";
import { Image } from "@nextui-org/react";
import WorkInProgressImg from "app/assets/Work-in-progress.png";

const Message = () => {
  return (
    <div className="w-full flex flex-wrap-reverse gap-y-6 px-2 md:py-5">
      <div className="w-full flex flex-col gap-2 text-sm text-gray leading-loose md:w-full lg:w-1/2">
        <div className="relative mb-3">
          <h2 className="font-bold text-lg">Message from National Sales Manager</h2>
          <div className="absolute h-[3px] w-[40px] mt-1 bg-yellow"></div>
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable.
        </p>

        <p>
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
          tend to repeat predefined chunks as necessary, making this the first true generator on the
          Internet.
        </p>
        <p>
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>

        <div className="border border-neutral-300 my-2"></div>

        <div className="flex gap-2 items-center capitalize">
          <BiUser size={30} className="text-yellow" />
          <div>
            <p className="text-primary">Lynda Purchase</p>
            <p>National Sales Manager</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2">
        <div className="w-full">
          <Image
            shadow="none"
            radius="none"
            width="100%"
            alt="image"
            className="object-cover w-full h-[400px]"
            src={WorkInProgressImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
