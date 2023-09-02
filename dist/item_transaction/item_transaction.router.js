import express from "express";
import { body, validationResult } from "express-validator";
import authenticateUser from "../middleware/authenticate.middleware.js";
import * as ItemTransactionService from "./item_transaction.service.js";
export const itemTransactionRouter = express.Router();
itemTransactionRouter.get("/", authenticateUser, async (request, response) => {
    try {
        const users = await ItemTransactionService.getAllItemTransaction();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
itemTransactionRouter.get("/:id", authenticateUser, async (request, response) => {
    const id = parseInt(request.params.id, 10);
    try {
        const itemTransaction = await ItemTransactionService.getOneItemTransactionById(id);
        if (itemTransaction) {
            return response.status(200).json(itemTransaction);
        }
        return response
            .status(404)
            .json({ message: "item transaction cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
itemTransactionRouter.post("/last-login/:user_id", authenticateUser, body("lastLogin").isDate(), async (request, response) => {
    console.log("Request");
    console.log(request.params.user_id);
    const id = parseInt(request.params.user_id, 10);
    const lastLogin = request.body;
    try {
        const itemTransaction = await ItemTransactionService.getAllItemTransactionAfterLastLoginDate(lastLogin, id);
        if (itemTransaction) {
            return response.status(200).json(itemTransaction);
        }
        return response
            .status(404)
            .json({ message: "item transaction cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
itemTransactionRouter.post("/by-transaction-id/:transaction_id", authenticateUser, async (request, response) => {
    console.log("Request");
    console.log(request.params.transaction_id);
    const id = parseInt(request.params.transaction_id, 10);
    try {
        const itemTransaction = await ItemTransactionService.getOneItemTransactionByTransactionId(id);
        if (itemTransaction) {
            return response.status(200).json(itemTransaction);
        }
        return response
            .status(404)
            .json({ message: "item transaction cannot be found" });
    }
    catch (error) {
        return response.status(500).json(`test ${error}`);
    }
});
itemTransactionRouter.post("/", authenticateUser, body("quantity").isInt(), body("product_id").isInt(), body("sales_transaction_id").isInt(), async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const itemTransactionData = request.body;
        const newCustomerType = await ItemTransactionService.createItemTransaction({
            quantity: itemTransactionData.quantity,
            product_id: itemTransactionData.product_id,
            sales_transaction_id: itemTransactionData.sales_transaction_id,
        });
        return response.status(201).json(newCustomerType);
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
itemTransactionRouter.put("/:id", authenticateUser, body("quantity").isInt(), body("product_id").isInt(), body("sales_transaction_id").isInt(), async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataItemTransaction = request.body;
        const updatedSalesTransaction = await ItemTransactionService.updateItemTransaction(updatedDataItemTransaction, id);
        return response.status(200).json(updatedSalesTransaction);
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
//# sourceMappingURL=item_transaction.router.js.map