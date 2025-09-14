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

export const linkProfessionalWithOrgDTO = z.object({
  id: z.number().int(),
  organization_id: z.number().int(),
  user_id: z.number().int(),
  admin_id: z.number().int(),
  created_at: z.date().optional().default(new Date())
})

// model vinculo_profissional_organizacao {
//   id              Int         @id @default(autoincrement())
//   user_id         Int
//   organization_id Int
//   admin_id        Int         @unique
//   // Relação com usuário profissional
//   user            users       @relation("UserVinculo", fields: [user_id], references: [id], onDelete: Cascade, onUpdate: Cascade)
//   // Relação com organização
//   organization    organizacao @relation(fields: [organization_id], references: [id], onDelete: Cascade, onUpdate: Cascade)
//   // Relação com usuário como admin
//   admin           users       @relation("AdminVinculo", fields: [admin_id], references: [id])
//   created_at      DateTime    @default(now())
//   @@unique([user_id, organization_id])
//   @@index([organization_id])
// }

export type OrganizationTypeDto = z.infer<typeof organizationDto>
export type OrganizationTypeDtoWithoutAdress = z.infer<typeof organizationDtoWithoutAdress>
export type CreateOrganizationTypeDto = Omit<OrganizationTypeDtoWithoutAdress, 'id'>
export type SearchTextDtoType =  z.infer<typeof searchTextDto>
export type LinkProfessionalWithOrgDTO = z.infer<typeof linkProfessionalWithOrgDTO>
export type NewLinkProfessionalWithOrgDTO = Omit<LinkProfessionalWithOrgDTO, 'id'>
