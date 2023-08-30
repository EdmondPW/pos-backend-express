"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateUser = (request, response, next) => {
    const token = request.header("Authorization");
    if (!token) {
        return response.status(401).json({ message: "Authentication required" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.ACCESS_SECRET_TOKEN);
        response.locals.user = decoded.name;
        next();
    }
    catch (error) {
        response.status(401).json({ message: "Invalid token" });
    }
};
exports.default = authenticateUser;
//# sourceMappingURL=authenticate.middleware.js.map