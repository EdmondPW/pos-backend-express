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
exports.salesTransactionRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const authenticate_middleware_js_1 = __importDefault(require("../middleware/authenticate.middleware.js"));
const SalesTransactionService = __importStar(require("./sales_transaction.service.js"));
exports.salesTransactionRouter = express_1.default.Router();
exports.salesTransactionRouter.get("/", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield SalesTransactionService.getAllSalesTransaction();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.salesTransactionRouter.get("/:id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        const user = yield SalesTransactionService.getOneSalesTransactionById(id);
        if (user) {
            return response.status(200).json(user);
        }
        return response
            .status(404)
            .json({ message: "Sales transaction cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.salesTransactionRouter.get("/by-user-id/:user_id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.user_id, 10);
    try {
        const user = yield SalesTransactionService.getOneSalesTransactionByUserId(id);
        if (user) {
            return response.status(200).json(user);
        }
        return response
            .status(404)
            .json({ message: "Sales transaction cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.salesTransactionRouter.post("/count", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("get sales count this month");
    try {
        const count = yield SalesTransactionService.getCountOfThisMonthTransaction();
        if (count) {
            return response.status(200).json(count);
        }
        return response
            .status(404)
            .json({ message: "Sales transaction cannot be found" });
    }
    catch (error) {
        return response.status(500).json(`this is: ${error}`);
    }
}));
exports.salesTransactionRouter.post("/last-login/:user_id", authenticate_middleware_js_1.default, (0, express_validator_1.body)("lastLogin").isDate(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.user_id);
    const { lastLogin } = request.body;
    try {
        const user = yield SalesTransactionService.getAllSalesTransactionAfterLastLoginDate(lastLogin, id);
        if (user) {
            return response.status(200).json(user);
        }
        return response
            .status(404)
            .json({ message: "Sales transaction cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.salesTransactionRouter.post("/", authenticate_middleware_js_1.default, (0, express_validator_1.body)("sales_transaction_number").isString(), (0, express_validator_1.body)("sales_transaction_status").isString(), (0, express_validator_1.body)("total_price").isInt(), (0, express_validator_1.body)("total_discount").isInt(), (0, express_validator_1.body)("total_paid_cash").isInt(), (0, express_validator_1.body)("total_paid_debit").isInt(), (0, express_validator_1.body)("total_paid_credit").isInt(), (0, express_validator_1.body)("total_paid_transfer").isInt(), (0, express_validator_1.body)("total_paid_ojol").isInt(), (0, express_validator_1.body)("total_nett").isInt(), (0, express_validator_1.body)("cash_back").isInt(), (0, express_validator_1.body)("user_id").isInt(), (0, express_validator_1.body)("customer_type_id").isInt(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response
            .status(400)
            .json({ error: errors.array(), message: "data not complete" });
    }
    try {
        const salesTransactionData = request.body;
        const newSalesTransaction = yield SalesTransactionService.createSalesTransaction(salesTransactionData);
        return response.status(201).json(newSalesTransaction);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
// total_paid_ojol: true,
//       total_nett: true,
//       cash_back: true,
exports.salesTransactionRouter.put("/:id", authenticate_middleware_js_1.default, (0, express_validator_1.body)("sales_transaction_number").isString(), (0, express_validator_1.body)("sales_transaction_status").isString(), (0, express_validator_1.body)("total_price").isInt(), (0, express_validator_1.body)("total_discount").isInt(), (0, express_validator_1.body)("total_paid_cash").isInt(), (0, express_validator_1.body)("total_paid_debit").isInt(), (0, express_validator_1.body)("total_paid_credit").isInt(), (0, express_validator_1.body)("total_paid_transfer").isInt(), (0, express_validator_1.body)("total_paid_ojol").isInt(), (0, express_validator_1.body)("total_nett").isInt(), (0, express_validator_1.body)("cash_back").isInt(), (0, express_validator_1.body)("user_id").isInt(), (0, express_validator_1.body)("customer_type_id").isInt(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataSalesTransaction = request.body;
        const updatedSalesTransaction = yield SalesTransactionService.updateSalesTransaction(updatedDataSalesTransaction, id);
        return response.status(200).json(updatedSalesTransaction);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.salesTransactionRouter.delete("/:id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        yield SalesTransactionService.deleteSalesTransaction(id);
        return response
            .status(200)
            .json("Sales transaction successfully deleted.");
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
//# sourceMappingURL=sales_transaction.router.js.map