import { Request, Response } from "express";
import { RegisterAdressUseCase } from "../../domain/use-cases/register-adress-use-case";
import { AddressDtoWithLinksType } from "../../domain/DTO/adresses-dto";
import { ErroHandler } from "../error-handler";
import { PrismaAdressRepository } from "../repositories/adress-repository";
import { prismaService } from "../services/prisma.service";

export class RegisterAddressController {
  constructor(private registerAddressUseCase: RegisterAdressUseCase){}
  static instance: RegisterAddressController | null = null

  static getInstance(){
    if(!this.instance){
      const repository = new PrismaAdressRepository(prismaService)
      const useCase = new RegisterAdressUseCase(repository)
      this.instance = new RegisterAddressController(useCase)
    }
    return this.instance
  }

  async handle(req: Request, res: Response){
    const params = req.body as AddressDtoWithLinksType
    const response = await this.registerAddressUseCase.execute(params)
    if(response.isLeft()){
          return ErroHandler.handle(response, res)
        }
    
        return res.status(201).send(response.value)
  }
}