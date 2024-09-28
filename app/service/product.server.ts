import { productModel } from "./models";

export async function findBySlug(slug: string): Promise<any | null> {
  if (productModel) {
    console.log("prod");
    const product = await productModel
      .findOne({ slug })
      .populate({
        path: "product.prices.priceGroups.additions",
        model: "additions",
      })
      .populate({ path: "product.prices.priceGroups.basePrice", model: "basePrice" })
      .populate("subCategory")
      .lean();

    console.log({ pd: product, slug });
    return product;
  }
  return null; // or handle the case when productModel is undefined
}