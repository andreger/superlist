import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  categories: string[];
  type: "wedding" | "babyshower";
}

export interface IEvent extends Document {
  title: string;
  description: string;
  cover: string;
  type: "wedding" | "babyshower";
}

export interface CreateProductData {
  name: string;
  description?: string;
  price: number;
  categories?: string[];
  type: "wedding" | "babyshower";
}

export interface UpdateProductData {
  name?: string;
  description?: string;
  price?: number;
  categories?: string[];
  type?: "wedding" | "babyshower";
}

export interface CreateEventData {
  title: string;
  description?: string;
  cover?: string;
  type: "wedding" | "babyshower";
}

export interface UpdateEventData {
  title?: string;
  description?: string;
  cover?: string;
  type?: "wedding" | "babyshower";
}
