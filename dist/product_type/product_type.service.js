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
exports.deleteProductType = exports.updateProductType = exports.createProductType = exports.getOneProductTypeById = exports.getAllProductType = void 0;
const db_server_js_1 = require("../utils/db.server.js");
const getAllProductType = () => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_js_1.db.product_type.findMany({
        select: {
            id: true,
            product_type_code: true,
            product_type_name: true,
        },
    });
});
exports.getAllProductType = getAllProductType;
const getOneProductTypeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.product_type.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            product_type_code: true,
            product_type_name: true,
        },
    });
    return searchResult;
});
exports.getOneProductTypeById = getOneProductTypeById;
const createProductType = (product_type) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_type_code, product_type_name } = product_type;
    return db_server_js_1.db.product_type.create({
        data: {
            product_type_code,
            product_type_name,
        },
        select: {
            id: true,
            product_type_code: true,
            product_type_name: true,
        },
    });
});
exports.createProductType = createProductType;
const updateProductType = (customer_type, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_type_code, product_type_name } = customer_type;
    return db_server_js_1.db.product_type.update({
        where: {
            id: id,
        },
        data: {
            product_type_code,
            product_type_name,
        },
        select: {
            id: true,
            product_type_code: true,
            product_type_name: true,
        },
    });
});
exports.updateProductType = updateProductType;
const deleteProductType = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_js_1.db.product_type.delete({
        where: {
            id: id,
        },
    });
});
exports.deleteProductType = deleteProductType;
//# sourceMappingURL=product_type.service.js.map