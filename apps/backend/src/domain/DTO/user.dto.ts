import { UserType } from "@prisma/client"
import z from "zod"



export const metaUserDTO = z.object({
  id: z.number().optional(),
  user_id: z.number().optional(),
  meta_key: z.string(),
  meta_value: z.string(),
  created_at: z.date().optional().default(new Date()),
  updated_at: z.date().optional().nullable()
})

export const UserDTO = z.object({
  id: z.number().optional(),
  email: z.email(),
  password: z.string().min(6),
  user_type:  z.enum(UserType),
  name: z.string().min(6),
  meta_user: z.array(metaUserDTO)
})


export type UserTypeDTO = z.infer<typeof UserDTO>

export type newUserTypeDto = Omit<UserTypeDTO, 'id'>