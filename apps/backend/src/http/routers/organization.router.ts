import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/create-user.controller";
import zodMiddlewareValidator from "../middlewares/zod-validator.middleware";
import { createUserDTO } from "../../domain/DTO/create-user-dto";
import { createOrganizationDto, searchTextDto } from "../../domain/DTO/organization-dto";
import { authMiddleware } from "../middlewares/jwt.midleware";
import { CreateOrganizationController } from "../controllers/create-organization.controller";
import { FindOrganizationBySearchFieldsUseCase } from "../../domain/use-cases/find-organization-by-search-fields";
import { FindOrganizationBySearchFieldsController } from "../controllers/find-organization.controller";
import RoleValidatorMiddleware from "../middlewares/role-validator.middleware";

export const organizationRouter = Router()

organizationRouter.get('/', authMiddleware(), zodMiddlewareValidator(searchTextDto, 'query'),
    (req: Request, res: Response) => {
        const controller = FindOrganizationBySearchFieldsController.getInstance()
        return controller.execute(req,res)
    }
)

organizationRouter.post('/create', authMiddleware(), RoleValidatorMiddleware(['ADMIN']) ,zodMiddlewareValidator(createOrganizationDto, 'body')
 ,(req: Request, res: Response) => {
    const controller = CreateOrganizationController.getInstance()
    return controller.execute(req,res)
})

