import { productModel } from "./models";

export async function findBySlug(slug: string): Promise<any> {
  if (productModel) {
    const product = await productModel
      .findOne({ slug })
      .populate({
        path: "product.prices.priceGroups.additions",
        model: "additions",
        //   strictPopulate: false,
      })
      .populate({ path: "product.prices.priceGroups.basePrice", model: "basePrice" })
      .populate("subCategory")
      .lean();

    console.log({ pd: product, slug });
    return product;
  }
}
