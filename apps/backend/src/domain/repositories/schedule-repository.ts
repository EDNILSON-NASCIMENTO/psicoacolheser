import { CreateScheduleDto, ScheduleDto } from "../DTO/schedule-dto";

export abstract class ScheduleRepository {
  abstract create(data: CreateScheduleDto): Promise<ScheduleDto>

  abstract find(data: Partial<ScheduleDto>): Promise<ScheduleDto | null>
}