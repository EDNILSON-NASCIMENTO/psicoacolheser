import z from "zod";


export const loginDTO = z.object({
  email: z.string(),
  password: z.string().min(6)
})

export type LoginTypeDTO = z.infer<typeof loginDTO>