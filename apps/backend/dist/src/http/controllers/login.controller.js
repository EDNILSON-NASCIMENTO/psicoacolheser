"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const error_handler_1 = require("../error-handler");
const user_repository_1 = require("../repositories/user-repository");
const bcrypt_encoder_service_1 = require("../services/bcrypt-encoder.service");
const prisma_service_1 = require("../services/prisma.service");
const authenticate_user_use_case_1 = require("../../domain/use-cases/authenticate-user-use-case");
class LoginController {
    authenticateUseCase;
    constructor(authenticateUseCase) {
        this.authenticateUseCase = authenticateUseCase;
    }
    static instance = null;
    static getInstance() {
        if (!this.instance) {
            const encoder = new bcrypt_encoder_service_1.BcryptEncoderService();
            const userRepository = new user_repository_1.PrismaUserRepository(prisma_service_1.prismaService, encoder);
            const authenticateUseCase = new authenticate_user_use_case_1.AuthenticateUseCase(userRepository, encoder);
            this.instance = new LoginController(authenticateUseCase);
        }
        return this.instance;
    }
    async execute(req, res) {
        const params = req.body;
        const response = await this.authenticateUseCase.execute(params);
        if (response.isLeft()) {
            error_handler_1.ErroHandler.handle(response, res);
        }
        return res.status(200).send(response.value);
    }
}
exports.LoginController = LoginController;
