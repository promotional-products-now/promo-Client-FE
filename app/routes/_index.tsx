import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Home from "./Home/route";
import Hot from "./Home/Hot";
import Health from "./Home/Health";
import ProductSection from "app/components/ProductSection";
import FeaturedProducts from "./Home/FeaturedProducts";
import NewArrivals from "./Home/NewArrivals";
import Partners from "./Home/Partners";
import Bags from "./Home/Bags";
import Blog from "./Home/Blog";
export const meta: MetaFunction = () => {
  return [{ title: "App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div className="">
      <Home />
      <Hot />
      <Health />
      <FeaturedProducts sectionlabel="Featured Products" gridno={10} />
      <Health />
      <NewArrivals />
      <Bags />
      <Partners />
      <Blog />
    </div>
  );
}
