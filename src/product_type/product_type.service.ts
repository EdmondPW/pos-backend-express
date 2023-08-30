import { db } from "../utils/db.server.js";

export type ProductType = {
  id: number;
  product_type_code: string;
  product_type_name: string;
};

export const getAllProductType = async (): Promise<ProductType[]> => {
  return db.product_type.findMany({
    select: {
      id: true,
      product_type_code: true,
      product_type_name: true,
    },
  });
};

export const getOneProductTypeById = async (
  id: number
): Promise<ProductType | null> => {
  const searchResult = await db.product_type.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      product_type_code: true,
      product_type_name: true,
    },
  });
  return searchResult;
};

export const createProductType = async (
  product_type: Omit<ProductType, "id">
): Promise<ProductType> => {
  const { product_type_code, product_type_name } = product_type;
  return db.product_type.create({
    data: {
      product_type_code,
      product_type_name,
    },
    select: {
      id: true,
      product_type_code: true,
      product_type_name: true,
    },
  });
};

export const updateProductType = async (
  customer_type: Omit<ProductType, "id">,
  id: number
): Promise<ProductType> => {
  const { product_type_code, product_type_name } = customer_type;
  return db.product_type.update({
    where: {
      id: id,
    },
    data: {
      product_type_code,
      product_type_name,
    },
    select: {
      id: true,
      product_type_code: true,
      product_type_name: true,
    },
  });
};

export const deleteProductType = async (id: number): Promise<void> => {
  await db.product_type.delete({
    where: {
      id: id,
    },
  });
};
