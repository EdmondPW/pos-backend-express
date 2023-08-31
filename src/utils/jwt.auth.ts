// utils/auth.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

type User = {
  id: number;
  name: string;
  user_code: string;
  role: string;
};

const saltRounds = 10;
const accessTokenSecret = process.env.ACCESS_SECRET_TOKEN as string;
const refreshTokenSecret = process.env.REFRESH_SECRET_TOKEN as string;

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};

export const generateAccessToken = (user: User): string => {
  const accessToken = jwt.sign({ user }, accessTokenSecret, {
    expiresIn: "1d",
  });
  return accessToken;
};

export const generateRefreshToken = (user: User): string => {
  const refreshToken = jwt.sign({ user }, refreshTokenSecret, {
    expiresIn: "1d",
  });
  return refreshToken;
};

export const verifyTokenAuth = (
  token: string,
  secret: string = refreshTokenSecret
): any => {
  const decoded = jwt.verify(token, secret);
  return decoded;
};
