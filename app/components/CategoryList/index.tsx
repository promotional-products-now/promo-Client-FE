import { Link, Listbox, ListboxItem } from "@nextui-org/react";
import { allCategories } from "app/utils/homeAllCategories";

function CategoryList() {
  return (
    <Listbox aria-label="Categories" className="mb-12 w-full text-xs">
      {allCategories.map((cat) => (
        <ListboxItem
          as={Link}
          showDivider
          key={cat.id}
          href={`/categories/${cat.category}`}
          className="text-left bg-white text-zinc-800 text-xs md:font-medium"
          classNames={{ title: " md:font-medium" }}
        >
          {cat.name}
        </ListboxItem>
      ))}
    </Listbox>
  );
}

export default CategoryList;
