import { db } from "../utils/db.server.js";
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken, hashPassword, verifyTokenAuth, } from "../utils/jwt.auth.js";
export const getAllUsers = async () => {
    return db.user.findMany({
        select: {
            id: true,
            user_code: true,
            name: true,
            role: true,
        },
    });
};
export const getOneUserById = async (id) => {
    const searchResult = await db.user.findFirst({
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
};
export const getOneUserByName = async (name) => {
    const searchResult = await db.user.findFirst({
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
};
export const createUser = async (user, password) => {
    const { user_code, name, role } = user;
    const hashPassword_ = await hashPassword(password);
    return db.user.create({
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
};
export const updateUser = async (user, id) => {
    const { user_code, name, role } = user;
    return db.user.update({
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
};
export const updateUserPassword = async (id, password) => {
    const hashPassword_ = await hashPassword(password);
    return db.user.update({
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
};
export const deleteUser = async (id) => {
    await db.user.delete({
        where: {
            id: id,
        },
    });
};
export const loginUser = async (user) => {
    let loginResponse = {
        message: "",
        accessToken: "",
        refreshToken: "",
        status: false,
    };
    const findUser = await db.user.findFirst({
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
    if (!findUser?.name) {
        loginResponse.status = false;
        loginResponse.message = "User not found";
        return loginResponse;
    }
    const verifyPassword = await bcrypt.compare(user.password, findUser.password);
    if (verifyPassword == false) {
        loginResponse.status = false;
        loginResponse.message = "Password not correct";
        return loginResponse;
    }
    const accessToken = generateAccessToken({
        id: findUser.id,
        name: findUser.name,
        user_code: findUser.user_code,
        role: findUser.role,
    });
    const refreshToken = generateRefreshToken({
        id: findUser.id,
        name: findUser.name,
        user_code: findUser.user_code,
        role: findUser.role,
    });
    const time = new Date();
    time.setHours(time.getHours() + 7);
    try {
        await db.user.update({
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
};
export const refreshTokenUser = async (refreshToken, id) => {
    let result = { message: "", status: false, data: "" };
    const checkRefreshToken = await db.user.findFirst({
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
    if (checkRefreshToken?.refresh_token == refreshToken) {
        const decoded = verifyTokenAuth(refreshToken);
        const decodedUser = decoded;
        const accessToken = generateAccessToken(decodedUser);
        result.data = accessToken;
        result.status = true;
        result.message = "Access token refreshed!";
    }
    else {
        result.message = "This is not this user's token.";
    }
    return result;
};
export const logout = async (refreshToken) => {
    let result = { message: "", status: false };
    const findUser = await db.user.findFirst({
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
            await db.user.update({
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
};
//# sourceMappingURL=user.service.js.map