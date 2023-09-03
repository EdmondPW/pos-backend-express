import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import type { SalesTransactionWrite } from "./sales_transaction.service.js";

import authenticateUser from "../middleware/authenticate.middleware.js";
import * as SalesTransactionService from "./sales_transaction.service.js";

export const salesTransactionRouter = express.Router();

salesTransactionRouter.get(
  "/",
  authenticateUser,
  async (request: Request, response: Response) => {
    try {
      const users = await SalesTransactionService.getAllSalesTransaction();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

salesTransactionRouter.get(
  "/:id",
  authenticateUser,
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      const user = await SalesTransactionService.getOneSalesTransactionById(id);
      if (user) {
        return response.status(200).json(user);
      }
      return response
        .status(404)
        .json({ message: "Sales transaction cannot be found" });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

salesTransactionRouter.get(
  "/by-user-id/:user_id",
  authenticateUser,
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.user_id, 10);
    try {
      const user = await SalesTransactionService.getOneSalesTransactionByUserId(
        id
      );
      if (user) {
        return response.status(200).json(user);
      }
      return response
        .status(404)
        .json({ message: "Sales transaction cannot be found" });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

salesTransactionRouter.post(
  "/count",
  async (request: Request, response: Response) => {
    try {
      const count =
        await SalesTransactionService.getCountOfThisMonthTransaction();
      if (count) {
        return response.status(200).json(count);
      }
      return response
        .status(404)
        .json({ message: "Sales transaction cannot be found" });
    } catch (error) {
      return response.status(500).json(`this is: ${error}`);
    }
  }
);

salesTransactionRouter.post(
  "/last-login/:user_id",
  authenticateUser,
  body("lastLogin").isDate(),
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.user_id);
    const { lastLogin }: { lastLogin: Date } = request.body;
    try {
      const user =
        await SalesTransactionService.getAllSalesTransactionAfterLastLoginDate(
          lastLogin,
          id
        );
      if (user) {
        return response.status(200).json(user);
      }
      return response
        .status(404)
        .json({ message: "Sales transaction cannot be found" });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

salesTransactionRouter.post(
  "/",
  authenticateUser,
  body("sales_transaction_number").isString(),
  body("sales_transaction_status").isString(),
  body("total_price").isInt(),
  body("total_discount").isInt(),
  body("total_paid_cash").isInt(),
  body("total_paid_debit").isInt(),
  body("total_paid_credit").isInt(),
  body("total_paid_transfer").isInt(),
  body("total_paid_ojol").isInt(),
  body("total_nett").isInt(),
  body("cash_back").isInt(),
  body("user_id").isInt(),
  body("customer_type_id").isInt(),
  async (request: Request, response: Response) => {
    console.log(request.body);
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ error: errors.array(), message: "data not complete" });
    }
    try {
      const salesTransactionData: Omit<SalesTransactionWrite, "id"> =
        request.body;
      const newSalesTransaction =
        await SalesTransactionService.createSalesTransaction(
          salesTransactionData
        );
      return response.status(201).json(newSalesTransaction);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

// total_paid_ojol: true,
//       total_nett: true,
//       cash_back: true,

salesTransactionRouter.put(
  "/:id",
  authenticateUser,
  body("sales_transaction_number").isString(),
  body("sales_transaction_status").isString(),
  body("total_price").isInt(),
  body("total_discount").isInt(),
  body("total_paid_cash").isInt(),
  body("total_paid_debit").isInt(),
  body("total_paid_credit").isInt(),
  body("total_paid_transfer").isInt(),
  body("total_paid_ojol").isInt(),
  body("total_nett").isInt(),
  body("cash_back").isInt(),
  body("user_id").isInt(),
  body("customer_type_id").isInt(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const updatedDataSalesTransaction: Omit<SalesTransactionWrite, "id"> =
        request.body;
      const updatedSalesTransaction =
        await SalesTransactionService.updateSalesTransaction(
          updatedDataSalesTransaction,
          id
        );
      return response.status(200).json(updatedSalesTransaction);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

salesTransactionRouter.delete(
  "/:id",
  authenticateUser,
  async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
      await SalesTransactionService.deleteSalesTransaction(id);
      return response
        .status(200)
        .json("Sales transaction successfully deleted.");
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);
