import z from "zod"
import { UserType } from "../../generated/prisma"

export const createUserDTO = z.object({
  email: z.email(), 
  password: z.string().min(6),
  user_type: z.enum([UserType.PSICOLOGO, UserType.PACIENTE, UserType.ADMIN])
})

export type createUserTypeDTO = z.infer<typeof createUserDTO>
