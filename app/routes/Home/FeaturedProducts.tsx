import Container from "app/components/Container";
import { GoVerified } from "react-icons/go";
import { items } from "app/data";
import ProductCard from "app/components/ProductCard";
import { IoIosArrowDown } from "react-icons/io";
import Button from "app/blocks/Button";
import { useState } from "react";
import Select from "react-select";

interface FeaturedProductsProps {
  sectionlabel: string;
  gridno: number;
  showmore?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const FeaturedProducts = ({
  sectionlabel,
  gridno,
  showmore,
  value,
  onChange,
}: FeaturedProductsProps) => {
  const [filterItems, setFilterItems] = useState(items);

  const selectFilter = (selectItems: any) => {
    const updatedFilter = items.filter((items) => {
      return items.category === selectItems;
    });

    setFilterItems(updatedFilter);
  };

  const options = [
    { value: "low-high", label: "low to high" },
    { value: "high", label: "High" },
    { value: "new", label: "New" },
  ];
  return (
    <Container>
      <div className="mt-[62px] flex flex-col gap-4 relative pb-[5.4rem]">
        <div className="flex flex-row gap-[102px] item-center border-b-[1px] border-textcolor mb-[32px] p-[20px] justify-between">
          <div className="flex flex-row gap-3 items-center">
            <GoVerified size={25} className="text-blue" />

            <div className="text-black text-[24px] font-semibold">{sectionlabel}</div>
          </div>

          <div className="flex flex-row gap-[65px] items-center cursor-pointer">
            <div className="text-[16px] text-textcolor" onClick={() => setFilterItems(items)}>
              Trending
            </div>
            <div className="text-[16px] text-textcolor" onClick={() => selectFilter("latest")}>
              Latest
            </div>
            <div className="text-[16px] text-textcolor" onClick={() => selectFilter("aussie")}>
              Aussie Products
            </div>

            <div className="flex flex-row items-center gap-4 ">
              <div className="text-[16px] ">Sort By</div>

              <div className="">
                <select
                  name="filter"
                  id="plan"
                  className="px-3 py-2 border-[1px] border-textcolor rounded-sm"
                >
                  <option value="price" selected disabled hidden>
                    Price - Low to High
                  </option>
                  <option value="new">New</option>
                  <option value="high">High</option>
                  <option value="low">Coperate</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-[32px]">
          {filterItems.slice(0, gridno).map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              newPrice={item.newPrice}
              qunatity={item.qunatity}
            />
          ))}
        </div>

        {showmore && (
          <div className="flex flex-row gap-2 items-center justify-center w-[30%] left-[50%] absolute -translate-x-[50%] bottom-0 ">
            <Button label="Show more Products" icon={IoIosArrowDown} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default FeaturedProducts;
