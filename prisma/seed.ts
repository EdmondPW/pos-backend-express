import { db } from "../src/utils/db.server.js";
import bcrypt from "bcrypt";

type Customer_type = {
  customer_type_code: string;
  customer_type_name: string;
};

type Product_type = {
  product_type_name: string;
  product_type_code: string;
};

type User = {
  user_code: string;
  name: string;
  password: string;
  role: string;
};

type Product = {
  product_code: string;
  product_name: string;
  price: number;
  stock: number;
};

type Sales_transaction = {
  sales_transaction_number: string;
  sales_transaction_status: string;
  total_price: number;
  total_discount: number;
  total_paid: number;
  user_id: number;
  customer_type_id: number;
};

type Item_transaction = {
  sales_transaction_id: number;
  product_id: number;
  quantity: number;
};

function getUser(): Array<User> {
  return [
    {
      user_code: "SADM",
      name: "superadmin",
      password: "superadmin",
      role: "ADMIN",
    },
    {
      user_code: "STF",
      name: "Staff 1",
      password: "123456",
      role: "Staff",
    },
  ];
}

function getProductType(): Array<Product_type> {
  return [
    {
      product_type_code: "MNM",
      product_type_name: "Minuman",
    },
    {
      product_type_code: "PIA",
      product_type_name: "PIA",
    },
    {
      product_type_code: "TCPKE",
      product_type_name: "Tiong Ciu Pia Kulit Empuk",
    },
    {
      product_type_code: "TCPKP",
      product_type_name: "Tiong Ciu Pia Kulit Putih",
    },
    {
      product_type_code: "TCPS",
      product_type_name: "Tiong Ciu Pia Susun",
    },
  ];
}

function getCustomerType(): Array<Customer_type> {
  return [
    {
      customer_type_code: "GRB",
      customer_type_name: "Grab",
    },
    {
      customer_type_code: "GJK",
      customer_type_name: "Gojek",
    },
    {
      customer_type_code: "SHP",
      customer_type_name: "Shopee",
    },
    {
      customer_type_code: "TKO",
      customer_type_name: "Toko",
    },
  ];
}

function getProduct(): Array<Product> {
  return [
    {
      product_code: "PKHI",
      product_name: "Pia Kacang Hitam",
      price: 27000,
      stock: 10,
    },
    {
      product_code: "PKHJ",
      product_name: "Pia Kacang Hijau",
      price: 27000,
      stock: 10,
    },
    {
      product_code: "PCKL",
      product_name: "Pia Cokelat",
      price: 27000,
      stock: 10,
    },
    {
      product_code: "PKJU",
      product_name: "Pia Keju",
      price: 27000,
      stock: 10,
    },
    {
      product_code: "PDRN",
      product_name: "Pia Duren",
      price: 27000,
      stock: 10,
    },
    {
      product_code: "PTKW",
      product_name: "Pia Tangkwe",
      price: 27000,
      stock: 10,
    },
  ];
}

async function seed() {
  await Promise.all(
    getCustomerType().map((cutomerType) => {
      return db.customer_type.create({
        data: {
          customer_type_code: cutomerType.customer_type_code,
          customer_type_name: cutomerType.customer_type_name,
        },
      });
    })
  );
  await Promise.all(
    getProductType().map((productType) => {
      return db.product_type.create({
        data: {
          product_type_code: productType.product_type_code,
          product_type_name: productType.product_type_name,
        },
      });
    })
  );
  const productType = await db.product_type.findFirst({
    where: {
      product_type_name: "Makanan Kering",
    },
  });
  let id = 0;
  if (productType?.id) {
    id = productType.id;
  }
  await Promise.all(
    getProduct().map((product) => {
      return db.product.create({
        data: {
          product_code: product.product_code,
          product_name: product.product_name,
          price: product.price,
          stock: product.stock,
          product_type_id: id,
        },
      });
    })
  );
  await Promise.all(
    getUser().map(async (user) => {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(user.password, salt);
      return db.user.create({
        data: {
          user_code: user.user_code,
          name: user.user_code,
          password: hashPassword,
        },
      });
    })
  );
}

seed();
