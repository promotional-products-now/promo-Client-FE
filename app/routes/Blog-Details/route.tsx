import { Image } from "@nextui-org/react";
import { Link, Form } from "@remix-run/react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { BiUser, BiChat, BiSearch } from "react-icons/bi";
import { socialIcons } from "app/contents/blogSocialHandles";
import blogImage from "app/assets/item.png";
import { FaArrowRightLong } from "react-icons/fa6";

const SingleBlog = () => {
  return (
    <div className="w-full flex flex-wrap text-gray leading-loose gap-10 mx-auto px-3 py-10 md:px-20 md:flex-nowrap">
      <div className="w-full flex flex-col gap-5 md:w-2/3">
        <div>
          <Image
            shadow="none"
            radius="none"
            width="100%"
            alt=""
            className="h-[200px] object-cover lg:h-[450px]"
            src={blogImage}
          />
          <div className="flex flex-col gap-4 my-3">
            <h2 className="font-bold text-lg text-black">
              How T Deal Fairly With An Angry Customer
            </h2>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="border p-2">
                  <BiChat size={25} />
                </div>
                <p>0 comments</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="border p-2">
                  <BiUser size={25} />
                </div>
                <div>
                  <p>By Admin</p>
                  <span>23/10/2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative my-4">
            <div className="w-[100px] border border-gray -mb-[1px] z-10 absolute"></div>
            <div className="border border-lightGray"></div>
          </div>
        </div>

        <div className="leading-loose text-justify md:text-left">
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p>
            {" "}
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model text, and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full border border-lightGray shadow-md"></div>
          <div className="flex flex-col justify-between items-center md:flex-row">
            <h2 className="font-bold text-black">Share this blog article</h2>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((socialIcon) => (
                <Link to={socialIcon.href} key={socialIcon.id} className="bg-black p-2">
                  <socialIcon.icon size={25} color="white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full border"></div>
        </div>

        <Form method="post" className="bg-lightGray p-5 flex flex-col gap-8">
          <div className="text-black">
            <h2 className="font-bold">Leave your reply</h2>
            <p className="text-sm">
              Your emaila ddress will not be published. Required fields are marked
            </p>
          </div>
          <Textarea
            variant="underlined"
            labelPlacement="outside"
            placeholder="Comment"
            className="bg-white col-span-12 md:col-span-6 mb-6 md:mb-0"
            //   {...register("message")}
            //   errorMessage={errors?.message?.message}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              type="text"
              variant="underlined"
              label="Your phone"
              className="bg-white"
              //   {...register("subject")}
              //   errorMessage={errors?.subject?.message}
            />
            <Input
              type="text"
              variant="underlined"
              label="Email"
              className="bg-white"
              //   {...register("subject")}
              //   errorMessage={errors?.subject?.message}
            />
            <Input
              type="text"
              variant="underlined"
              label="Website"
              className="bg-white"
              //   {...register("subject")}
              //   errorMessage={errors?.subject?.message}
            />
          </div>
          <div>
            <Button
              color="default"
              radius="none"
              className="bg-black text-white py-3"
              //   onClick={handleSubmit(onSubmit)}
            >
              Leave your comment
            </Button>
          </div>
        </Form>
      </div>

      <div className="w-full md:w-1/3">
        <div className="w-full bg-lightGray p-5 flex flex-col gap-4">
          <div className="flex gap-2 items-center text-sm">
            <FaArrowRightLong />
            Search
          </div>
          <div className="flex">
            <Input
              type="text"
              radius="none"
              variant="underlined"
              label="Search blog here"
              className="border py-0 h-[50px] bg-white"

              //   {...register("subject")}
              //   errorMessage={errors?.subject?.message}
            />
            <div className="bg-black py-2 px-3 flex items-center justify-center">
              <BiSearch size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

//  <Input
//                   type="text"
//                   variant="underlined"
//                   label="Subject"
//                   color="primary"
//                   {...register("subject")}
//                   errorMessage={errors?.subject?.message}
//                 />
//               </div>
//   <Textarea
//     variant="underlined"
//     labelPlacement="outside"
//     placeholder="Your Message"
//     color="primary"
//     className="col-span-12 md:col-span-6 mb-6 md:mb-0"
//     {...register("message")}
//     errorMessage={errors?.message?.message}
//   />
//               <div>
//                 <Button
//                   color="primary"
//                   className="rounded-sm py-3"
//                   onClick={handleSubmit(onSubmit)}
//                 >
//                   Send Message
//                 </Button>
