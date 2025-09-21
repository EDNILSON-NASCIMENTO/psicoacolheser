
import { Either } from "../../core/either";
import { UserRepository } from "../../domain/repositories/user-repository";
import { EncoderService } from "../../domain/services/encoder-service";
import { createUserTypeDTO } from "../../domain/DTO/create-user-dto";
import { newUserTypeDto, UserTypeDTO } from "../../domain/DTO/user.dto";
import { PrismaClient, UserType } from "@prisma/client";



export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient, private encoderService: EncoderService){}
    async findUserByEmail(email: string): Promise<UserTypeDTO | null> {
      const response = await this.prisma.users.findUnique({
        where: {
          email,
        },
        include: {
          meta_user: true
        }
      })
      return response
    }

  async createUser({email, password, user_type, name, meta_user}: newUserTypeDto): Promise<UserTypeDTO>{
    console.log(name, 'name exists??')
    const user = await this.prisma.users.create({
      data: {
        email,
        name,
        password: await this.encoderService.encode(password),
        user_type: user_type as UserType,
        meta_user: {
          createMany: {
            data: meta_user
            
          }
        }
      },
      include: {
        meta_user: true
      }
    })
    return user
  }
}