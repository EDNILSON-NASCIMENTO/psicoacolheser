"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const create_user_controller_1 = require("../controllers/create-user.controller");
const zod_validator_middleware_1 = __importDefault(require("../middlewares/zod-validator.middleware"));
const create_user_dto_1 = require("../../domain/DTO/create-user-dto");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/create', (0, zod_validator_middleware_1.default)(create_user_dto_1.createUserDTO, 'body'), (req, res) => {
    const controller = create_user_controller_1.CreateUserController.getInstance();
    return controller.execute(req, res);
});
