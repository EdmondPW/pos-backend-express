import { db } from "../utils/db.server.js";

export type CustomerType = {
  id: number;
  customer_type_code: string;
  customer_type_name: string;
};

export const getAllCustomerType = async (): Promise<CustomerType[]> => {
  return db.customer_type.findMany({
    select: {
      id: true,
      customer_type_code: true,
      customer_type_name: true,
    },
  });
};

export const getOneCustomerTypeById = async (
  id: number
): Promise<CustomerType | null> => {
  const searchResult = await db.customer_type.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      customer_type_code: true,
      customer_type_name: true,
    },
  });
  return searchResult;
};

export const createCustomerType = async (
  customer_type: Omit<CustomerType, "id">
): Promise<CustomerType> => {
  const { customer_type_code, customer_type_name } = customer_type;
  return db.customer_type.create({
    data: {
      customer_type_code,
      customer_type_name,
    },
    select: {
      id: true,
      customer_type_code: true,
      customer_type_name: true,
    },
  });
};

export const updateCustomerType = async (
  customer_type: Omit<CustomerType, "id">,
  id: number
): Promise<CustomerType> => {
  const { customer_type_code, customer_type_name } = customer_type;
  return db.customer_type.update({
    where: {
      id: id,
    },
    data: {
      customer_type_code,
      customer_type_name,
    },
    select: {
      id: true,
      customer_type_code: true,
      customer_type_name: true,
    },
  });
};

export const deleteCustomerType = async (id: number): Promise<void> => {
  await db.customer_type.delete({
    where: {
      id: id,
    },
  });
};
