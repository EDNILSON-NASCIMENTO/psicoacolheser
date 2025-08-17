import { UserType } from "@prisma/client"
import z from "zod"



export const UserDTO = z.object({
  id: z.number(),
  email: z.email(),
  password: z.string().min(6),
  user_type: UserType
})

export type UserTypeDTO = z.infer<typeof UserDTO>