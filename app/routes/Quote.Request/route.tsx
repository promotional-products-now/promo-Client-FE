import { Link } from "@remix-run/react";
import { Button, Divider, Image, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { GoInfo } from "react-icons/go";
import { MdKeyboardDoubleArrowRight, MdOutlineAdd } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Parallax, Navigation, Pagination } from "swiper/modules";
import "../../style.css";
import { useRef, useState } from "react";
import { TbBrand4Chan } from "react-icons/tb";
import ImageUploader, { ReactImageUpload } from "react-image-upload";
import "react-image-upload/dist/index.css";
import { GrDownload } from "react-icons/gr";

const options = [{ key: "option1", label: "Option1" }];

export default function route() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [imageFile, setImageFile] = useState<ReactImageUpload.UploaderFile | null>(null);

  function getImageFileObject(imageFile: ReactImageUpload.UploaderFile) {
    setImageFile(imageFile);
  }

  function runAfterImageDelete() {
    setImageFile(null);
  }

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
          Add a Request Quote
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        <div className="w-full order-2 md:order-1 md:px-6 flex-col items-center">
          <div className="space-y-6 md:space-y-10 border- border-red-600">
            <div className="space-y-4">
              <div className="">
                <div className="flex items-center space-x-2">
                  <GoInfo className=" text-primary text-xl" />
                  <span className="md:text-lg ">Requirements</span>
                </div>
                <Divider />
              </div>
              <div className="w-full space-y-1">
                <span>Product Name</span>
                <Input
                  type="text"
                  variant="bordered"
                  radius="none"
                  araia-label="Product Name"
                  className="w-full"
                  placeholder="50"
                />
              </div>
              <div className="w-full space-y-1">
                <span>How many do you need?</span>
                <Select
                  variant="bordered"
                  radius="none"
                  araia-label="How many do you need?"
                  className=""
                >
                  {options.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full space-y-1">
                <span>Which product colour?</span>
                <Select
                  variant="bordered"
                  radius="none"
                  araia-label="Which product colour?"
                  className=""
                >
                  {options.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="">
                <div className="flex items-center space-x-2">
                  <TbBrand4Chan className=" text-primary text-xl" />
                  <span className="md:text-lg ">Branding</span>
                </div>
                <Divider />
              </div>
              <div className="w-full space-y-1">
                <span>Select a branding method</span>
                <Select
                  variant="bordered"
                  radius="none"
                  araia-label="Select a branding method"
                  className=""
                >
                  {options.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full space-y-1">
                <span>In how many positions?</span>
                <Select
                  variant="bordered"
                  radius="none"
                  araia-label="In how many positions?"
                  className=""
                >
                  {options.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full space-y-1">
                <span>Brand Comment</span>
                <Textarea
                  aria-label="Brand Comment"
                  variant="bordered"
                  placeholder="Write additional message or suggestion"
                  radius="none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="">
                <div className="flex items-center space-x-2">
                  <TbBrand4Chan className=" text-primary text-xl" />
                  <span className="md:text-lg ">Artwork</span>
                </div>
                <Divider />
              </div>
              <div className="space-y-2">
                <div className="bg-lightBlue/20 p-2">
                  <div className="flex max-w-xl bg-lightest dark:bg-dark justify-center border border-dashed border-lightBlue">
                    <ImageUploader
                      style={{
                        height: 200,
                        width: 300,
                        padding: "24px",
                        backgroundColor: "transparent",
                      }}
                      deleteIcon={<></>}
                      uploadIcon={
                        <div className="space-y-2 flex flex-col justify-center items-center">
                          <div className="p-2 bg-light rounded-full">
                            <GrDownload className="text-gray/70 text-5xl" />
                          </div>
                          <span className="text-xs text-primary">Choose a file</span>
                        </div>
                      }
                      onFileAdded={(img: any) => getImageFileObject(img)}
                      onFileRemoved={() => runAfterImageDelete()}
                    />
                  </div>
                </div>
                <span className="flex justify-center w-full text-sm">Max. file size 10MB</span>
              </div>
              <div className="w-full space-y-1">
                <span>Artwork branding instruction</span>
                <Textarea
                  aria-label="Artwork branding instruction"
                  variant="bordered"
                  radius="none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-6">
          <div className="">
            <div className="p-3 bg-primary text-center w-full">
              <span className="md:text-xl text-white font-medium">Current Selected Product</span>
            </div>
            <div className="p-4 space-y-3 border border-lightGray">
              <div className="text-center w-full space-y-1">
                <span className="font-semibold text-lg md:text-2xl">PRODUCT NAME</span>
                <div className="flex items-center w-fit mx-auto gap-4 mb-4">
                  <span className="text-sm">Product Code:</span>
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <FaStar className="text-xs text-orange" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:px-10 m-auto">
                <Image
                  alt=""
                  radius="sm"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
                  removeWrapper
                  className="object-cover w-full max-h-56 transition aspect-square inset-0"
                />
              </div>
              <div className="relative md:px-10">
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  navigation={{
                    nextEl: ".swiper-smallbutton-next",
                    prevEl: ".swiper-smallbutton-prev",
                    enabled: true,
                  }}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
                    320: {
                      slidesPerView: 2.2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 4.6,
                    },
                  }}
                  modules={[Navigation, Pagination, Parallax, A11y]}
                >
                  {[1, 2, 4, 5, 6].map((_, i) => (
                    <SwiperSlide>
                      <div key={i} className="h-20 relative rounded-sm flex items-center">
                        <Image
                          alt=""
                          radius="md"
                          src="https://bit.ly/dan-abramov"
                          removeWrapper
                          fallbackSrc
                          width={60}
                          className="absolute inset-0 h-full object-cover transition-transform transform-gpu aspect-square border border-neutral-300"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="swiper-button-next before:!text-small after:!text-small !left-[96%] !top-2/3"
                  onClick={() => swiperRef.current && swiperRef.current.slideNext()}
                ></div>
                <div
                  className="swiper-button-prev before:!text-small after:!text-small !left-[-4%] !top-2/3"
                  onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
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
            <Button
              radius="sm"
              color="primary"
              startContent={<MdOutlineAdd className="text-xl font-extrabold" />}
              as={Link}
              to="/quote/add"
            >
              Add to Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
