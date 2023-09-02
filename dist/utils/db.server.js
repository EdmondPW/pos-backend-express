import { PrismaClient } from "../../dist/generated/client/index.js";
const globalForPrisma = globalThis;
export const db = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = db;
//# sourceMappingURL=db.server.js.map