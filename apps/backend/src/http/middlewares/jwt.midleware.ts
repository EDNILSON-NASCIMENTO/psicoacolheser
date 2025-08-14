import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import env from '../../env'


export function authMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if (!token) return res.sendStatus(401)

    try {
      const payload = jwt.verify(token, env.JWT_SECRET) as { userId: number }
      ;(req as any).user = { id: payload.userId }
      next()
    } catch {
      res.sendStatus(403)
    }
  }
}
