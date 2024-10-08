import { BiUser } from "react-icons/bi";
import { Image } from "@nextui-org/react";
import WorkInProgressImg from "app/assets/Work-in-progress.png";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "NSM | Promotional Products Now" },
    {
      name: "description",
      content: "Message from the National Sales Manager at Promotional Products Now.",
    },
    { property: "og:title", content: "NSM | Promotional Products Now" },
    {
      property: "og:description",
      content: "Message from the National Sales Manager at Promotional Products Now.",
    },
    { property: "og:image", content: WorkInProgressImg },
  ];
};

const Message = () => {
  return (
    <div
      className="w-full flex flex-wrap-reverse gap-y-6 px-4 md:py-5 mx-auto"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="w-full flex flex-col gap-2 text-sm text-gray leading-loose md:w-full lg:w-1/2">
        <div className="relative mb-3">
          <h2 className="font-bold text-xl" itemProp="jobTitle">
            Message from National Sales Manager
          </h2>
          <div className="absolute h-1 w-10 mt-1 bg-yellow"></div>
        </div>
        <p itemProp="description">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable.
        </p>

        <p itemProp="description">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
          tend to repeat predefined chunks as necessary, making this the first true generator on the
          Internet.
        </p>
        <p itemProp="description">
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
          structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>

        <div className="border border-neutral-300 my-2"></div>

        <div
          className="flex gap-2 items-center capitalize"
          itemScope
          itemType="https://schema.org/Person"
        >
          <BiUser size={30} className="text-yellow" />
          <div>
            <p className="text-primary" itemProp="name">
              Lynda Purchase
            </p>
            <p itemProp="jobTitle">National Sales Manager</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2">
        <div className="w-full">
          <Image
            shadow="none"
            radius="none"
            width="100%"
            alt="Work in progress"
            className="object-cover w-full h-[400px]"
            src={WorkInProgressImg}
            itemProp="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
