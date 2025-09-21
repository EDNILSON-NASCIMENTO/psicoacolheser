"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const either_1 = require("../../core/either");
const user_already_exists_error_1 = require("./Errors/user-already-exists.error");
class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ email, password, user_type }) {
        const isUserAlreadyExists = await this.userRepository.findUserByEmail(email);
        if (isUserAlreadyExists) {
            return (0, either_1.left)(new user_already_exists_error_1.UserAlreadyExistsError());
        }
        const user = await this.userRepository.createUser({
            email,
            password,
            user_type,
        });
        return (0, either_1.right)(user);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
