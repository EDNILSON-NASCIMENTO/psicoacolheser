import { Prisma, PrismaClient } from "@prisma/client";
import { AddressDtoWithLinksType, CreateAddressDtoWithLinksType } from "../../domain/DTO/adresses-dto";
import { AddressRepository } from "../../domain/repositories/address-repository";


export class PrismaAdressRepository implements AddressRepository {
  constructor(private prisma: PrismaClient){}
  async create(params: CreateAddressDtoWithLinksType): Promise<Prisma.enderecoCreateInput | null> {
    const response = await this.prisma.endereco.create({
      data: {
        bairro: params.bairro,
        cep: params.cep,
        cidade: params.cidade,
        logradouro: params.logradouro,
        numero: params.numero,
        tipo: params.tipo,
      }
    })

    await this.prisma.vinculo_endereco.create({
      data: {
        id_endereco: response.id,
        id_organizacao: params.organization_id,
        id_user: params.user_id,
      }
    })
    return response
  }

  async fetchAdressFromUser(params: { userId: number })
  : Promise<Prisma.vinculo_enderecoGetPayload<{ include: { endereco: true, user: true } }>[]> {
    const response = await this.prisma.vinculo_endereco.findMany({
      where: {
        id_user: params.userId
      },
      include: {
        endereco: true,
        user: true
      }
    });
    
    return response;
  }

  async fetchAdressFromOrganization(params: { organizationId: number; })
  : Promise<Prisma.vinculo_enderecoGetPayload<{ include: { organizacao: true, endereco: true } }>[]> {
    const response = await this.prisma.vinculo_endereco.findMany({
      where: {
        id_organizacao: params.organizationId
      },
      include: {
        endereco: true,
        organizacao: true
      }
    });
    
    return response;
  }
  async removeAdress(params: { id: number; }): Promise<Prisma.enderecoCreateInput | null> {
      const response = await this.prisma.endereco.delete({
        where: {
          id: params.id
        }
      })
      return response
  }

}