import { Form } from "@remix-run/react";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
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
import { MdOutlineDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SendPriceModal } from "app/components/Product/SendPriceModal";
import { ProductCardDet } from "app/components/Product/ProductCardDet";
import { items } from "app/api_dummy";

const fakeFilter = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "b;ue" },
  { label: "Yellow", value: "yellow" },
];

const cardData = ["ABOUT", "DETAILS", "ADDITIONAL INFO"];

export default function Route() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="space-y-6 md:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
            <div className="space-y-4 w-full order-2 md:order-1 md:px-6">
              <div className="space-y-1">
                <span className="text-lg md:xl font-normal">Memory USB</span>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Product Code: pyun67858</span>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <FaStar key={i} className="text-xs text-orange" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 4].map((_, i) => (
                  <div key={i} className="w-full h-16 relative rounded-sm overflow-hidden">
                    <Image
                      alt=""
                      radius="none"
                      src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
                      removeWrapper
                      fallbackSrc
                      className="absolute inset-0 w-full h-full object-cover transition-transform transform-gpu aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1">
              <Image
                alt=""
                radius="none"
                src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
                removeWrapper
                className="object-cover w-full transition aspect-square inset-0"
              />
            </div>
          </div>

          <Form>
            <div className="bg-gray1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 p-4">
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
                <Accordion selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="options"
                    title={
                      <div className="flex items-center space-x-3">
                        <span className="">Options</span>
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
                        <span className="">Accessories</span>
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
                        <span className="">Packaging</span>
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
                <div className="bg-white border border-dashed border-orange">
                  <div className="p-4 space-y-3">
                    <span className="font-semibold text-sm text-primary">
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
                      className="bg-white text-primary border-primary"
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
            {cardData.map((dd, i) => (
              <div key={i} className="">
                <div className="px-8 py-2 border border-primary w-fit">
                  <span className="text-primary">{dd}</span>
                </div>
                <Card className="max-w-[400px] rounded-none border border-primary bg-gray1">
                  <CardBody className="px-4 md:px-8 space-y-3">
                    <div className="">
                      <span className="font-semibold text-sm">Description</span>
                      <p className="text-xs md:text-sm">
                        Lorem ipsum dolor sit amet consectetur. A quis pellentesque diam orci vitae
                        venenatis a tellus. Ornare amet vulputate accumsan suspendisse. Viverra
                        malesuada et non euismod. Augue faucibus dui orci vestibulum. Lorem ipsum
                        dolor sit amet consectetur. A quis pellentesque diam orci vitae venenatis a
                        tellus. Ornare amet vulputate accumsan suspendisse. Viverra malesuada et non
                        euismod. Augue faucibus dui orci vestibulum.
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-sm">Please Note:</span>
                      <p className="text-xs md:text-sm">
                        Lorem ipsum dolor sit amet consectetur. A quis pellentesque diam orci vitae
                        venenatis a tellus.{" "}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
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
                  className="hidden md:flex flex-wrap"
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
            <div className="gap-4 md:gap-8 grid grid-cols- sm:grid-cols-4">
              {items.slice(1, 5).map((item, index) => (
                <ProductCardDet product={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <SendPriceModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
