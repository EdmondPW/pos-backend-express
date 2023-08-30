"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getOneProductById = exports.getAllProducts = void 0;
const db_server_js_1 = require("../utils/db.server.js");
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_server_js_1.db.product.findMany({
        select: {
            id: true,
            product_code: true,
            product_name: true,
            price: true,
            stock: true,
            product_type: {
                select: {
                    id: true,
                    product_type_code: true,
                    product_type_name: true,
                },
            },
        },
    });
});
exports.getAllProducts = getAllProducts;
const getOneProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.product.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            product_code: true,
            product_name: true,
            price: true,
            stock: true,
            product_type: {
                select: {
                    id: true,
                    product_type_code: true,
                    product_type_name: true,
                },
            },
        },
    });
    return searchResult;
});
exports.getOneProductById = getOneProductById;
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_code, product_name, price, stock, product_type_id } = product;
    return yield db_server_js_1.db.product.create({
        data: {
            product_code: product_code,
            product_name: product_name,
            price: price,
            stock: stock,
            product_type_id: product_type_id,
        },
        select: {
            id: true,
            product_code: true,
            product_name: true,
            price: true,
            stock: true,
            product_type: {
                select: {
                    id: true,
                    product_type_code: true,
                    product_type_name: true,
                },
            },
        },
    });
});
exports.createProduct = createProduct;
const updateProduct = (product, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_code, product_name, price, stock, product_type_id } = product;
    return yield db_server_js_1.db.product.update({
        where: {
            id: id,
        },
        data: {
            product_code,
            product_name,
            price,
            stock,
            product_type_id: product_type_id,
        },
        select: {
            id: true,
            product_code: true,
            product_name: true,
            price: true,
            stock: true,
            product_type: {
                select: {
                    id: true,
                    product_type_code: true,
                    product_type_name: true,
                },
            },
        },
    });
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_js_1.db.product.delete({
        where: {
            id: id,
        },
    });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.service.js.map