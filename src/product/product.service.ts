import type { ProductType } from "../product_type/product_type.service.js";
import { db } from "../utils/db.server.js";

export type ProductRead = {
  id: number;
  product_code: string;
  product_name: string;
  price: number;
  stock: number;
  product_type: ProductType;
};

export type ProductReadWithoutStock = {
  id: number;
  product_code: string;
  product_name: string;
  price: number;
  product_type: ProductType;
};

export type ProductWrite = {
  id: number;
  product_code: string;
  product_name: string;
  price: number;
  stock: number;
  product_type_id: number;
};

export const getAllProducts = async (): Promise<ProductRead[]> => {
  return await db.product.findMany({
    select: {
      id: true,
      product_code: true,
      product_name: true,
      price: true,
      stock: true,
      product_type: {
        select: {
          id: true,
          product_type_code: true,
          product_type_name: true,
        },
      },
    },
  });
};

export const getOneProductById = async (
  id: number
): Promise<ProductRead | null> => {
  const searchResult = await db.product.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      product_code: true,
      product_name: true,
      price: true,
      stock: true,
      product_type: {
        select: {
          id: true,
          product_type_code: true,
          product_type_name: true,
        },
      },
    },
  });
  return searchResult;
};

export const createProduct = async (
  product: Omit<ProductWrite, "id">
): Promise<ProductRead> => {
  const { product_code, product_name, price, stock, product_type_id } = product;
  return await db.product.create({
    data: {
      product_code: product_code,
      product_name: product_name,
      price: price,
      stock: stock,
      product_type_id: product_type_id,
    },
    select: {
      id: true,
      product_code: true,
      product_name: true,
      price: true,
      stock: true,
      product_type: {
        select: {
          id: true,
          product_type_code: true,
          product_type_name: true,
        },
      },
    },
  });
};

export const updateProduct = async (
  product: Omit<ProductWrite, "id">,
  id: number
): Promise<ProductRead> => {
  const { product_code, product_name, price, stock, product_type_id } = product;
  return await db.product.update({
    where: {
      id: id,
    },
    data: {
      product_code,
      product_name,
      price,
      stock,
      product_type_id: product_type_id,
    },
    select: {
      id: true,
      product_code: true,
      product_name: true,
      price: true,
      stock: true,
      product_type: {
        select: {
          id: true,
          product_type_code: true,
          product_type_name: true,
        },
      },
    },
  });
};

export const deleteProduct = async (id: number): Promise<void> => {
  await db.product.delete({
    where: {
      id: id,
    },
  });
};
