import { Link, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { allCategories } from "app/utils/homeAllCategories";

function CategoryList() {
  return (
    <Listbox aria-label="Categories" className="mb-12 w-full text-xs">
      {allCategories.map((cat) => (
        <ListboxSection
          showDivider
          key={cat.id}
          dividerProps={{
            className: " border-b border-primary my-1",
          }}
        >
          <ListboxItem
            as={Link}
            key={cat.id}
            href="#"
            className="text-left bg-white text-zinc-800 text-xs px-2"
          >
            {cat.category}
          </ListboxItem>
        </ListboxSection>
      ))}
    </Listbox>
  );
}

export default CategoryList;
