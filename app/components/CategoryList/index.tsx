import { Link, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { allCategories } from "app/utils/homeAllCategories";

function CategoryList() {
  return (
    <Listbox aria-label="Categories" className="mb-12">
      {allCategories.map((cat) => (
        <ListboxSection
          showDivider
          key={cat.id}
          dividerProps={{
            className: " border-b border-primary",
          }}
        >
          <ListboxItem as={Link} key={cat.id} href="#" className="text-left bg-white px-2 py-2">
            {cat.category}
          </ListboxItem>
        </ListboxSection>
      ))}
    </Listbox>
  );
}

export default CategoryList;
