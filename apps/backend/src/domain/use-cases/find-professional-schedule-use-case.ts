import { Either, left, right } from "../../core/either";
import { CreateScheduleDto, ScheduleDto } from "../DTO/schedule-dto";
import { ScheduleRepository } from "../repositories/schedule-repository";
import { NotFoundError } from "./Errors/not-found-error";
import { ScheduleAlreadyExistsError } from "./Errors/schedule-already-exists-error";


export class FindProfessionalScheduleUseCase {
  constructor(private scheduleRepository: ScheduleRepository){}

  async execute(data: Partial<ScheduleDto>): Promise<Either<NotFoundError, ScheduleDto>>{
    const schedule = await this.scheduleRepository.find(data)
    if(!schedule){
      return left(new NotFoundError())
    }
    return right(schedule)
  }
}