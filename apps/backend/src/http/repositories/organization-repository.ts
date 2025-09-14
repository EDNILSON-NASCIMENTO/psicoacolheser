
import { Either } from "../../core/either";
import { EncoderService } from "../../domain/services/encoder-service";
import { createUserTypeDTO } from "../../domain/DTO/create-user-dto";
import { UserTypeDTO } from "../../domain/DTO/user.dto";
import { OrganizationRepository } from "../../domain/repositories/organization-repository";
import { CreateOrganizationTypeDto, LinkProfessionalWithOrgDTO, NewLinkProfessionalWithOrgDTO, OrganizationTypeDto, OrganizationTypeDtoWithoutAdress } from "../../domain/DTO/organization-dto";
import { PrismaClient } from "@prisma/client";



export class PrismaOrganizationRepository implements OrganizationRepository{
  constructor(private prisma: PrismaClient){}

  async create(params: CreateOrganizationTypeDto): Promise<OrganizationTypeDtoWithoutAdress> {
    const organization = await this.prisma.organizacao.create({
      data: {
        cnpj_cpf: params.cnpj_cpf,
        descricao: params.descricao,
        identificacao: params.identificacao,
        razao_social: params.razao_social
      }
    })
    return organization
   
  }
  
  async fetchOrgsByMatch(match: string): Promise<OrganizationTypeDto[]> {
  const organizations = await this.prisma.$queryRaw<OrganizationTypeDto[]>`
    SELECT * FROM organizacao
    WHERE LOWER(identificacao) LIKE LOWER(${`%${match}%`})
       OR LOWER(razao_social) LIKE LOWER(${`%${match}%`})
       OR LOWER(descricao) LIKE LOWER(${`%${match}%`});
  `;

  return organizations;
}


  async findOrganizationById(id: number): Promise<OrganizationTypeDto | null> {
  const organization = await this.prisma.organizacao.findUnique({
    where: { id },
    include: {
      enderecos: {
        include: {
          endereco: true // pega os dados do endereço real
        }
      }
    }
  })

  if (!organization) return null

  // mapear para seu DTO (transformar vinculo_endereco → endereco)
  return {
    id: organization.id,
    identificacao: organization.identificacao,
    razao_social: organization.razao_social,
    cnpj_cpf: organization.cnpj_cpf,
    descricao: organization.descricao,
    enderecos: organization.enderecos.map((v) => ({
      cep: v.endereco.cep,
      logradouro: v.endereco.logradouro,
      numero: v.endereco.numero,
      bairro: v.endereco.bairro,
      cidade: v.endereco.cidade,
      tipo: v.endereco.tipo
    }))
  }
}

  async findOrganizationByCnpjOrCpf(cnpj_cpf: string): Promise<OrganizationTypeDto | null> {
    const organization = await this.prisma.organizacao.findUnique({
      where: {
        cnpj_cpf
      },
      include: {
        enderecos: {
          include: {
            endereco: true
          }
        }
      }
    })

     if (!organization) return null

    return {
    id: organization.id,
    identificacao: organization.identificacao,
    razao_social: organization.razao_social,
    cnpj_cpf: organization.cnpj_cpf,
    descricao: organization.descricao,
    enderecos: organization.enderecos.map((v) => ({
      cep: v.endereco.cep,
      logradouro: v.endereco.logradouro,
      numero: v.endereco.numero,
      bairro: v.endereco.bairro,
      cidade: v.endereco.cidade,
      tipo: v.endereco.tipo
    }))
  }
  }

  async create_link_professional_with_org(params: NewLinkProfessionalWithOrgDTO): Promise<LinkProfessionalWithOrgDTO> {
    const link = await this.prisma.vinculo_profissional_organizacao.create({
      data: params,
    })
    return link
  }


}