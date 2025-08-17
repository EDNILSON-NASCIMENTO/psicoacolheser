import z from "zod";



export const organizationDto = z.object({
    id: z.number().int(),
    identificacao: z.string().min(6),
    razao_social: z.string().min(6),
    cnpj_cpf: z.string().min(11),
    descricao: z.string(),
    enderecos: z.array(
    z.object({
      cep: z.string(),
      logradouro: z.string(),
      numero: z.string(),
      bairro: z.string(),
      cidade: z.string(),
      tipo: z.enum(["USUARIO", "ORGANIZACAO"])
    })
  ).optional()
})

export const createOrganizationDto = z.object({
      identificacao: z.string().min(6),
      razao_social: z.string().min(6),
      cnpj_cpf: z.string().min(11),
      descricao: z.string(),
})

export const organizationDtoWithoutAdress = z.object({
    id: z.number().int(),
    identificacao: z.string().min(6),
    razao_social: z.string().min(6),
    cnpj_cpf: z.string().min(11),
    descricao: z.string(),
})

export const searchTextDto = z.object({
    search: z.string().min(1)
})

export type OrganizationTypeDto = z.infer<typeof organizationDto>
export type OrganizationTypeDtoWithoutAdress = z.infer<typeof organizationDtoWithoutAdress>
export type CreateOrganizationTypeDto = Omit<OrganizationTypeDtoWithoutAdress, 'id'>
export type SearchTextDtoType =  z.infer<typeof searchTextDto>
