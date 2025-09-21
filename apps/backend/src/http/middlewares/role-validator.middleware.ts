import { UserType } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

function  RoleValidatorMiddleware(roles: UserType[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user as { userId: number, userType: UserType }
        if(!roles.includes(user.userType)) return res.status(400).send({message: 'User role not allowed'})
    next()
  }
}

export default RoleValidatorMiddleware
