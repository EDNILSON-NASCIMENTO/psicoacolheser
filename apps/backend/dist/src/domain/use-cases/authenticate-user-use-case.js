"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUseCase = void 0;
const either_1 = require("../../core/either");
const jwt_token_service_1 = require("../../http/services/jwt-token.service");
const wrong_credentials_error_1 = require("./Errors/wrong-credentials.error");
class AuthenticateUseCase {
    userRepository;
    passwordService;
    constructor(userRepository, passwordService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }
    async execute({ email, password, }) {
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            return (0, either_1.left)(new wrong_credentials_error_1.WrongCredentialsError());
        }
        const isPasswordValid = await this.passwordService.compare(password, user.password);
        if (!isPasswordValid) {
            return (0, either_1.left)(new wrong_credentials_error_1.WrongCredentialsError());
        }
        const token = jwt_token_service_1.JwtService.generateAccessToken({ userId: user.id, userType: user.user_type });
        const refreshToken = jwt_token_service_1.JwtService.generateRefreshToken({ userId: user.id, userType: user.user_type });
        return (0, either_1.right)({ token, refreshToken });
    }
}
exports.AuthenticateUseCase = AuthenticateUseCase;
