import type {
  ProductRead,
  ProductReadWithoutStock,
} from "../product/product.service.js";
import { SalesTransactionRead } from "../sales_transaction/sales_transaction.service.js";
import { db } from "../utils/db.server.js";

export type ItemTransactionRead = {
  id: number;
  quantity: number;
  product: ProductRead;
  sales_transaction: SalesTransactionRead;
};

export type ItemTransactionReadWithoutSalesData = {
  id: number;
  quantity: number;
  product: ProductReadWithoutStock;
};

export type ItemTransactionWrite = {
  id: number;
  quantity: number;
  product_id: number;
  sales_transaction_id: number;
};

export const getAllItemTransaction = async (): Promise<
  ItemTransactionRead[]
> => {
  return await db.item_transaction.findMany({
    select: {
      id: true,
      quantity: true,
      product: {
        select: {
          id: true,
          product_code: true,
          product_name: true,
          price: true,
          stock: true,
          product_type: true,
        },
      },
      sales_transaction: {
        select: {
          id: true,
          sales_transaction_number: true,
          sales_transaction_status: true,
          total_price: true,
          total_discount: true,
          total_paid_cash: true,
          total_paid_debit: true,
          total_paid_credit: true,
          total_paid_transfer: true,
          total_paid_ojol: true,
          total_nett: true,
          cash_back: true,
          user: {
            select: {
              id: true,
              name: true,
              user_code: true,
              role: true,
            },
          },
          customer_type: {
            select: {
              id: true,
              customer_type_code: true,
              customer_type_name: true,
            },
          },
        },
      },
    },
  });
};

export const getAllItemTransactionAfterLastLoginDate = async (
  lastLogin: Date,
  id: number
): Promise<ItemTransactionRead[]> => {
  return await db.item_transaction.findMany({
    where: {
      OR: [
        {
          AND: {
            updatedAt: {
              gt: lastLogin,
            },
            id: id,
          },
        },
        {
          updatedAt: {
            gt: lastLogin,
          },
        },
      ],
    },
    select: {
      id: true,
      quantity: true,
      product: {
        select: {
          id: true,
          product_code: true,
          product_name: true,
          price: true,
          stock: true,
          product_type: true,
        },
      },
      sales_transaction: {
        select: {
          id: true,
          sales_transaction_number: true,
          sales_transaction_status: true,
          total_price: true,
          total_discount: true,
          total_paid_cash: true,
          total_paid_debit: true,
          total_paid_credit: true,
          total_paid_transfer: true,
          total_paid_ojol: true,
          total_nett: true,
          cash_back: true,
          user: {
            select: {
              id: true,
              name: true,
              user_code: true,
              role: true,
            },
          },
          customer_type: {
            select: {
              id: true,
              customer_type_code: true,
              customer_type_name: true,
            },
          },
        },
      },
    },
  });
};

export const getOneItemTransactionById = async (
  id: number
): Promise<ItemTransactionRead | null> => {
  const searchResult = await db.item_transaction.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      quantity: true,
      product: {
        select: {
          id: true,
          product_code: true,
          product_name: true,
          price: true,
          stock: true,
          product_type: true,
        },
      },
      sales_transaction: {
        select: {
          id: true,
          sales_transaction_number: true,
          sales_transaction_status: true,
          total_price: true,
          total_discount: true,
          total_paid_cash: true,
          total_paid_debit: true,
          total_paid_credit: true,
          total_paid_transfer: true,
          total_paid_ojol: true,
          total_nett: true,
          cash_back: true,
          user: {
            select: {
              id: true,
              name: true,
              user_code: true,
              role: true,
            },
          },
          customer_type: {
            select: {
              id: true,
              customer_type_code: true,
              customer_type_name: true,
            },
          },
        },
      },
    },
  });
  return searchResult;
};

export const getOneItemTransactionByTransactionId = async (
  id: number
): Promise<ItemTransactionRead[] | null> => {
  const searchResult = await db.item_transaction.findMany({
    where: {
      sales_transaction_id: id,
    },
    select: {
      id: true,
      quantity: true,
      product: {
        select: {
          id: true,
          product_code: true,
          product_name: true,
          price: true,
          stock: true,
          product_type: true,
        },
      },
      sales_transaction: {
        select: {
          id: true,
          sales_transaction_number: true,
          sales_transaction_status: true,
          total_price: true,
          total_discount: true,
          total_paid_cash: true,
          total_paid_debit: true,
          total_paid_credit: true,
          total_paid_transfer: true,
          total_paid_ojol: true,
          total_nett: true,
          cash_back: true,
          user: {
            select: {
              id: true,
              name: true,
              user_code: true,
              role: true,
            },
          },
          customer_type: {
            select: {
              id: true,
              customer_type_code: true,
              customer_type_name: true,
            },
          },
        },
      },
    },
  });
  return searchResult;
};

export const createItemTransaction = async (
  item_transaction: Omit<ItemTransactionWrite, "id">
): Promise<ItemTransactionRead> => {
  const { quantity, product_id, sales_transaction_id } = item_transaction;
  return await db.item_transaction.create({
    data: {
      quantity,
      product_id,
      sales_transaction_id,
    },
    select: {
      id: true,
      quantity: true,
      product: {
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
      },
      sales_transaction: {
        select: {
          id: true,
          sales_transaction_number: true,
          sales_transaction_status: true,
          total_price: true,
          total_discount: true,
          total_paid_cash: true,
          total_paid_debit: true,
          total_paid_credit: true,
          total_paid_transfer: true,
          total_paid_ojol: true,
          total_nett: true,
          cash_back: true,
          user: {
            select: {
              id: true,
              name: true,
              user_code: true,
              role: true,
            },
          },
          customer_type: {
            select: {
              id: true,
              customer_type_code: true,
              customer_type_name: true,
            },
          },
        },
      },
    },
  });
};

export const updateItemTransaction = async (
  item_transaction: Omit<ItemTransactionWrite, "id">,
  id: number
): Promise<ItemTransactionRead> => {
  const { quantity, product_id, sales_transaction_id } = item_transaction;
  return await db.item_transaction.update({
    where: {
      id: id,
    },
    data: {
      quantity,
      product_id,
      sales_transaction_id,
    },
    select: {
      id: true,
      quantity: true,
      product: {
        select: {
          id: true,
          product_code: true,
          product_name: true,
          price: true,
          stock: true,
          product_type: true,
        },
      },
      sales_transaction: {
        select: {
          id: true,
          sales_transaction_number: true,
          sales_transaction_status: true,
          total_price: true,
          total_discount: true,
          total_paid_cash: true,
          total_paid_debit: true,
          total_paid_credit: true,
          total_paid_transfer: true,
          total_paid_ojol: true,
          total_nett: true,
          cash_back: true,
          user: {
            select: {
              id: true,
              name: true,
              user_code: true,
              role: true,
            },
          },
          customer_type: {
            select: {
              id: true,
              customer_type_code: true,
              customer_type_name: true,
            },
          },
        },
      },
    },
  });
};

export const deleteItemTransaction = async (id: number): Promise<void> => {
  await db.item_transaction.delete({
    where: {
      id: id,
    },
  });
};
