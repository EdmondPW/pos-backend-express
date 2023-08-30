import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import type {
  LoginResponse,
  UserLoginData,
  refreshResult,
} from "./user.service.js";
import authenticateUser from "../middleware/authenticate.middleware.js";

import * as UserService from "./user.service.js";
import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET,POST,PUT",
  credentials: true,
};

export const userRouter = express.Router();

type DataUser = {
  user_code: string;
  name: string;
  password: string;
  role: string;
};

// Route to get all users in table user
userRouter.get(
  "/",
  authenticateUser,
  async (request: Request, response: Response) => {
    try {
      const users = await UserService.getAllUsers();
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

// Route to get specific user by ID
userRouter.get("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const user = await UserService.getOneUserById(id);
    if (user) {
      return response.status(200).json(user);
    }
    return response.status(404).json({ message: "User cannot be found" });
  } catch (error) {
    return response.status(500).json(error);
  }
});

userRouter.post(
  "/",
  body("user_code").isString(),
  body("name").isString(),
  body("password").isString(),
  body("role").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    try {
      const user: DataUser = request.body;
      if (!user.name || !user.password || !user.user_code) {
        return response.status(400).json({
          message: "Username, password, role, and user code are required.",
        });
      }
      const checkIfUserExist = await UserService.getOneUserByName(user.name);
      if (checkIfUserExist) {
        return response
          .status(400)
          .json({ message: "Username already exist." });
      }
      const newUser = await UserService.createUser(
        { user_code: user.user_code, name: user.name, role: user.role },
        user.password
      );
      return response.status(201).json(newUser);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

// Route to login account
userRouter.post(
  "/login",
  body("name").isString(),
  body("password").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    try {
      const loginUser: UserLoginData = request.body;
      const loggingIn: LoginResponse = await UserService.loginUser(loginUser);
      if (!loggingIn.status) {
        return response.status(401).json(loggingIn);
      } else {
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
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

// Route to refresh user access token
userRouter.post(
  "/refresh-token/:id",
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const refreshTokenFromUser: string = request.cookies.refreshToken;
      try {
        const refreshTokenResult: refreshResult =
          await UserService.refreshTokenUser(refreshTokenFromUser, id);
        if (refreshTokenResult.status) {
          return response.status(202).json({
            accessToken: refreshTokenResult.data,
            message: refreshTokenResult.message,
            status: refreshTokenResult.status,
          });
        } else {
          return response.status(401).json({
            accessToken: "",
            message: "Failed",
            status: false,
          });
        }
      } catch (error) {
        response.status(401).json({ message: "Invalid refresh token" });
      }
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

// Route put to update user data without updating password
userRouter.put(
  "/:id",
  body("user_code").isString(),
  body("name").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const updatedDataUser: Omit<DataUser, "password"> = request.body;
      const updatedUser = await UserService.updateUser(updatedDataUser, id);
      return response.status(200).json(updatedUser);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

// Route put to update user password
userRouter.put(
  "/change-password/:id",
  body("password").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const updatedDataUser: string = request.body.password;
      const updatedUser = await UserService.updateUserPassword(
        id,
        updatedDataUser
      );
      return response.status(200).json(updatedUser);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);

userRouter.post(
  "/logout",
  cors(corsOptions),
  async (request: Request, response: Response) => {
    const refreshToken = request.cookies.refreshToken;

    if (refreshToken == null || refreshToken == undefined) {
      return response.status(204).json({ message: "refresh token not found" });
    }
    try {
      const updatedUser = await UserService.logout(refreshToken);
      return response.status(200).json(updatedUser);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
);
