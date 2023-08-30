"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const authenticate_middleware_js_1 = __importDefault(require("../middleware/authenticate.middleware.js"));
const UserService = __importStar(require("./user.service.js"));
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT",
    credentials: true,
};
exports.userRouter = express_1.default.Router();
// Route to get all users in table user
exports.userRouter.get("/", authenticate_middleware_js_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserService.getAllUsers();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
// Route to get specific user by ID
exports.userRouter.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 10);
    try {
        const user = yield UserService.getOneUserById(id);
        if (user) {
            return response.status(200).json(user);
        }
        return response.status(404).json({ message: "User cannot be found" });
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.userRouter.post("/", (0, express_validator_1.body)("user_code").isString(), (0, express_validator_1.body)("name").isString(), (0, express_validator_1.body)("password").isString(), (0, express_validator_1.body)("role").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const user = request.body;
        if (!user.name || !user.password || !user.user_code) {
            return response.status(400).json({
                message: "Username, password, role, and user code are required.",
            });
        }
        const checkIfUserExist = yield UserService.getOneUserByName(user.name);
        if (checkIfUserExist) {
            return response
                .status(400)
                .json({ message: "Username already exist." });
        }
        const newUser = yield UserService.createUser({ user_code: user.user_code, name: user.name, role: user.role }, user.password);
        return response.status(201).json(newUser);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
// Route to login account
exports.userRouter.post("/login", (0, express_validator_1.body)("name").isString(), (0, express_validator_1.body)("password").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    try {
        const loginUser = request.body;
        const loggingIn = yield UserService.loginUser(loginUser);
        if (!loggingIn.status) {
            return response.status(401).json(loggingIn);
        }
        else {
            response.cookie("refreshToken", loggingIn.refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            });
            return response.status(202).json({
                accessToken: loggingIn.accessToken,
                message: loggingIn.message,
                status: loggingIn.status,
            });
        }
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
// Route to refresh user access token
exports.userRouter.post("/refresh-token/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const refreshTokenFromUser = request.cookies.refreshToken;
        try {
            const refreshTokenResult = yield UserService.refreshTokenUser(refreshTokenFromUser, id);
            if (refreshTokenResult.status) {
                return response.status(202).json({
                    accessToken: refreshTokenResult.data,
                    message: refreshTokenResult.message,
                    status: refreshTokenResult.status,
                });
            }
            else {
                return response.status(401).json({
                    accessToken: "",
                    message: "Failed",
                    status: false,
                });
            }
        }
        catch (error) {
            response.status(401).json({ message: "Invalid refresh token" });
        }
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
// Route put to update user data without updating password
exports.userRouter.put("/:id", (0, express_validator_1.body)("user_code").isString(), (0, express_validator_1.body)("name").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataUser = request.body;
        const updatedUser = yield UserService.updateUser(updatedDataUser, id);
        return response.status(200).json(updatedUser);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
// Route put to update user password
exports.userRouter.put("/change-password/:id", (0, express_validator_1.body)("password").isString(), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ error: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
        const updatedDataUser = request.body.password;
        const updatedUser = yield UserService.updateUserPassword(id, updatedDataUser);
        return response.status(200).json(updatedUser);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
exports.userRouter.post("/logout", (0, cors_1.default)(corsOptions), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = request.cookies.refreshToken;
    if (refreshToken == null || refreshToken == undefined) {
        return response.status(204).json({ message: "refresh token not found" });
    }
    try {
        const updatedUser = yield UserService.logout(refreshToken);
        return response.status(200).json(updatedUser);
    }
    catch (error) {
        return response.status(500).json(error);
    }
}));
//# sourceMappingURL=user.router.js.map