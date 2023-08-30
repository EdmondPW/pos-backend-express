"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemTransactionRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const authenticate_middleware_js_1 = __importDefault(require("../middleware/authenticate.middleware.js"));
const ItemTransactionService = __importStar(require("./item_transaction.service.js"));
exports.itemTransactionRouter = express_1.default.Router();
exports.itemTransactionRouter.get("/", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield ItemTransactionService.getAllItemTransaction();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.itemTransactionRouter.get("/:id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        const itemTransaction = yield ItemTransactionService.getOneItemTransactionById(id);
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
}));
exports.itemTransactionRouter.post("/last-login/:user_id", authenticate_middleware_js_1.default, (0, express_validator_1.body)("lastLogin").isDate(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Request");
    console.log(request.params.user_id);
    const id = parseInt(request.params.user_id, 10);
    const lastLogin = request.body;
    try {
        const itemTransaction = yield ItemTransactionService.getAllItemTransactionAfterLastLoginDate(lastLogin, id);
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
}));
exports.itemTransactionRouter.post("/by-transaction-id/:transaction_id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Request");
    console.log(request.params.transaction_id);
    const id = parseInt(request.params.transaction_id, 10);
    try {
        const itemTransaction = yield ItemTransactionService.getOneItemTransactionByTransactionId(id);
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
}));
exports.itemTransactionRouter.post("/", authenticate_middleware_js_1.default, (0, express_validator_1.body)("quantity").isInt(), (0, express_validator_1.body)("product_id").isInt(), (0, express_validator_1.body)("sales_transaction_id").isInt(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const itemTransactionData = request.body;
        const newCustomerType = yield ItemTransactionService.createItemTransaction({
            quantity: itemTransactionData.quantity,
            product_id: itemTransactionData.product_id,
            sales_transaction_id: itemTransactionData.sales_transaction_id,
        });
        return response.status(201).json(newCustomerType);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.itemTransactionRouter.put("/:id", authenticate_middleware_js_1.default, (0, express_validator_1.body)("quantity").isInt(), (0, express_validator_1.body)("product_id").isInt(), (0, express_validator_1.body)("sales_transaction_id").isInt(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataItemTransaction = request.body;
        const updatedSalesTransaction = yield ItemTransactionService.updateItemTransaction(updatedDataItemTransaction, id);
        return response.status(200).json(updatedSalesTransaction);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
//# sourceMappingURL=item_transaction.router.js.map