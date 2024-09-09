import React, { useRef } from "react";
import { Button, Image } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { isCategoryListOpen } from "app/atoms/category.atom";
import { useAtom } from "jotai";
import { usePalette } from "color-thief-react";

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface Overview {
  heroImage: string;
  name: string;
}

interface Category {
  overview: Overview;
}

interface OldBannerProps {
  clothing: Category;
  health: Category;
  home: Category;
}

const OldBanner: React.FC<OldBannerProps> = ({ clothing, health, home }) => {
  const [isCategoryOpen] = useAtom(isCategoryListOpen);

  // Fetch palettes for all categories
  const healtPalet = usePalette(health.overview.heroImage, 3, "rgbString");
  const clothingPalet = usePalette(clothing.overview.heroImage, 3, "rgbString");
  const homePalet = usePalette(home.overview.heroImage, 3, "rgbString");

  // Helper to convert rgb string to RGB object
  const rgbToRgb = (rgb: string): RGB => {
    const result = rgb.match(/rgb\((\d+), (\d+), (\d+)\)/);
    if (!result) throw new Error("Invalid rgb format");
    return {
      r: parseInt(result[1], 10),
      g: parseInt(result[2], 10),
      b: parseInt(result[3], 10),
    };
  };

  // Helper to calculate brightness
  const getBrightness = (rgb: RGB): number => {
    return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  };

  // Filter out white-like colors
  const nonWhiteColors = (colors: string[]): string[] => {
    return colors.filter((color) => {
      const rgb = rgbToRgb(color);
      const brightness = getBrightness(rgb);
      return brightness < 0.9;
    });
  };

  // Get background color from palette
  const getBackgroundColor = (palette: string[], defaultColor?: string): string => {
    return nonWhiteColors(palette)?.[0] || defaultColor || "rgb(0,121,192)";
  };

  return (
    <div
      className={`flex flex-col md:flex-col lg:flex-row justify-center container mx-auto py-3 lg:py-8 !m-0 transition-width duration-300 ease-linear ${
        isCategoryOpen ? "w-full" : ""
      }`}
    >
      {/* Clothing Section */}
      <div
        className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center items-center w-3/5"
        style={{
          backgroundColor: getBackgroundColor(clothingPalet.data || [], "rgb(56, 189, 248)"),
        }}
      >
        <div className="flex flex-col gap-2 md:gap-3 p-4">
          <h3 className="font-semibold text-sm md:text-base text-white space-y-2">CLOTHING</h3>
          <h1 className="font-bold text-lg md:text-2xl text-white capitalize">
            {clothing.overview.name}
          </h1>
          <h3 className="text-sm md:text-base text-white font-normal">PRICE RANGE</h3>
          <div className="flex flex-col gap-3 justify-start">
            <Button
              as={Link}
              href="#"
              className="bg-primary w-min p-5 rounded-md text-white text-base font-semibold hover:opacity-80 transition text-center capitalize"
              variant="solid"
            >
              Shop now
            </Button>
            <Button
              as={Link}
              href="/#"
              className="bg-white w-max p-5 rounded-md text-black text-base font-semibold hover:opacity-80 transition text-center capitalize"
              variant="solid"
            >
              View Collection
            </Button>
          </div>
        </div>
        <div className="h-full">
          <Image
            src={clothing?.overview?.heroImage}
            radius="none"
            crossOrigin="anonymous"
            alt="Clothing item"
            removeWrapper
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Health Section */}
      <div className="flex flex-col align-center w-2/5">
        <div
          className="flex flex-row justify-center items-center gap-1 h-full p-5 flex-1"
          style={{
            backgroundColor: getBackgroundColor(healtPalet.data || [], "rgb(6 182 212)"),
          }}
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm md:text-base text-white">HEALTH & FITNESS</h3>
            <h1 className="font-bold text-lg md:text-2xl text-white capitalize">
              {health.overview.name}
            </h1>
            <div className="flex flex-col gap-3 justify-start">
              <Button
                as={Link}
                href="#"
                className="bg-primary p-5 w-min rounded-md text-white text-base hover:opacity-80 transition text-center capitalize"
                size="md"
                variant="solid"
              >
                Shop now
              </Button>
            </div>
          </div>

          <div className="w-56 h-36  rounded-lg shadow-lg overflow-hidden">
            <Image
              src={health?.overview?.heroImage}
              alt="Health item"
              radius="none"
              crossOrigin="anonymous"
              removeWrapper
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </div>
        </div>

        {/* Home Section */}
        <div
          className="flex flex-row justify-center items-center gap-5 p-6 flex-1"
          style={{
            backgroundColor: getBackgroundColor(homePalet.data || []),
          }}
        >
          <div className="w-56 h-36  rounded-lg shadow-lg overflow-hidden">
            <Image
              src={home?.overview?.heroImage}
              alt="Home item"
              radius="none"
              removeWrapper
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm md:text-base text-white space-y-2">
              Home & Living
            </h3>
            <h1 className="font-bold text-lg md:text-2xl text-white capitalize">
              {home.overview.name}
            </h1>
            <div className="flex flex-col gap-3 justify-start">
              <Button
                as={Link}
                href="#"
                className="bg-white p-5 w-max rounded-md text-black text-base hover:opacity-80 transition text-center capitalize"
                size="md"
                variant="solid"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldBanner;
