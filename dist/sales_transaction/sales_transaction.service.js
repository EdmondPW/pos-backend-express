import { db } from "../utils/db.server.js";
export const getAllSalesTransaction = async () => {
    return await db.sales_transaction.findMany({
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
};
export const getCountOfThisMonthTransaction = async () => {
    console.log("try one");
    const currentTime = new Date();
    const minusSeven = 7 * 60 * 60 * 1000;
    const currentLocalDate = new Date(currentTime.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const yearMonth = `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
    const currentMonth = new Date(yearMonth);
    console.log(currentMonth);
    return await db.sales_transaction.count({
        where: {
            createdAt: {
                gt: currentMonth,
            },
        },
    });
};
export const getAllSalesTransactionAfterLastLoginDate = async (lastLogin, id) => {
    console.log(`test1`);
    const minusSeven = 7 * 60 * 60 * 1000;
    const originalLastLogin = new Date(lastLogin.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const localTimeLastLogin = new Date(originalLastLogin.getTime() - minusSeven);
    // const tempData: SalesTransactionRead[] = [];
    return await db.sales_transaction.findMany({
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
};
export const getOneSalesTransactionById = async (id) => {
    const searchResult = await db.sales_transaction.findFirst({
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
};
export const getOneSalesTransactionByUserId = async (id) => {
    const searchResult = await db.sales_transaction.findMany({
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
};
export const createSalesTransaction = async (sales_transaction) => {
    const { sales_transaction_number, sales_transaction_status, total_price, total_discount, total_paid_cash, total_paid_debit, total_paid_credit, total_paid_transfer, total_paid_ojol, total_nett, cash_back, user_id, customer_type_id, } = sales_transaction;
    return await db.sales_transaction.create({
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
};
export const updateSalesTransaction = async (sales_transaction, id) => {
    const { sales_transaction_number, sales_transaction_status, total_price, total_discount, total_paid_cash, total_paid_debit, total_paid_credit, total_paid_transfer, total_paid_ojol, total_nett, cash_back, user_id, customer_type_id, } = sales_transaction;
    return await db.sales_transaction.update({
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
};
export const deleteSalesTransaction = async (id) => {
    await db.sales_transaction.delete({
        where: {
            id: id,
        },
    });
};
//# sourceMappingURL=sales_transaction.service.js.map