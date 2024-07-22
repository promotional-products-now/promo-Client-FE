import { MetaFunction, useLoaderData } from "@remix-run/react";
import { fetchProductCategories } from "app/api/products.api";
import CategoryList from "app/components/CategoryList";

export const meta: MetaFunction = () => {
  return [
    { title: "Category | Promotional Products Now " },
    { name: "description", content: "Welcome to Promotional Products Now" },
  ];
};
export async function loader() {
  const data = await fetchProductCategories();

  return data;
}

const CategoryPage = () => {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div>
      <CategoryList categories={loaderData && loaderData.length > 0 ? loaderData : []} />
    </div>
  );
};

export default CategoryPage;
