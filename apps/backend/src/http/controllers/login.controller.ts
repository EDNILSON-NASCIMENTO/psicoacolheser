import { Request, Response } from "express";
import { CreateUserUseCase } from "../../domain/use-cases/create-user.use-case";
import { createUserTypeDTO } from "../../domain/DTO/create-user-dto";
import { ErroHandler } from "../error-handler";
import { PrismaUserRepository } from "../repositories/user-repository";
import { BcryptEncoderService } from "../services/bcrypt-encoder.service";
import { prismaService } from "../services/prisma.service";
import { LoginTypeDTO } from "../../domain/DTO/login.dto";
import { AuthenticateUseCase } from "../../domain/use-cases/authenticate-user-use-case";

export class LoginController {
  constructor(private authenticateUseCase: AuthenticateUseCase){}
  static instance: LoginController | null = null
  static getInstance(){
    if(!this.instance){
      const encoder = new BcryptEncoderService()
      const userRepository = new PrismaUserRepository(prismaService, encoder)
      const authenticateUseCase = new AuthenticateUseCase(userRepository, encoder)
      this.instance = new LoginController(authenticateUseCase)
    }
    return this.instance
  }

  async execute(req: Request, res: Response){
    const params = req.body as LoginTypeDTO
    const response = await this.authenticateUseCase.execute(params)
    if(response.isLeft()){
      return ErroHandler.handle(response, res)
    }
    return res.status(200).send(response.value)
  }
}