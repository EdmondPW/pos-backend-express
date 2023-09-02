import { db } from "../utils/db.server.js";
export const getAllCustomerType = async () => {
    return db.customer_type.findMany({
        select: {
            id: true,
            customer_type_code: true,
            customer_type_name: true,
        },
    });
};
export const getOneCustomerTypeById = async (id) => {
    const searchResult = await db.customer_type.findFirst({
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
};
export const createCustomerType = async (customer_type) => {
    const { customer_type_code, customer_type_name } = customer_type;
    return db.customer_type.create({
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
};
export const updateCustomerType = async (customer_type, id) => {
    const { customer_type_code, customer_type_name } = customer_type;
    return db.customer_type.update({
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
};
export const deleteCustomerType = async (id) => {
    await db.customer_type.delete({
        where: {
            id: id,
        },
    });
};
//# sourceMappingURL=customer_type.service.js.map