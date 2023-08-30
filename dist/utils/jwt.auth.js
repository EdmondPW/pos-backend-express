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
exports.verifyTokenAuth = exports.generateRefreshToken = exports.generateAccessToken = exports.comparePasswords = exports.hashPassword = void 0;
// utils/auth.ts
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const saltRounds = 10;
const accessTokenSecret = process.env.ACCESS_SECRET_TOKEN;
const refreshTokenSecret = process.env.REFRESH_SECRET_TOKEN;
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
    return hashedPassword;
});
exports.hashPassword = hashPassword;
const comparePasswords = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const match = yield bcrypt_1.default.compare(password, hashedPassword);
    return match;
});
exports.comparePasswords = comparePasswords;
const generateAccessToken = (user) => {
    const accessToken = jsonwebtoken_1.default.sign({ user }, accessTokenSecret, {
        expiresIn: "1d",
    });
    return accessToken;
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    const refreshToken = jsonwebtoken_1.default.sign({ user }, refreshTokenSecret, {
        expiresIn: "1d",
    });
    return refreshToken;
};
exports.generateRefreshToken = generateRefreshToken;
const verifyTokenAuth = (token, secret = refreshTokenSecret) => {
    const decoded = jsonwebtoken_1.default.verify(token, secret);
    return decoded;
};
exports.verifyTokenAuth = verifyTokenAuth;
//# sourceMappingURL=jwt.auth.js.map