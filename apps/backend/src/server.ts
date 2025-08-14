import {  type Request, type Response } from "express";
import express, { json } from 'express'
import env from "./env/index";
import { userRouter } from "./http/routers/user.router";
import { authRouter } from "./http/routers/auth.router";


const app = express()
app.use(json())
app.use('/users', userRouter)
app.use('/auth', authRouter)


app.get('/health', (req: Request, res: Response) => {
  return res.send('ok')
})

app.listen(env.BACK_END_PORT, () => {
  console.log(`server listening on port: ${env.BACK_END_PORT}`)
})