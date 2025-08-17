import { UserType } from "@prisma/client"
import z from "zod"


export const createUserDTO = z.object({
  email: z.email(), 
  password: z.string().min(6),
  user_type: z.enum([UserType.PROFISSIONAL, UserType.PACIENTE, UserType.ADMIN, UserType.VISITANTE])
})

export type createUserTypeDTO = z.infer<typeof createUserDTO>
