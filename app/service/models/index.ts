import { mongoose } from "../db.server";
import { Schema, Model, Document } from "mongoose";

const { Types } = mongoose;

interface ProductDocument extends Document {}
interface AdditionDocument extends Document {}
interface BasePriceDocument extends Document {}

let ProductSchema: Schema<ProductDocument> | undefined;
let additionSchema: Schema<AdditionDocument> | undefined;
let basePriceSchema: Schema<BasePriceDocument> | undefined;

if (!ProductSchema) {
  ProductSchema = new Schema({}, { strict: false, strictPopulate: false });
}

if (!additionSchema) {
  additionSchema = new Schema({}, { strict: false, strictPopulate: false });
}

if (!basePriceSchema) {
  basePriceSchema = new Schema({}, { strict: false, strictPopulate: false });
}

let productModel: Model<ProductDocument> | undefined;
let additionModel: Model<AdditionDocument> | undefined;
let basePriceModel: Model<BasePriceDocument> | undefined;

if (!productModel) {
  productModel = mongoose.model<ProductDocument>("Product", ProductSchema);
}

if (!additionModel) {
  additionModel = mongoose.model<AdditionDocument>("additions", additionSchema);
}

if (!basePriceModel) {
  basePriceModel = mongoose.model<BasePriceDocument>("basePrice", basePriceSchema);
}

export { productModel, additionModel, basePriceModel };
