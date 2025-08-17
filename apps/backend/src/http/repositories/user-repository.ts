
import { Either } from "../../core/either";
import { UserRepository } from "../../domain/repositories/user-repository";
import { EncoderService } from "../../domain/services/encoder-service";
import { createUserTypeDTO } from "../../domain/DTO/create-user-dto";
import { UserTypeDTO } from "../../domain/DTO/user.dto";
import { PrismaClient, UserType } from "@prisma/client";



export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient, private encoderService: EncoderService){}
    async findUserByEmail(email: string): Promise<UserTypeDTO | null> {
      const response = await this.prisma.users.findUnique({
        where: {
          email,
        }
      })
      return response
    }

  async createUser({email, password, user_type}: createUserTypeDTO): Promise<UserTypeDTO>{
    const user = await this.prisma.users.create({
      data: {
        email,
        password: await this.encoderService.encode(password),
        user_type: user_type as UserType
      }
    })
    return user
  }
}