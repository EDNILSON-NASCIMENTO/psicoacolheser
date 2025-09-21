import { Prisma } from "@prisma/client";
import { Either, left, Left, right } from "../../core/either";
import { PrismaAdressRepository } from "../../http/repositories/adress-repository";
import { AddressDtoWithLinksType } from "../DTO/adresses-dto";
import { CantCreateAddressError } from "./Errors/cant-create-adress-error";

export class RegisterAdressUseCase {
  constructor(private adressRepository: PrismaAdressRepository){}

  async execute(params: AddressDtoWithLinksType): Promise<Either<CantCreateAddressError, Prisma.enderecoCreateInput>>{
    const response = await this.adressRepository.create(params)
    if(!response){
      return left(new CantCreateAddressError())
    }
    return right(response)
  }
}