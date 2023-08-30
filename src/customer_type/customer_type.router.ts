import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as CustomerTypeService from "./customer_type.service.js";
import authenticateUser from "../middleware/authenticate.middleware.js";

export const customerTypeRouter = express.Router();

type CustomerType = {
  id: number;
  customer_type_code: string;
  customer_type_name: string;
};

customerTypeRouter.get(
  "/",
  authenticateUser,
  async (request: Request, response: Response) => {
    try {
      const users = await CustomerTypeService.getAllCustomerType();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

customerTypeRouter.get("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const customerType = await CustomerTypeService.getOneCustomerTypeById(id);
    if (customerType) {
      return response.status(200).json(customerType);
    }
    return response
      .status(404)
      .json({ message: "customer type cannot be found" });
  } catch (error) {
    return response.status(500).json(error);
  }
});

customerTypeRouter.post(
  "/",
  body("customer_type_code").isString(),
  body("customer_type_name").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    try {
      const customerTypeData: Omit<CustomerType, "id"> = request.body;
      const newCustomerType = await CustomerTypeService.createCustomerType({
        customer_type_code: customerTypeData.customer_type_code,
        customer_type_name: customerTypeData.customer_type_name,
      });
      return response.status(201).json(newCustomerType);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

customerTypeRouter.put(
  "/:id",
  body("customer_type_code").isString(),
  body("customer_type_name").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const updatedDataCustomerType: Omit<CustomerType, "id"> = request.body;
      const updatedCustomerType = await CustomerTypeService.updateCustomerType(
        updatedDataCustomerType,
        id
      );
      return response.status(200).json(updatedCustomerType);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

customerTypeRouter.delete(
  "/:id",
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      await CustomerTypeService.deleteCustomerType(id);
      return response.status(200).json("Customer type successfully deleted.");
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);
