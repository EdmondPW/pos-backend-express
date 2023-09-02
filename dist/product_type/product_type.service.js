import { db } from "../utils/db.server.js";
export const getAllProductType = async () => {
    return db.product_type.findMany({
        select: {
            id: true,
            product_type_code: true,
            product_type_name: true,
        },
    });
};
export const getOneProductTypeById = async (id) => {
    const searchResult = await db.product_type.findFirst({
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
};
export const createProductType = async (product_type) => {
    const { product_type_code, product_type_name } = product_type;
    return db.product_type.create({
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
};
export const updateProductType = async (customer_type, id) => {
    const { product_type_code, product_type_name } = customer_type;
    return db.product_type.update({
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
};
export const deleteProductType = async (id) => {
    await db.product_type.delete({
        where: {
            id: id,
        },
    });
};
//# sourceMappingURL=product_type.service.js.map