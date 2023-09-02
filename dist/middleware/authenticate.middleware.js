import jwt from "jsonwebtoken";
const authenticateUser = (request, response, next) => {
    const token = request.header("Authorization");
    if (!token) {
        return response.status(401).json({ message: "Authentication required" });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
        response.locals.user = decoded.name;
        next();
    }
    catch (error) {
        response.status(401).json({ message: "Invalid token" });
    }
};
export default authenticateUser;
//# sourceMappingURL=authenticate.middleware.js.map