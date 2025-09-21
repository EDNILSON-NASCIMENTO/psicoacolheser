import { Either, left, right } from "../../core/either";
import { CreateScheduleDto, ScheduleDto } from "../DTO/schedule-dto";
import { ScheduleRepository } from "../repositories/schedule-repository";
import { ScheduleAlreadyExistsError } from "./Errors/schedule-already-exists-error";


export class CreateProfissionalScheduleUseCase {
  constructor(private scheduleRepository: ScheduleRepository){}

  async execute(data: CreateScheduleDto): Promise<Either<ScheduleAlreadyExistsError, ScheduleDto>>{
    const schedule = await this.scheduleRepository.find(data)
    if(schedule){
      return left(new ScheduleAlreadyExistsError())
    }
    const response = await this.scheduleRepository.create(data)

    return right(response)
  }
}