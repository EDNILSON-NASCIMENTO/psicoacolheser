"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const create_user_use_case_1 = require("../../domain/use-cases/create-user.use-case");
const error_handler_1 = require("../error-handler");
const user_repository_1 = require("../repositories/user-repository");
const bcrypt_encoder_service_1 = require("../services/bcrypt-encoder.service");
const prisma_service_1 = require("../services/prisma.service");
class CreateUserController {
    createUserUseCase;
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    static instance = null;
    static getInstance() {
        if (!this.instance) {
            const encoder = new bcrypt_encoder_service_1.BcryptEncoderService();
            const userRepository = new user_repository_1.PrismaUserRepository(prisma_service_1.prismaService, encoder);
            const createUserUseCase = new create_user_use_case_1.CreateUserUseCase(userRepository);
            this.instance = new CreateUserController(createUserUseCase);
        }
        return this.instance;
    }
    async execute(req, res) {
        const params = req.body;
        const response = await this.createUserUseCase.execute(params);
        if (response.isLeft()) {
            error_handler_1.ErroHandler.handle(response, res);
        }
        return res.status(204).send();
    }
}
exports.CreateUserController = CreateUserController;
