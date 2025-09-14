import { Request, Response } from "express";
import { CreateProfissionalScheduleUseCase } from "../../domain/use-cases/create-professional-schedule";
import { PrismaScheduleRepository } from "../repositories/schedule-repository";
import { prismaService } from "../services/prisma.service";
import { CreateScheduleDto } from "../../domain/DTO/schedule-dto";
import { ErroHandler } from "../error-handler";

export class CreateScheduleController {
  constructor(private createScheduleUseCase: CreateProfissionalScheduleUseCase){}
  static instance: CreateScheduleController | null = null

  static getInstance(){
    if(!this.instance){
      const repository = new PrismaScheduleRepository(prismaService)
      const useCase = new CreateProfissionalScheduleUseCase(repository)
      this.instance = new CreateScheduleController(useCase)
    }
    return this.instance
  }

  async handle(req: Request, res: Response){
      const params = req.body as CreateScheduleDto
      const response = await this.createScheduleUseCase.execute(params)
      if(response.isLeft()){
            return ErroHandler.handle(response, res)
          }
      
          return res.status(201).send(response.value)
  }

}