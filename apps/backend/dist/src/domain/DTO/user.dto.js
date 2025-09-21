"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const zod_1 = __importDefault(require("zod"));
const prisma_1 = require("../../generated/prisma");
exports.UserDTO = zod_1.default.object({
    id: zod_1.default.number(),
    email: zod_1.default.email(),
    password: zod_1.default.string().min(6),
    user_type: prisma_1.UserType
});
