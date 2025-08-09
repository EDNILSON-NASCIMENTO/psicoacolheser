import z from "zod";

export const tokenDTO = z.object({
  token: z.string(),
  refreshToken: z.string()
})

export type TokenTypeDTO = z.infer< typeof tokenDTO>