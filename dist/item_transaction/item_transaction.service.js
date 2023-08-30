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
exports.deleteItemTransaction = exports.updateItemTransaction = exports.createItemTransaction = exports.getOneItemTransactionByTransactionId = exports.getOneItemTransactionById = exports.getAllItemTransactionAfterLastLoginDate = exports.getAllItemTransaction = void 0;
const db_server_js_1 = require("../utils/db.server.js");
const getAllItemTransaction = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_server_js_1.db.item_transaction.findMany({
        select: {
            id: true,
            quantity: true,
            product: {
                select: {
                    id: true,
                    product_code: true,
                    product_name: true,
                    price: true,
                    stock: true,
                    product_type: true,
                },
            },
            sales_transaction: {
                select: {
                    id: true,
                    sales_transaction_number: true,
                    sales_transaction_status: true,
                    total_price: true,
                    total_discount: true,
                    total_paid_cash: true,
                    total_paid_debit: true,
                    total_paid_credit: true,
                    total_paid_transfer: true,
                    total_paid_ojol: true,
                    total_nett: true,
                    cash_back: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            user_code: true,
                            role: true,
                        },
                    },
                    customer_type: {
                        select: {
                            id: true,
                            customer_type_code: true,
                            customer_type_name: true,
                        },
                    },
                },
            },
        },
    });
});
exports.getAllItemTransaction = getAllItemTransaction;
const getAllItemTransactionAfterLastLoginDate = (lastLogin, id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_server_js_1.db.item_transaction.findMany({
        where: {
            OR: [
                {
                    AND: {
                        updatedAt: {
                            gt: lastLogin,
                        },
                        id: id,
                    },
                },
                {
                    updatedAt: {
                        gt: lastLogin,
                    },
                },
            ],
        },
        select: {
            id: true,
            quantity: true,
            product: {
                select: {
                    id: true,
                    product_code: true,
                    product_name: true,
                    price: true,
                    stock: true,
                    product_type: true,
                },
            },
            sales_transaction: {
                select: {
                    id: true,
                    sales_transaction_number: true,
                    sales_transaction_status: true,
                    total_price: true,
                    total_discount: true,
                    total_paid_cash: true,
                    total_paid_debit: true,
                    total_paid_credit: true,
                    total_paid_transfer: true,
                    total_paid_ojol: true,
                    total_nett: true,
                    cash_back: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            user_code: true,
                            role: true,
                        },
                    },
                    customer_type: {
                        select: {
                            id: true,
                            customer_type_code: true,
                            customer_type_name: true,
                        },
                    },
                },
            },
        },
    });
});
exports.getAllItemTransactionAfterLastLoginDate = getAllItemTransactionAfterLastLoginDate;
const getOneItemTransactionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.item_transaction.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            quantity: true,
            product: {
                select: {
                    id: true,
                    product_code: true,
                    product_name: true,
                    price: true,
                    stock: true,
                    product_type: true,
                },
            },
            sales_transaction: {
                select: {
                    id: true,
                    sales_transaction_number: true,
                    sales_transaction_status: true,
                    total_price: true,
                    total_discount: true,
                    total_paid_cash: true,
                    total_paid_debit: true,
                    total_paid_credit: true,
                    total_paid_transfer: true,
                    total_paid_ojol: true,
                    total_nett: true,
                    cash_back: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            user_code: true,
                            role: true,
                        },
                    },
                    customer_type: {
                        select: {
                            id: true,
                            customer_type_code: true,
                            customer_type_name: true,
                        },
                    },
                },
            },
        },
    });
    return searchResult;
});
exports.getOneItemTransactionById = getOneItemTransactionById;
const getOneItemTransactionByTransactionId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.item_transaction.findMany({
        where: {
            sales_transaction_id: id,
        },
        select: {
            id: true,
            quantity: true,
            product: {
                select: {
                    id: true,
                    product_code: true,
                    product_name: true,
                    price: true,
                    stock: true,
                    product_type: true,
                },
            },
            sales_transaction: {
                select: {
                    id: true,
                    sales_transaction_number: true,
                    sales_transaction_status: true,
                    total_price: true,
                    total_discount: true,
                    total_paid_cash: true,
                    total_paid_debit: true,
                    total_paid_credit: true,
                    total_paid_transfer: true,
                    total_paid_ojol: true,
                    total_nett: true,
                    cash_back: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            user_code: true,
                            role: true,
                        },
                    },
                    customer_type: {
                        select: {
                            id: true,
                            customer_type_code: true,
                            customer_type_name: true,
                        },
                    },
                },
            },
        },
    });
    return searchResult;
});
exports.getOneItemTransactionByTransactionId = getOneItemTransactionByTransactionId;
const createItemTransaction = (item_transaction) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantity, product_id, sales_transaction_id } = item_transaction;
    return yield db_server_js_1.db.item_transaction.create({
        data: {
            quantity,
            product_id,
            sales_transaction_id,
        },
        select: {
            id: true,
            quantity: true,
            product: {
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
            },
            sales_transaction: {
                select: {
                    id: true,
                    sales_transaction_number: true,
                    sales_transaction_status: true,
                    total_price: true,
                    total_discount: true,
                    total_paid_cash: true,
                    total_paid_debit: true,
                    total_paid_credit: true,
                    total_paid_transfer: true,
                    total_paid_ojol: true,
                    total_nett: true,
                    cash_back: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            user_code: true,
                            role: true,
                        },
                    },
                    customer_type: {
                        select: {
                            id: true,
                            customer_type_code: true,
                            customer_type_name: true,
                        },
                    },
                },
            },
        },
    });
});
exports.createItemTransaction = createItemTransaction;
const updateItemTransaction = (item_transaction, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantity, product_id, sales_transaction_id } = item_transaction;
    return yield db_server_js_1.db.item_transaction.update({
        where: {
            id: id,
        },
        data: {
            quantity,
            product_id,
            sales_transaction_id,
        },
        select: {
            id: true,
            quantity: true,
            product: {
                select: {
                    id: true,
                    product_code: true,
                    product_name: true,
                    price: true,
                    stock: true,
                    product_type: true,
                },
            },
            sales_transaction: {
                select: {
                    id: true,
                    sales_transaction_number: true,
                    sales_transaction_status: true,
                    total_price: true,
                    total_discount: true,
                    total_paid_cash: true,
                    total_paid_debit: true,
                    total_paid_credit: true,
                    total_paid_transfer: true,
                    total_paid_ojol: true,
                    total_nett: true,
                    cash_back: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            user_code: true,
                            role: true,
                        },
                    },
                    customer_type: {
                        select: {
                            id: true,
                            customer_type_code: true,
                            customer_type_name: true,
                        },
                    },
                },
            },
        },
    });
});
exports.updateItemTransaction = updateItemTransaction;
const deleteItemTransaction = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_js_1.db.item_transaction.delete({
        where: {
            id: id,
        },
    });
});
exports.deleteItemTransaction = deleteItemTransaction;
//# sourceMappingURL=item_transaction.service.js.map