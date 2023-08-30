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
exports.deleteSalesTransaction = exports.updateSalesTransaction = exports.createSalesTransaction = exports.getOneSalesTransactionByUserId = exports.getOneSalesTransactionById = exports.getAllSalesTransactionAfterLastLoginDate = exports.getCountOfThisMonthTransaction = exports.getAllSalesTransaction = void 0;
const db_server_js_1 = require("../utils/db.server.js");
const getAllSalesTransaction = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_server_js_1.db.sales_transaction.findMany({
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
    });
});
exports.getAllSalesTransaction = getAllSalesTransaction;
const getCountOfThisMonthTransaction = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("try one");
    const currentTime = new Date();
    const minusSeven = 7 * 60 * 60 * 1000;
    const currentLocalDate = new Date(currentTime.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const yearMonth = `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
    const currentMonth = new Date(yearMonth);
    console.log(currentMonth);
    return yield db_server_js_1.db.sales_transaction.count({
        where: {
            createdAt: {
                gt: currentMonth,
            },
        },
    });
});
exports.getCountOfThisMonthTransaction = getCountOfThisMonthTransaction;
const getAllSalesTransactionAfterLastLoginDate = (lastLogin, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`test1`);
    const minusSeven = 7 * 60 * 60 * 1000;
    const originalLastLogin = new Date(lastLogin.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const localTimeLastLogin = new Date(originalLastLogin.getTime() - minusSeven);
    // const tempData: SalesTransactionRead[] = [];
    return yield db_server_js_1.db.sales_transaction.findMany({
        where: {
            user_id: id,
            createdAt: {
                gt: localTimeLastLogin,
            },
        },
        select: {
            id: true,
            sales_transaction_number: true,
            sales_transaction_status: true,
            createdAt: true,
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
    });
});
exports.getAllSalesTransactionAfterLastLoginDate = getAllSalesTransactionAfterLastLoginDate;
const getOneSalesTransactionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.sales_transaction.findFirst({
        where: {
            id: id,
        },
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
            item_transaction: {
                select: {
                    id: true,
                    quantity: true,
                    product: {
                        select: {
                            id: true,
                            product_code: true,
                            product_name: true,
                            price: true,
                            product_type: {
                                select: {
                                    id: true,
                                    product_type_code: true,
                                    product_type_name: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    return searchResult;
});
exports.getOneSalesTransactionById = getOneSalesTransactionById;
const getOneSalesTransactionByUserId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.sales_transaction.findMany({
        where: {
            user_id: id,
        },
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
            item_transaction: {
                select: {
                    id: true,
                    quantity: true,
                    product: {
                        select: {
                            id: true,
                            product_code: true,
                            product_name: true,
                            price: true,
                            product_type: {
                                select: {
                                    id: true,
                                    product_type_code: true,
                                    product_type_name: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    return searchResult;
});
exports.getOneSalesTransactionByUserId = getOneSalesTransactionByUserId;
const createSalesTransaction = (sales_transaction) => __awaiter(void 0, void 0, void 0, function* () {
    const { sales_transaction_number, sales_transaction_status, total_price, total_discount, total_paid_cash, total_paid_debit, total_paid_credit, total_paid_transfer, total_paid_ojol, total_nett, cash_back, user_id, customer_type_id, } = sales_transaction;
    return yield db_server_js_1.db.sales_transaction.create({
        data: {
            sales_transaction_number: sales_transaction_number,
            sales_transaction_status: sales_transaction_status,
            total_price: total_price,
            total_discount: total_discount,
            total_paid_cash: total_paid_cash,
            total_paid_debit: total_paid_debit,
            total_paid_credit: total_paid_credit,
            total_paid_transfer: total_paid_transfer,
            total_paid_ojol: total_paid_ojol,
            total_nett: total_nett,
            cash_back: cash_back,
            user_id: user_id,
            customer_type_id: customer_type_id,
        },
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
    });
});
exports.createSalesTransaction = createSalesTransaction;
const updateSalesTransaction = (sales_transaction, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { sales_transaction_number, sales_transaction_status, total_price, total_discount, total_paid_cash, total_paid_debit, total_paid_credit, total_paid_transfer, total_paid_ojol, total_nett, cash_back, user_id, customer_type_id, } = sales_transaction;
    return yield db_server_js_1.db.sales_transaction.update({
        where: {
            id: id,
        },
        data: {
            sales_transaction_number,
            sales_transaction_status,
            total_price,
            total_discount,
            total_paid_cash,
            total_paid_debit,
            total_paid_credit: total_paid_credit,
            total_paid_transfer,
            total_paid_ojol,
            total_nett,
            cash_back,
            user_id,
            customer_type_id,
        },
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
    });
});
exports.updateSalesTransaction = updateSalesTransaction;
const deleteSalesTransaction = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_js_1.db.sales_transaction.delete({
        where: {
            id: id,
        },
    });
});
exports.deleteSalesTransaction = deleteSalesTransaction;
//# sourceMappingURL=sales_transaction.service.js.map