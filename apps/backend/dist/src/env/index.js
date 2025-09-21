"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envSchema = zod_1.default.object({
    BACK_END_PORT: zod_1.default.coerce.number().default(3002),
    MYSQL_DATABASE_URL: zod_1.default.url(),
    MYSQL_USER: zod_1.default.string(),
    MYSQL_PASSWORD: zod_1.default.string(),
    MYSQL_DATABASE: zod_1.default.string(),
    JWT_SECRET: zod_1.default.string(),
    JWT_REFRESH_SECRET: zod_1.default.string(),
});
const env = envSchema.parse(process.env);
exports.default = env;
