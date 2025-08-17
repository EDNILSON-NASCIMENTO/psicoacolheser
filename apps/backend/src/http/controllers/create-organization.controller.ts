import { Request, Response } from "express";
import { CreateOrganizationTypeDto } from "../../domain/DTO/organization-dto";
import { OrganizationRepository } from "../../domain/repositories/organization-repository";
import { CreateOrganizationUseCase } from "../../domain/use-cases/create-organization-use-case";
import { ErroHandler } from "../error-handler";
import { PrismaOrganizationRepository } from "../repositories/organization-repository";
import { prismaService } from "../services/prisma.service";



export class CreateOrganizationController {
  constructor(private createOrganizationUseCase: CreateOrganizationUseCase){}
  static instance: CreateOrganizationController | null = null

  static  getInstance() {
    if(!this.instance){
      const organizationRepository = new PrismaOrganizationRepository(prismaService)
      const createOrganizationUseCase = new CreateOrganizationUseCase(organizationRepository)
      this.instance = new CreateOrganizationController(createOrganizationUseCase)
    }
    return this.instance
  }
  async execute(req: Request, res: Response){
    const params = req.body as CreateOrganizationTypeDto
    const response = await this.createOrganizationUseCase.execute(params)
    if(response.isLeft()){
      ErroHandler.handle(response, res)
    }

    return res.status(201).send(response.value)
  }
}