import { PrismaClient } from "@prisma/client/extension";
import { UserRepository } from "../repositories/user-repository";
import { createUserTypeDTO } from "../DTO/create-user-dto";
import { Either, left, right } from "../../core/either";
import { UserAlreadyExistsError } from "./Errors/user-already-exists.error";
import { UserTypeDTO } from "../DTO/user.dto";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository){}


  async execute({email, password, user_type}: createUserTypeDTO): Promise<Either<UserAlreadyExistsError, UserTypeDTO>>{
      const isUserAlreadyExists = await this.userRepository.findUserByEmail(email)
      if(isUserAlreadyExists){
        return left(new UserAlreadyExistsError())
      }
      const user = await this.userRepository.createUser({
        email,
        password,
        user_type,
      })
      return right(user)
  }
}