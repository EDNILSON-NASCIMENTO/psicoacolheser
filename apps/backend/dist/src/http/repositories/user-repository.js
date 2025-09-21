"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
class PrismaUserRepository {
    prisma;
    encoderService;
    constructor(prisma, encoderService) {
        this.prisma = prisma;
        this.encoderService = encoderService;
    }
    async findUserByEmail(email) {
        const response = await this.prisma.users.findUnique({
            where: {
                email,
            }
        });
        return response;
    }
    async createUser({ email, password, user_type }) {
        const user = await this.prisma.users.create({
            data: {
                email,
                password: await this.encoderService.encode(password),
                user_type: user_type
            }
        });
        return user;
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
