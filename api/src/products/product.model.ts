import mongoose, { Schema } from "mongoose";
import { IProduct } from "../types";

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  categories: {
    type: [String],
    default: [],
  },
  type: {
    type: String,
    enum: ["wedding", "babyshower"],
    required: true,
  },
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
