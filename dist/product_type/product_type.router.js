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
exports.productTypeRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const ProductTypeService = __importStar(require("./product_type.service.js"));
const authenticate_middleware_js_1 = __importDefault(require("../middleware/authenticate.middleware.js"));
exports.productTypeRouter = express_1.default.Router();
exports.productTypeRouter.get("/", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield ProductTypeService.getAllProductType();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productTypeRouter.get("/:id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        const product = yield ProductTypeService.getOneProductTypeById(id);
        if (product) {
            return response.status(200).json(product);
        }
        return response
            .status(404)
            .json({ message: "product type cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productTypeRouter.post("/", authenticate_middleware_js_1.default, (0, express_validator_1.body)("product_type_code").isString(), (0, express_validator_1.body)("product_type_name").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const productTypeData = request.body;
        const newProductType = yield ProductTypeService.createProductType({
            product_type_code: productTypeData.product_type_code,
            product_type_name: productTypeData.product_type_name,
        });
        return response.status(201).json(newProductType);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productTypeRouter.put("/:id", authenticate_middleware_js_1.default, (0, express_validator_1.body)("product_type_code").isString(), (0, express_validator_1.body)("product_type_name").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataProductYpe = request.body;
        const updatedProductType = yield ProductTypeService.updateProductType(updatedDataProductYpe, id);
        return response.status(200).json(updatedProductType);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productTypeRouter.delete("/:id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        yield ProductTypeService.deleteProductType(id);
        return response.status(200).json("Product type successfully deleted.");
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
//# sourceMappingURL=product_type.router.js.map