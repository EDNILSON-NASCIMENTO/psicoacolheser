import { Request, Response, Router } from "express";
import zodMiddlewareValidator from "../middlewares/zod-validator.middleware";
import { scheduleDto, CreateScheduleDto } from "../../domain/DTO/schedule-dto";
import { CreateScheduleController } from "../controllers/create-schedule.controller";

export const scheduleRouter = Router()

scheduleRouter.post('/create', zodMiddlewareValidator(scheduleDto, 'body'), (req: Request, res: Response) => {
  const controller = CreateScheduleController.getInstance()
  return controller.handle(req, res)
})