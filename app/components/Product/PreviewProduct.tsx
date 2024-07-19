import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import { useAtomValue } from "jotai";
import { FaStar } from "react-icons/fa6";
import { productPreviewAtom } from "app/atoms/product.atom";
import { BsCart3 } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Parallax, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper";
import "../../style.css";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

export function PreviewProduct({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const product = useAtomValue(productPreviewAtom);

  return (
    <Modal
      isOpen={isOpen}
      placement={isMobile ? "bottom-center" : "auto"}
      backdrop="transparent"
      onOpenChange={onOpenChange}
      size="3xl"
    >
      <ModalContent className=" rounded-none shadow-xl">
        <>
          <ModalHeader className="justify-center">
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium">
                {product?.title}
              </span>
              <div className="flex items-center space-x-4">
                <span className="font-normal">Product Code: {product?.productCode}</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <FaStar key={i} className=" text-orange" />
                  ))}
                </div>
              </div>
            </div>
          </ModalHeader>
          <ModalBody className="p-1 md:p4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <Image
                  alt=""
                  radius="none"
                  src={product?.image}
                  removeWrapper
                  className="object-cover h-full w-full transition aspect-square inset-0"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-lg md:text-xl font-medium">Description</span>
                  <p className=" font-normal text-zinc-700">{product?.description}</p>
                </div>
                <div className="grid grid-cols-2">
                  <Button
                    as={Link}
                    href={`/products/${product?.category}/${product?.id}`}
                    radius="none"
                    className="bg-primary text-white"
                    startContent={<BsCart3 />}
                  >
                    View Product
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="justify-center border- border-red-600 p-2 md:p-4">
            <div className="p-1 md:p-4  relative w-11/12 md:w-4/5">
              <Swiper
                // navigation={true}
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
                {product?.images &&
                  product?.images?.length > 0 &&
                  product?.images.map((image, i) => (
                    <SwiperSlide>
                      <div key={i} className="h-20 relative rounded-sm flex items-center">
                        <Image
                          alt=""
                          radius="md"
                          src={image}
                          removeWrapper
                          width={60}
                          // className="object-cover transition aspect-square inset-0"
                          className="absolute inset-0 h-full object-cover transition-transform transform-gpu aspect-square border-2 border-slate-500"
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
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
