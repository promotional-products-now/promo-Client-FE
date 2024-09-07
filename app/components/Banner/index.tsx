import MultipleBannerCarousel from "./MultipleBannerCarousel";
import { Button, Image } from "@nextui-org/react";

function BannerAdvart({ advert }: any) {
  if (advert) {
    if (advert.length === 1) {
      return (
        <div className="flex flex-col items-center gap-4">
          <Image
            className="!object-scale-down"
            height={450}
            src={advert[0]?.productId?.overview?.heroImage}
          ></Image>
          <div className="px-2">
            <div>{advert[0].title}</div>
            <Button color="primary">Shop Now</Button>
          </div>
        </div>
      );
    }

    if (advert.length === 2) {
      <div className="flex gap-2">
        {advert.map((ad: any) => {
          return (
            <div>
              <div className="flex flex-col items-center gap-4">
                <Image
                  className="!object-scale-down"
                  height={450}
                  src={ad?.productId?.overview?.heroImage}
                ></Image>
                <div className="px-2">
                  <div>{ad.title}</div>
                  <Button color="primary">Shop Now</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>;
    }
    if (advert.length === 3) {
      <div className="grid grid-cols-3 gap-4">
        {advert.map((ad: any, index: number) => {
          return (
            <div className={ad.length === index - 1 ? "col-span-2" : ""}>
              <div className="flex flex-col items-center gap-4">
                <Image
                  className="!object-scale-down"
                  height={450}
                  src={ad?.productId?.overview?.heroImage}
                ></Image>
                <div className="px-2">
                  <div>{ad.title}</div>
                  <Button color="primary">Shop Now</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>;
    }

    return (
      <MultipleBannerCarousel
        children={advert.map((ad: any) => {
          return (
            <div className="flex items-center gap-4">
              <div className="px-2">
                <div>{ad.title}</div>
                <Button color="primary">Shop Now</Button>
              </div>

              <Image
                className="!object-scale-down"
                height={450}
                src={ad?.productId?.overview?.heroImage}
              ></Image>
            </div>
          );
        })}
      />
    );
  }
}

export { BannerAdvart };
