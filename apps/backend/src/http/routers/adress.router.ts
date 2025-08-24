import { Request, Response, Router } from "express";
import { LoginController } from "../controllers/login.controller";
import zodMiddlewareValidator from "../middlewares/zod-validator.middleware";
import { loginDTO } from "../../domain/DTO/login.dto";
import { AddressDtoWithLinks, createAddressDtoWithLinks } from "../../domain/DTO/adresses-dto";
import { RegisterAddressController } from "../controllers/create-address.controller";

export const addressouter = Router()

addressouter.post('/create', zodMiddlewareValidator(createAddressDtoWithLinks, 'body'), (req: Request, res: Response) => {
  const controller = RegisterAddressController.getInstance()
  return controller.handle(req, res)
})