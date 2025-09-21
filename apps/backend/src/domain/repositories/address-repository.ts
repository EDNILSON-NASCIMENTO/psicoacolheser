import { Prisma } from "@prisma/client";
import { AddressDtoWithLinksType, createAddressDtoWithLinks, CreateAddressDtoWithLinksType } from "../DTO/adresses-dto";
import { CreateOrganizationTypeDto, OrganizationTypeDto, OrganizationTypeDtoWithoutAdress } from "../DTO/organization-dto";

export abstract class AddressRepository {
    
  abstract create(params: CreateAddressDtoWithLinksType) : Promise<Prisma.enderecoCreateInput | null>

  abstract fetchAdressFromUser(params: {userId: number}) 
    : Promise<Prisma.vinculo_enderecoGetPayload<{ include: { endereco: true } }>[]>

  abstract fetchAdressFromOrganization(params: {organizationId: number}) 
    : Promise<Prisma.vinculo_enderecoGetPayload<{ include: { organizacao: true, endereco: true } }>[]>

  abstract removeAdress(params: {id: number}):  Promise<Prisma.enderecoCreateInput | null>

}