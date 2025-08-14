import { Request, Response, Router } from "express";
import { LoginController } from "../controllers/login.controller";
import zodMiddlewareValidator from "../middlewares/zod-validator.middleware";
import { loginDTO } from "../../domain/DTO/login.dto";

export const authRouter = Router()

authRouter.post('/login', zodMiddlewareValidator(loginDTO, 'body'), (req: Request, res: Response) => {
  const controller = LoginController.getInstance()
  return controller.execute(req, res)
})