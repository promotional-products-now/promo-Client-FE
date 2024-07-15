import { Link, Listbox, ListboxItem } from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import { fetchProductCategories } from "app/api/products.api";
import { toSnakeCase } from "app/utils/fn";

interface categoryI {
  name: string;
  id: string;
  totalProducts: number;
}

function CategoryList(props: any) {
  return (
    <Listbox aria-label="Categories" className="mb-12 w-full text-xs">
      {props.categories &&
        props.categories.length &&
        props.categories.map((cat: categoryI) => (
          <ListboxItem
            variant="light"
            as={Link}
            showDivider
            key={cat.id}
            href={`/categories/${toSnakeCase(cat.name)}`}
            className="text-left bg-white text-zinc-800 text-xs md:font-medium"
            classNames={{ title: " md:font-medium" }}
          >
            {cat.name}{" "}
            <span className="text-primary-400 text-sm font-normal">({cat.totalProducts})</span>
          </ListboxItem>
        ))}
    </Listbox>
  );
}

export default CategoryList;
