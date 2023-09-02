import { db } from "../utils/db.server.js";
export const getAllProducts = async () => {
    return await db.product.findMany({
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
};
export const getOneProductById = async (id) => {
    const searchResult = await db.product.findFirst({
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
};
export const createProduct = async (product) => {
    const { product_code, product_name, price, stock, product_type_id } = product;
    return await db.product.create({
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
};
export const updateProduct = async (product, id) => {
    const { product_code, product_name, price, stock, product_type_id } = product;
    return await db.product.update({
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
};
export const deleteProduct = async (id) => {
    await db.product.delete({
        where: {
            id: id,
        },
    });
};
//# sourceMappingURL=product.service.js.map