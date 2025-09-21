import { Request, Response } from "express";
import { CreateOrganizationTypeDto, searchTextDto, SearchTextDtoType } from "../../domain/DTO/organization-dto";
import { OrganizationRepository } from "../../domain/repositories/organization-repository";
import { CreateOrganizationUseCase } from "../../domain/use-cases/create-organization-use-case";
import { ErroHandler } from "../error-handler";
import { PrismaOrganizationRepository } from "../repositories/organization-repository";
import { prismaService } from "../services/prisma.service";
import { FindOrganizationBySearchFieldsUseCase } from "../../domain/use-cases/find-organization-by-search-fields";



export class FindOrganizationBySearchFieldsController {
  constructor(private findOrganizationBySearchFieldsUseCase: FindOrganizationBySearchFieldsUseCase){}
  static instance: FindOrganizationBySearchFieldsController | null = null

  static  getInstance() {
    if(!this.instance){
      const organizationRepository = new PrismaOrganizationRepository(prismaService)
      const findOrganizationBySearchFieldsUseCase= new FindOrganizationBySearchFieldsUseCase(organizationRepository)
      this.instance = new FindOrganizationBySearchFieldsController(findOrganizationBySearchFieldsUseCase)
    }
    return this.instance
  }
  async execute(req: Request, res: Response){
    const { search } = req.query as SearchTextDtoType
    const response = await this.findOrganizationBySearchFieldsUseCase.execute(search)
    if(response.isLeft()){
      return ErroHandler.handle(response, res)
    }

    return res.status(201).send(response.value)
  }
}