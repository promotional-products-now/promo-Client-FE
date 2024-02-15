import { HiOutlineFire } from "react-icons/hi";
import { items } from "app/data";
import ProductCard from "app/components/Card/ProductCard";

const Hot = () => {
  return (
    <div className="md:px-20 px-5">
      <div className="mt-[62px]  ">
        <div className="text-[#0079C0] text-center text-[30px] font-semibold mb-[32px]">
          PROMOTIONAL MERCHANDISE AT GUARANTEED LOWEST PRICES
        </div>

        <div className="border-[2px] border-[#FB853C] relative p-8">
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
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
              <HiOutlineFire className="text-[#FB853C]" size={25} />
              <div className="text-[#FB853C]">WHAT’S HOT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
