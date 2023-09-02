import express from "express";
import { body, validationResult } from "express-validator";
import * as ProductService from "./product.service.js";
import authenticateUser from "../middleware/authenticate.middleware.js";
export const productRouter = express.Router();
productRouter.get("/", authenticateUser, async (request, response) => {
    try {
        const users = await ProductService.getAllProducts();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
productRouter.get("/:id", authenticateUser, async (request, response) => {
    const id = parseInt(request.params.id, 10);
    try {
        const product = await ProductService.getOneProductById(id);
        if (product) {
            return response.status(200).json(product);
        }
        return response.status(404).json({ message: "product cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
productRouter.post("/", authenticateUser, body("product_code").isString(), body("product_name").isString(), body("price").isInt(), body("stock").isInt(), body("product_type_id").isInt(), async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const productData = request.body;
        const newProduct = await ProductService.createProduct({
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
});
productRouter.put("/:id", authenticateUser, body("product_code").isString(), body("product_name").isString(), body("price").isInt(), body("stock").isInt(), body("product_type_id").isInt(), async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataProduct = request.body;
        const updatedProduct = await ProductService.updateProduct(updatedDataProduct, id);
        return response.status(200).json(updatedProduct);
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
productRouter.delete("/:id", authenticateUser, async (request, response) => {
    const id = parseInt(request.params.id, 10);
    try {
        await ProductService.deleteProduct(id);
        return response.status(200).json("Product successfully deleted.");
    }
    catch (error) {
        return response.status(500).json(error);
    }
});
//# sourceMappingURL=product.router.js.map