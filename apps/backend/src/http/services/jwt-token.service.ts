// src/services/jwt-service.ts
import jwt from 'jsonwebtoken'


import env from '../../env'
import { GenerateTokenDto } from '../../domain/DTO/generate-token-dto'

export class JwtService {
  static generateAccessToken(payload: object) {
    return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '20m' })
  }

  static generateRefreshToken(payload: object) {
    return jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: '7d' })
  }

  static verifyAccessToken(token: string) {
    return jwt.verify(token, env.JWT_SECRET)
  }

  static verifyRefreshToken(token: string) {
    return jwt.verify(token, env.JWT_REFRESH_SECRET) as GenerateTokenDto
  }
}
