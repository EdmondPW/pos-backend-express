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
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const ProductService = __importStar(require("./product.service.js"));
const authenticate_middleware_js_1 = __importDefault(require("../middleware/authenticate.middleware.js"));
exports.productRouter = express_1.default.Router();
exports.productRouter.get("/", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield ProductService.getAllProducts();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productRouter.get("/:id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        const product = yield ProductService.getOneProductById(id);
        if (product) {
            return response.status(200).json(product);
        }
        return response.status(404).json({ message: "product cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productRouter.post("/", authenticate_middleware_js_1.default, (0, express_validator_1.body)("product_code").isString(), (0, express_validator_1.body)("product_name").isString(), (0, express_validator_1.body)("price").isInt(), (0, express_validator_1.body)("stock").isInt(), (0, express_validator_1.body)("product_type_id").isInt(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const productData = request.body;
        const newProduct = yield ProductService.createProduct({
            product_code: productData.product_code,
            product_name: productData.product_name,
            price: productData.price,
            stock: productData.stock,
            product_type_id: productData.product_type_id,
        });
        return response.status(201).json(newProduct);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productRouter.put("/:id", authenticate_middleware_js_1.default, (0, express_validator_1.body)("product_code").isString(), (0, express_validator_1.body)("product_name").isString(), (0, express_validator_1.body)("price").isInt(), (0, express_validator_1.body)("stock").isInt(), (0, express_validator_1.body)("product_type_id").isInt(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataProduct = request.body;
        const updatedProduct = yield ProductService.updateProduct(updatedDataProduct, id);
        return response.status(200).json(updatedProduct);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.productRouter.delete("/:id", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        yield ProductService.deleteProduct(id);
        return response.status(200).json("Product successfully deleted.");
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
//# sourceMappingURL=product.router.js.map