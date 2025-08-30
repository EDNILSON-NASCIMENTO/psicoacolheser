import { Request, Response } from "express";
import { CreateUserUseCase } from "../../domain/use-cases/create-user.use-case";
import { createUserTypeDTO } from "../../domain/DTO/create-user-dto";
import { ErroHandler } from "../error-handler";
import { PrismaUserRepository } from "../repositories/user-repository";
import { BcryptEncoderService } from "../services/bcrypt-encoder.service";
import { prismaService } from "../services/prisma.service";
import { newUserTypeDto } from "../../domain/DTO/user.dto";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase){}
  static instance: CreateUserController | null = null
  static getInstance(){
    if(!this.instance){
      const encoder = new BcryptEncoderService()
      const userRepository = new PrismaUserRepository(prismaService, encoder)
      const createUserUseCase = new CreateUserUseCase(userRepository)
      this.instance = new CreateUserController(createUserUseCase)
    }
    return this.instance
  }

  async execute(req: Request, res: Response){
    const params = req.body as newUserTypeDto
    const response = await this.createUserUseCase.execute(params)
    if(response.isLeft()){
      return ErroHandler.handle(response, res)
    }
    return res.status(204).send()
  }
}