import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/create-user.controller";
import zodMiddlewareValidator from "../middlewares/zod-validator.middleware";
import { createUserDTO } from "../../domain/DTO/create-user-dto";
import { UserDTO } from "../../domain/DTO/user.dto";

export const userRouter = Router()

userRouter.post('/create', zodMiddlewareValidator(UserDTO, 'body') ,(req: Request, res: Response) => {
    const controller = CreateUserController.getInstance()
    return controller.execute(req,res)
})