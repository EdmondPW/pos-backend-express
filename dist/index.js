import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./user/user.router.js";
import { productRouter } from "./product/product.router.js";
import { customerTypeRouter } from "./customer_type/customer_type.router.js";
import { productTypeRouter } from "./product_type/product_type.router.js";
import { salesTransactionRouter } from "./sales_transaction/sales_transaction.router.js";
import { itemTransactionRouter } from "./item_transaction/item_transaction.router.js";
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/customer-type", customerTypeRouter);
app.use("/api/product-type", productTypeRouter);
app.use("/api/sales-transaction", salesTransactionRouter);
app.use("/api/item-transaction", itemTransactionRouter);
app.listen(PORT, () => {
    console.log(`Listening at post ${PORT}`);
});
//# sourceMappingURL=index.js.map