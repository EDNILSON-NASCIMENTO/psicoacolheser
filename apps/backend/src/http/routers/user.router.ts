import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/create-user.controller";
import zodMiddlewareValidator from "../middlewares/zod-validator.middleware";
import { createUserDTO } from "../../domain/DTO/create-user-dto";

export const userRouter = Router()

userRouter.post('/create', zodMiddlewareValidator(createUserDTO, 'body') ,(req: Request, res: Response) => {
    const controller = CreateUserController.getInstance()
    return controller.execute(req,res)
})