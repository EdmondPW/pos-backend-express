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
exports.customerTypeRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const CustomerTypeService = __importStar(require("./customer_type.service.js"));
const authenticate_middleware_js_1 = __importDefault(require("../middleware/authenticate.middleware.js"));
exports.customerTypeRouter = express_1.default.Router();
exports.customerTypeRouter.get("/", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield CustomerTypeService.getAllCustomerType();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.customerTypeRouter.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        const customerType = yield CustomerTypeService.getOneCustomerTypeById(id);
        if (customerType) {
            return response.status(200).json(customerType);
        }
        return response
            .status(404)
            .json({ message: "customer type cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.customerTypeRouter.post("/", (0, express_validator_1.body)("customer_type_code").isString(), (0, express_validator_1.body)("customer_type_name").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const customerTypeData = request.body;
        const newCustomerType = yield CustomerTypeService.createCustomerType({
            customer_type_code: customerTypeData.customer_type_code,
            customer_type_name: customerTypeData.customer_type_name,
        });
        return response.status(201).json(newCustomerType);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.customerTypeRouter.put("/:id", (0, express_validator_1.body)("customer_type_code").isString(), (0, express_validator_1.body)("customer_type_name").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataCustomerType = request.body;
        const updatedCustomerType = yield CustomerTypeService.updateCustomerType(updatedDataCustomerType, id);
        return response.status(200).json(updatedCustomerType);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.customerTypeRouter.delete("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        yield CustomerTypeService.deleteCustomerType(id);
        return response.status(200).json("Customer type successfully deleted.");
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
//# sourceMappingURL=customer_type.router.js.map