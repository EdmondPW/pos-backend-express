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
exports.deleteCustomerType = exports.updateCustomerType = exports.createCustomerType = exports.getOneCustomerTypeById = exports.getAllCustomerType = void 0;
const db_server_js_1 = require("../utils/db.server.js");
const getAllCustomerType = () => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_js_1.db.customer_type.findMany({
        select: {
            id: true,
            customer_type_code: true,
            customer_type_name: true,
        },
    });
});
exports.getAllCustomerType = getAllCustomerType;
const getOneCustomerTypeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.customer_type.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            customer_type_code: true,
            customer_type_name: true,
        },
    });
    return searchResult;
});
exports.getOneCustomerTypeById = getOneCustomerTypeById;
const createCustomerType = (customer_type) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer_type_code, customer_type_name } = customer_type;
    return db_server_js_1.db.customer_type.create({
        data: {
            customer_type_code,
            customer_type_name,
        },
        select: {
            id: true,
            customer_type_code: true,
            customer_type_name: true,
        },
    });
});
exports.createCustomerType = createCustomerType;
const updateCustomerType = (customer_type, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer_type_code, customer_type_name } = customer_type;
    return db_server_js_1.db.customer_type.update({
        where: {
            id: id,
        },
        data: {
            customer_type_code,
            customer_type_name,
        },
        select: {
            id: true,
            customer_type_code: true,
            customer_type_name: true,
        },
    });
});
exports.updateCustomerType = updateCustomerType;
const deleteCustomerType = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_js_1.db.customer_type.delete({
        where: {
            id: id,
        },
    });
});
exports.deleteCustomerType = deleteCustomerType;
//# sourceMappingURL=customer_type.service.js.map