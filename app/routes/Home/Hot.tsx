import Container from "app/components/Container";
import { HiOutlineFire } from "react-icons/hi";
import { items } from "app/data";
import ProductCard from "app/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Hot = () => {
  return (
    <Container>
      <div className="mt-[62px]  ">
        <div className="text-blue text-center text-[30px] font-semibold mb-[32px]">
          PROMOTIONAL MERCHANDISE AT GUARANTEED LOWEST PRICES
        </div>

        <div className="border-[2px] border-orange relative p-[30px]">
          <div className="flex flex-1 gap-5 flex-row">
            {items.slice(0, 4).map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                  newPrice={item.newPrice}
                  qunatity={item.qunatity}
                />
              );
            })}

            <div className="absolute -top-7 flex flex-row gap-1 px-2 py-3 bg-[#FFFFFF] z-10 items-center">
              <HiOutlineFire className="text-orange" size={25} />
              <div className="text-orange">WHAT’S HOT</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hot;
