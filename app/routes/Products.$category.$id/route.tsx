import { Form, Link, useLoaderData, useParams } from "@remix-run/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  Divider,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Tab,
  Tabs,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { BsCart3, BsCheck2Square, BsInfoCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";
import { MdKeyboardDoubleArrowRight, MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useAtom } from "jotai";
import { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Parallax, Navigation, Pagination } from "swiper/modules";
import { SendPriceModal } from "app/components/Product/SendPriceModal";
import "../../style.css";
import { ProductAboutCard } from "app/components/Product/ProductInfoCard";
import { productAtom } from "app/atoms/product.atom";
import { getProductInfo } from "app/api/products.api";
import { removeSnakeCase } from "app/utils/fn";

const fakeFilter = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Yellow", value: "yellow" },
];

const cardData = ["ABOUT", "DETAILS", "ADDITIONAL INFO"];

export const loader = async ({ params }: { params: { id: string } }) => {
  const data = await getProductInfo(params.id);
  if (!data) {
    return null;
  }
  return data;
};

export default function ProductDetailsRoute() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const swiperRef = useRef<SwiperInstance | null>(null);
  const productF = useLoaderData<typeof loader>();
  const { category } = useParams();
  const [currentProd, setCurrentProd] = useAtom(productAtom);

  return (
    <>
      <div className="space-y-6 md:space-y-10">
        <div className="flex flex-row border-b border-white-border md:px-20 px-5 py-3 md:pb-3 md:py-0">
          <div className="flex flex-row items-center">
            <Link to="/">
              <div className="text-sm md:text-base text-gray">Home</div>
            </Link>
            <MdKeyboardDoubleArrowRight size={18} className="text-gray" />
            <span className="text-sm md:text-base text-gray">
              {removeSnakeCase(category || "")}
            </span>
            <MdKeyboardDoubleArrowRight size={18} className="text-gray" />
            <span className="text-sm md:text-base text-primary">{productF?.overview?.name}</span>
          </div>
        </div>
        <div className="w-4/5 mx-auto space-y-6 md:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:gap-10">
            <div className=" w-full order-2 md:order-1 md:px-6 flex-col items-center">
              <div className="w-full text-center">
                <div className="text-xl md:text-2xl font-semibold text-center">
                  {productF?.overview?.name}
                </div>
                <div className="flex items-center w-fit mx-auto gap-4 mb-4">
                  <div className="text-lg ">Product Code: {productF?.overview?.code}</div>
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div className="flex items-center ">
                      <FaStar key={i} className="text-xs text-orange" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
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
                  {productF?.product?.images.map((img: string) => (
                    <SwiperSlide>
                      <div key={img} className="h-20 relative rounded-sm flex items-center">
                        <Image
                          alt=""
                          radius="md"
                          src={img}
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
            <div className="order-1">
              <Image
                alt=""
                radius="sm"
                src={productF?.overview?.heroImage}
                removeWrapper
                className="object-cover w-full h-96 transition aspect-square inset-0"
              />
            </div>
          </div>

          <Form>
            <div className="bg-zinc-50 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 p-4 md:p-8 border border-zinc-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between w-full flex-wrap space-y-2 md:space-y-0">
                  <span className="text-lg md:text-xl font-bold text-primary">
                    1.Select Product Details
                  </span>
                  <Checkbox
                    className="py-0 my-0"
                    defaultSelected
                    color="default"
                    icon={<BsCheck2Square className="text-green-600" />}
                  >
                    In stock
                  </Checkbox>
                </div>
                <Divider />
                <div className="w-full">
                  <Input
                    type="text"
                    variant="bordered"
                    radius="none"
                    label="Quantity"
                    labelPlacement="outside-left"
                    className="w-full"
                    placeholder="50"
                    classNames={{
                      mainWrapper: "w-full",
                    }}
                  />
                </div>
                <div className="">
                  <Select
                    variant="bordered"
                    radius="none"
                    label="Colour"
                    labelPlacement="outside-left"
                    placeholder="Red"
                  >
                    {fakeFilter.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div className="">
                  <Select
                    variant="bordered"
                    radius="none"
                    label="Model"
                    labelPlacement="outside-left"
                    placeholder="Select"
                  >
                    {fakeFilter.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <Divider />

                <Accordion defaultExpandedKeys={["1", "2", "3"]} selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="options"
                    title={
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">Options</span>
                        <Tooltip>
                          <BsInfoCircle className="text-green-600" />
                        </Tooltip>
                      </div>
                    }
                  >
                    <RadioGroup className="pb-2">
                      <Radio size="sm" value="dataLessThan">
                        <span className="text-sm">Data File Upload &lt; 150GB (Free)</span>
                      </Radio>
                      <Radio size="sm" value="dataMoreThan">
                        <span className="text-sm">Data File Upload 150GB-4GB ($0.5 ea)</span>
                      </Radio>
                    </RadioGroup>
                  </AccordionItem>

                  <AccordionItem
                    key="2"
                    aria-label="accessories"
                    title={
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">Accessories</span>
                        <Tooltip>
                          <BsInfoCircle className="text-green-600" />
                        </Tooltip>
                      </div>
                    }
                  >
                    <RadioGroup className="pb-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Radio size="sm" value="Lanyard">
                          <span className="text-sm">Lanyard ($0.20 ea)</span>
                        </Radio>
                        <Radio size="sm" value="miniLanyard">
                          <span className="text-sm">Mini Lanyard ($0.25 ea)</span>
                        </Radio>
                        <Radio size="sm" value="spitRingChain">
                          <span className="text-sm">Spit Ring Chain ($0.25 ea)</span>
                        </Radio>
                        <Radio size="sm" value="spitRing">
                          <span className="text-sm">Spit Ring ($0.15 ea)</span>
                        </Radio>
                        <Radio size="sm" value="snapHook">
                          <span className="text-sm">Snap Hook ($0.5 ea)</span>
                        </Radio>
                      </div>
                    </RadioGroup>
                  </AccordionItem>

                  <AccordionItem
                    key="3"
                    aria-label="Packaging"
                    title={
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">Packaging</span>
                        <Tooltip>
                          <BsInfoCircle className="text-green-600" />
                        </Tooltip>
                      </div>
                    }
                  >
                    <RadioGroup className="pb-2">
                      {[1, 2, 3, 4, 5, 5].map((_, i) => (
                        <Radio size="sm" value="miniLanyard" key={i}>
                          <span className="text-sm">Lorem Ipsum</span>
                        </Radio>
                      ))}
                    </RadioGroup>
                  </AccordionItem>
                </Accordion>
                <Divider />
                <div className="bg-white border-2 border-dashed border-orange">
                  <div className="p-4 space-y-3">
                    <span className="font-semibold text-lg text-primary">
                      Important Information
                    </span>
                    <p className="text-xs">
                      This OTG flash Drive does not work with a lightning connector
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-2 md:space-y-0">
                  <div className="flex flex-col">
                    <TbTruckDelivery className="text-2xl" />
                    <span className="font-semibold text-orange">Expected Delivery</span>
                    <span className="font-semibold">2-3 weeks</span>
                  </div>
                  <span className="underline text-sm font-semibold">Need it faster?</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-4">
                  <span className="text-lg md:text-xl font-bold text-primary">
                    2.Select Branding Details
                  </span>
                  <Divider />
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-semibold">Type of branding</span>
                    <Tabs aria-label="Options" color="primary" radius="none">
                      <Tab key="Print" title="Print"></Tab>
                      <Tab key="Engrave" title="Engrave"></Tab>
                      <Tab key="Transfer" title="Transfer"></Tab>
                    </Tabs>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-semibold">Colors in Artwork</span>
                    <Tabs aria-label="Colors in Artwork" color="primary" radius="none">
                      <Tab key="oneColorArtwork" title="One color Artwork"></Tab>
                      <Tab key="multiColorArtwork" title="Multi-color artwork"></Tab>
                    </Tabs>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-semibold">Branding Positions</span>
                    <Tabs aria-label="Branding Positions" color="primary" radius="none">
                      <Tab key="One" title="One"></Tab>
                      <Tab key="Two" title="Two"></Tab>
                    </Tabs>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full space-y-2 md:space-y-0">
                    <span className="text-lg md:text-xl font-bold text-primary">
                      3.Pricing Details
                    </span>
                    <div className="flex items-center flex-wrap space-x-2 space-y-2 md:space-y-0">
                      <HiOutlineUser className="text-primary text-xl" />
                      <div className="flex flex-col text-center">
                        <span className="text-xs md:text-sm text-orange font-bold">
                          HAVE AN ACCOUNT?
                        </span>
                        <span className="text-xs md:text-sm text-orange font-bold">
                          Please log in first
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-lg font-semibold">Price(ea)</span>
                    <span className="font-semibold text-sm md:text-base text-orange">$4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-normal">
                      <i>plus</i> Options(ea)
                    </span>
                    <span className="font-semibold text-sm md:text-base">$4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-normal">
                      {" "}
                      <i>plus</i> Accessories(ea)
                    </span>
                    <span className="font-semibold text-sm md:text-base">$4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-normal">
                      {" "}
                      <i>plus</i> Packaging(ea)
                    </span>
                    <span className="font-semibold text-sm md:text-base">$4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-lg font-semibold">Set-up</span>
                    <span className="font-semibold text-sm md:text-base">$4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-lg font-semibold">Freight</span>
                    <span className="font-semibold text-sm md:text-base">$4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-lg font-semibold">Total(ex. GST)</span>
                    <span className="font-semibold text-sm md:text-base">$4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                      <MdOutlineDiscount className="text-orange" />
                      <span className="text-orange">Vip/Special discount</span>
                    </div>
                    <span className="font-semibold text-sm md:text-base text-orange">$230</span>
                  </div>
                  <div className="bg-orange rounded-md">
                    <div className="flex justify-between items-center p-2">
                      <span className="text-white font-semibold text-sm md:text-base">
                        Your price today(ex. GST)
                      </span>
                      <span className="text-white font-semibold text-sm md:text-base">$240</span>
                    </div>
                  </div>
                  <Checkbox size="sm" className="text-sm">
                    Have more specific requirements? Request a quote
                  </Checkbox>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="bordered"
                      radius="none"
                      className="bg-green-500 text-white border-green-500"
                    >
                      Buy Now
                    </Button>
                    <Button
                      radius="none"
                      className="bg-primary text-white"
                      startContent={<BsCart3 />}
                      onPress={onOpen}
                    >
                      Send Pricing
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10">
            <ProductAboutCard title={cardData[0]} desc={productF?.product?.description} />
          </div>

          <div className="space-y-6">
            <div className="flex md:items-center md:justify-between space-y-2 md:space-y-0 border-b border-gray pb-4 flex-wrap">
              <div className="flex items-center space-x-1">
                <RiVerifiedBadgeFill className=" text-primary" />
                <span>You may also like this</span>
              </div>
              <div>
                <Tabs
                  variant="light"
                  color="primary"
                  radius="full"
                  aria-label="Tabs variants"
                  className="hidden md:flex flex-wrap text-lg font-medium"
                >
                  <Tab key="latestProducts" title="Latest Products" />
                  <Tab key="trendingProducts" title="Trending Products" />
                  <Tab key="aussieProducts" title="Aussie Products" />
                </Tabs>
              </div>

              <Select
                variant="bordered"
                label="Sort by:"
                labelPlacement="outside-left"
                className="max-w-xs"
                selectedKeys={["PriceLowToHigh"]}
              >
                {[{ value: "PriceLowToHigh", label: "Price-Low to High" }].map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            {/* Use useMemo and change listings according to selected tab and  */}
            {/* <div className="gap-4 md:gap-8 grid grid-cols-2 sm:grid-cols-4">
              {items.slice(1, 5).map((item, index) => (
                <ProductCardDet product={item} key={index} />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <SendPriceModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
