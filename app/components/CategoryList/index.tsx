/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { toSnakeCase } from "app/utils/fn";
import { Link as RemixLink } from "@remix-run/react";
interface category {
  name: string;
  _id: string;
  id: string;
}
interface categoryI extends category {
  totalProduct: number;
  subCategory: category[];
}

function CategoryList(props: any) {
  const [_, setHoveredCategory] = useState<any>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event: any, category: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // setPosition({ top: rect.top, left: rect.right });
    setPosition({
      top: props.top ?? 80,
      left: props.right ? rect.right - props.right - 5 : rect.right - 40,
    });
    setHoveredCategory(category);
  };

  return (
    <>
      <Listbox
        aria-label="Categories"
        items={props?.categories ?? []}
        className="mb-12 w-full text-xs md:hidden"
      >
        {(cat: categoryI) => (
          <ListboxItem
            variant="light"
            showDivider
            className="text-left bg-white text-zinc-800 text-xs md:font-medium  capitalize md:uppercase"
            classNames={{ title: " md:font-medium" }}
            key={cat?._id}
            textValue={cat?.name}
          >
            <RemixLink to={`/categories/${toSnakeCase(cat?.name)}`} className="w-full">
              {cat.name}
              {cat?.totalProduct && (
                <span className="text-primary-400 text-sm font-normal">({cat?.totalProduct})</span>
              )}{" "}
            </RemixLink>
          </ListboxItem>
        )}
      </Listbox>
      <div className="w-full bg-gray-100 p-4 hidden md:block h-full">
        <ul className="">
          {props.categories &&
            props.categories.map((category: categoryI) => (
              <li
                key={category._id}
                className="mb-2 menu-item w-full group"
                onMouseEnter={(e) => handleMouseEnter(e, category)}
              >
                <RemixLink
                  to={`/categories/${toSnakeCase(category.name)}`}
                  className=" w-full flex text-left bg-white text-zinc-800 text-sm  md:font-medium  capitalize md:uppercase"
                >
                  {category?.name}
                  {"  "} &nbsp;
                  {category?.totalProduct && (
                    <span className="text-primary-400 text-sm font-normal">
                      ({category.totalProduct})
                    </span>
                  )}
                </RemixLink>
                <hr className="my-2 h-0 border-0 border-b-1 border-zinc-200 " />
                {category.subCategory && category.subCategory.length > 0 && (
                  <div
                    className="submenu absolute z-[1000] left-full top-0 right-0 bg-white border border-zinc-300 ml-4 w-64 hidden 
                  group-hover:block h-full overflow-y-auto rounded-r-lg overflow-x-hidden"
                    style={{ top: `${position.top}px`, left: `${position.left}px` }}
                  >
                    <h3 className="text-lg font-bold p-4">{category?.name}</h3>
                    <ul className="mt-2 mb-12">
                      {category?.subCategory.map((sub) => (
                        <li
                          key={sub?._id}
                          className=" cursor-pointer hover:bg-primary text-zinc-500 hover:text-white p-2"
                        >
                          <RemixLink
                            to={`/categories/${toSnakeCase(category?.name)}/${toSnakeCase(
                              sub.name,
                            )}`}
                            className=""
                          >
                            {sub?.name}
                          </RemixLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryList;
