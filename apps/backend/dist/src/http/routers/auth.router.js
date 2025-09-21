"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const zod_validator_middleware_1 = __importDefault(require("../middlewares/zod-validator.middleware"));
const login_dto_1 = require("../../domain/DTO/login.dto");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/login', (0, zod_validator_middleware_1.default)(login_dto_1.loginDTO, 'body'), (req, res) => {
    const controller = login_controller_1.LoginController.getInstance();
    return controller.execute(req, res);
});
