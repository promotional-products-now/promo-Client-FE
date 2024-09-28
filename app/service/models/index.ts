import { mongoose } from "../db.server";
import { Schema, Model, Document } from "mongoose";

const { Types } = mongoose;

interface ProductDocument extends Document {}

interface AdditionDocument extends Document {}
interface BasePriceDocument extends Document {}

// const ProductSchema =  Schema<ProductDocument>({}, { strict: false. });

// const additionSchema = new Schema<AdditionDocument>({}, { strict: false });
// const basePriceSchema = new Schema<BasePriceDocument>({}, { strict: false });

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

const productModel = mongoose.model<ProductDocument>("Product", ProductSchema);
const additionModel = mongoose.model<AdditionDocument>("additions", additionSchema);
const basePriceModel = mongoose.model<BasePriceDocument>("basePrice", basePriceSchema);

export { productModel, additionModel, basePriceModel };
