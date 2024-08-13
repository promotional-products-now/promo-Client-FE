import { Button, Image } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Parallax, Navigation, Pagination } from "swiper/modules";
import "../../style.css";
import { useRef } from "react";

export default function route() {
  const swiperRef = useRef<SwiperInstance | null>(null);

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
      </div>{" "}
      <div className="text-center">
        <h2 itemProp="name" className="text-2xl md:text-3xl font-bold">
          Product Added to My Request Quote
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        <div className="space-y-4 p-4 border border-lightGray">
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
        <div className="flex flex-col space-y-3 md:w-3/6">
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
            variant="bordered"
            radius="sm"
            className="border border-primary text-primary"
            color="default"
            as={Link}
            to="/quotes"
          >
            View My Quote Request
          </Button>

          <Button radius="sm" color="primary">
            Finalise Quote Request
          </Button>
        </div>
      </div>
    </div>
  );
}
