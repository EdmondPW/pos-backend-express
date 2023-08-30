import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as ProductTypeService from "./product_type.service.js";
import authenticateUser from "../middleware/authenticate.middleware.js";

export const productTypeRouter = express.Router();

type ProductType = {
  id: number;
  product_type_code: string;
  product_type_name: string;
};

productTypeRouter.get(
  "/",
  authenticateUser,
  async (request: Request, response: Response) => {
    try {
      const users = await ProductTypeService.getAllProductType();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

productTypeRouter.get(
  "/:id",
  authenticateUser,
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      const product = await ProductTypeService.getOneProductTypeById(id);
      if (product) {
        return response.status(200).json(product);
      }
      return response
        .status(404)
        .json({ message: "product type cannot be found" });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

productTypeRouter.post(
  "/",
  authenticateUser,
  body("product_type_code").isString(),
  body("product_type_name").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    try {
      const productTypeData: Omit<ProductType, "id"> = request.body;
      const newProductType = await ProductTypeService.createProductType({
        product_type_code: productTypeData.product_type_code,
        product_type_name: productTypeData.product_type_name,
      });
      return response.status(201).json(newProductType);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

productTypeRouter.put(
  "/:id",
  authenticateUser,
  body("product_type_code").isString(),
  body("product_type_name").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const updatedDataProductYpe: Omit<ProductType, "id"> = request.body;
      const updatedProductType = await ProductTypeService.updateProductType(
        updatedDataProductYpe,
        id
      );
      return response.status(200).json(updatedProductType);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

productTypeRouter.delete(
  "/:id",
  authenticateUser,
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      await ProductTypeService.deleteProductType(id);
      return response.status(200).json("Product type successfully deleted.");
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);
