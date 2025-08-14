import z from "zod"
import { UserType } from "../../generated/prisma"


export const UserDTO = z.object({
  id: z.number(),
  email: z.email(),
  password: z.string().min(6),
  user_type: UserType
})

export type UserTypeDTO = z.infer<typeof UserDTO>