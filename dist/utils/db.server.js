"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const index_js_1 = require("../../generated/client/index.js");
const globalForPrisma = globalThis;
exports.db = globalForPrisma.prisma || new index_js_1.PrismaClient();
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.db;
//# sourceMappingURL=db.server.js.map