import { Prisma, PrismaClient } from "@prisma/client";
import { CreateScheduleDto, ScheduleDto } from "../../domain/DTO/schedule-dto";
import { ScheduleRepository } from "../../domain/repositories/schedule-repository";
import { schemaToWhere } from "../helpers/schema-to-where";

export class PrismaScheduleRepository implements ScheduleRepository {
  constructor(private prisma: PrismaClient){}

  async find(data: Partial<ScheduleDto>): Promise<ScheduleDto | null> {
    const {id, ...rest} = data
    const whereClause = schemaToWhere(data);
    const response = await this.prisma.agenda_profissional.findFirst({
      where: whereClause,
    })

    return response
  }

  async create(data: CreateScheduleDto): Promise<ScheduleDto> {
    const response = await this.prisma.agenda_profissional.create({
      data,
    })

    return response
  }

}