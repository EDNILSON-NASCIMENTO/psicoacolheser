"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDTO = void 0;
const zod_1 = __importDefault(require("zod"));
const prisma_1 = require("../../generated/prisma");
exports.createUserDTO = zod_1.default.object({
    email: zod_1.default.email(),
    password: zod_1.default.string().min(6),
    user_type: zod_1.default.enum([prisma_1.UserType.PSICOLOGO, prisma_1.UserType.PACIENTE, prisma_1.UserType.ADMIN])
});
