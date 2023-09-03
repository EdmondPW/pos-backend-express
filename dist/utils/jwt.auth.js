// utils/auth.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
const saltRounds = 10;
const accessTokenSecret = process.env.ACCESS_SECRET_TOKEN;
const refreshTokenSecret = process.env.REFRESH_SECRET_TOKEN;
export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};
export const comparePasswords = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
};
export const generateAccessToken = (user) => {
    const accessToken = jwt.sign({ user }, accessTokenSecret, {
        expiresIn: "1d",
    });
    return accessToken;
};
export const generateRefreshToken = (user) => {
    const refreshToken = jwt.sign({ user }, refreshTokenSecret, {
        expiresIn: "1d",
    });
    return refreshToken;
};
export const verifyTokenAuth = (token, secret = refreshTokenSecret) => {
    const decoded = jwt.verify(token, secret);
    return decoded;
};
//# sourceMappingURL=jwt.auth.js.map