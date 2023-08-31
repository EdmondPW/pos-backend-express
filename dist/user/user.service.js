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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshTokenUser = exports.loginUser = exports.deleteUser = exports.updateUserPassword = exports.updateUser = exports.createUser = exports.getOneUserByName = exports.getOneUserById = exports.getAllUsers = void 0;
const db_server_js_1 = require("../utils/db.server.js");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_auth_js_1 = require("../utils/jwt.auth.js");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_js_1.db.user.findMany({
        select: {
            id: true,
            user_code: true,
            name: true,
            role: true,
        },
    });
});
exports.getAllUsers = getAllUsers;
const getOneUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.user.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            user_code: true,
            name: true,
            role: true,
            last_login: true,
        },
    });
    return searchResult;
});
exports.getOneUserById = getOneUserById;
const getOneUserByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const searchResult = yield db_server_js_1.db.user.findFirst({
        where: {
            name: name,
        },
        select: {
            id: true,
            user_code: true,
            name: true,
            role: true,
            last_login: true,
        },
    });
    return searchResult;
});
exports.getOneUserByName = getOneUserByName;
const createUser = (user, password) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_code, name, role } = user;
    const hashPassword_ = yield (0, jwt_auth_js_1.hashPassword)(password);
    return db_server_js_1.db.user.create({
        data: {
            user_code,
            name,
            password: hashPassword_,
            role: role,
        },
        select: {
            id: true,
            user_code: true,
            name: true,
            role: true,
        },
    });
});
exports.createUser = createUser;
const updateUser = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_code, name, role } = user;
    return db_server_js_1.db.user.update({
        where: {
            id: id,
        },
        data: {
            user_code: user_code,
            name: name,
            role: role,
        },
        select: {
            id: true,
            user_code: true,
            name: true,
            role: true,
        },
    });
});
exports.updateUser = updateUser;
const updateUserPassword = (id, password) => __awaiter(void 0, void 0, void 0, function* () {
    const hashPassword_ = yield (0, jwt_auth_js_1.hashPassword)(password);
    return db_server_js_1.db.user.update({
        where: {
            id: id,
        },
        data: {
            password: hashPassword_,
        },
        select: {
            id: true,
            user_code: true,
            name: true,
            role: true,
        },
    });
});
exports.updateUserPassword = updateUserPassword;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_js_1.db.user.delete({
        where: {
            id: id,
        },
    });
});
exports.deleteUser = deleteUser;
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let loginResponse = {
        message: "",
        accessToken: "",
        refreshToken: "",
        status: false,
    };
    const findUser = yield db_server_js_1.db.user.findFirst({
        where: {
            name: user.name,
        },
        select: {
            id: true,
            name: true,
            password: true,
            user_code: true,
            refresh_token: true,
            role: true,
        },
    });
    if (!(findUser === null || findUser === void 0 ? void 0 : findUser.name)) {
        loginResponse.status = false;
        loginResponse.message = "User not found";
        return loginResponse;
    }
    const verifyPassword = yield bcryptjs_1.default.compare(user.password, findUser.password);
    if (verifyPassword == false) {
        loginResponse.status = false;
        loginResponse.message = "Password not correct";
        return loginResponse;
    }
    const accessToken = (0, jwt_auth_js_1.generateAccessToken)({
        id: findUser.id,
        name: findUser.name,
        user_code: findUser.user_code,
        role: findUser.role,
    });
    const refreshToken = (0, jwt_auth_js_1.generateRefreshToken)({
        id: findUser.id,
        name: findUser.name,
        user_code: findUser.user_code,
        role: findUser.role,
    });
    const time = new Date();
    time.setHours(time.getHours() + 7);
    try {
        yield db_server_js_1.db.user.update({
            where: {
                id: findUser.id,
            },
            data: {
                refresh_token: refreshToken,
                last_login: time,
            },
        });
    }
    catch (error) {
        console.log(error);
    }
    loginResponse.message = "Login success";
    loginResponse.status = true;
    loginResponse.accessToken = accessToken;
    loginResponse.refreshToken = refreshToken;
    return loginResponse;
});
exports.loginUser = loginUser;
const refreshTokenUser = (refreshToken, id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = { message: "", status: false, data: "" };
    const checkRefreshToken = yield db_server_js_1.db.user.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            refresh_token: true,
        },
    });
    if (!checkRefreshToken) {
        result.message = "User refresh token not found.";
        return result;
    }
    if ((checkRefreshToken === null || checkRefreshToken === void 0 ? void 0 : checkRefreshToken.refresh_token) == refreshToken) {
        const decoded = (0, jwt_auth_js_1.verifyTokenAuth)(refreshToken);
        const decodedUser = decoded;
        const accessToken = (0, jwt_auth_js_1.generateAccessToken)(decodedUser);
        result.data = accessToken;
        result.status = true;
        result.message = "Access token refreshed!";
    }
    else {
        result.message = "This is not this user's token.";
    }
    return result;
});
exports.refreshTokenUser = refreshTokenUser;
const logout = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    let result = { message: "", status: false };
    const findUser = yield db_server_js_1.db.user.findFirst({
        where: {
            refresh_token: refreshToken,
        },
        select: {
            id: true,
        },
    });
    if (!findUser) {
        result.message = "user not found!";
        result.status = false;
    }
    else {
        try {
            yield db_server_js_1.db.user.update({
                where: {
                    id: findUser.id,
                },
                data: {
                    refresh_token: null,
                },
            });
            console.log("update refresh token in database");
            result.message = "refresh token delete";
            result.status = true;
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    return result;
});
exports.logout = logout;
//# sourceMappingURL=user.service.js.map