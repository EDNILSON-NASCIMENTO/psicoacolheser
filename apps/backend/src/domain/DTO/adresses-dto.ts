import { TipoEndereco } from "@prisma/client"
import z from "zod"
import { omit } from "zod/v4/core/util.cjs"


export const addressDto = z.object({
    id: z.number().int(),
    cep: z.string(),
    logradouro: z.string(),
    numero: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    tipo: z.enum(TipoEndereco)
})

export const AddressDtoWithLinks = z.object({
    id: z.number().int(),
    cep: z.string(),
    logradouro: z.string(),
    numero: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    tipo: z.enum(TipoEndereco),
    user_id: z.number().optional(),
    organization_id: z.number().optional()
})

export const createAddressDtoWithLinks = z.object({
    cep: z.string(),
    logradouro: z.string(),
    numero: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    tipo: z.enum(TipoEndereco),
    user_id: z.number().optional(),
    organization_id: z.number().optional()
})

export type AddressDtoWithLinksType = z.infer<typeof AddressDtoWithLinks>
export type CreateAddressDtoWithLinksType = z.infer<typeof createAddressDtoWithLinks>
export type addressDtoType = z.infer<typeof addressDto>