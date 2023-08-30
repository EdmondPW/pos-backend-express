import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

type DecodedUser = {
  id: number;
  name: string;
  user_code: string;
  role: string;
};

const authenticateUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.header("Authorization");

  if (!token) {
    return response.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_SECRET_TOKEN as string
    ) as DecodedUser;
    response.locals.user = decoded.name;
    next();
  } catch (error) {
    response.status(401).json({ message: "Invalid token" });
  }
};

export default authenticateUser;
