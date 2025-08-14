import z from 'zod'
import dotenv from 'dotenv'
dotenv.config()

const envSchema = z.object({
  BACK_END_PORT: z.coerce.number().default(3002),
  MYSQL_DATABASE_URL: z.url(),
  MYSQL_USER: z.string(),
  MYSQL_PASSWORD: z.string(),
  MYSQL_DATABASE: z.string(),
  JWT_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),


})

const env = envSchema.parse(process.env)

export default env
