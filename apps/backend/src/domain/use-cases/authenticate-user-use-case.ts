import { Either, left, right } from "../../core/either"
import { JwtService } from "../../http/services/jwt-token.service"
import { TokenTypeDTO } from "../DTO/token.dto"
import { UserTypeDTO } from "../DTO/user.dto"
import { UserRepository } from "../repositories/user-repository"
import { EncoderService } from "../services/encoder-service"
import { WrongCredentialsError } from "./Errors/wrong-credentials.error"


export class AuthenticateUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordService: EncoderService,
  ) {}

  async execute({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<Either<WrongCredentialsError, TokenTypeDTO>> {
    const user = await this.userRepository.findUserByEmail(email)
    if (!user) {
      return left(new WrongCredentialsError())
    }
    const isPasswordValid = await this.passwordService.compare(password, user.password)
    if (!isPasswordValid) {
      return left(new WrongCredentialsError())
    }
    const token = JwtService.generateAccessToken({userId: user.id, userType: user.user_type})
    const refreshToken = JwtService.generateRefreshToken({userId: user.id, userType: user.user_type})
    return right({token, refreshToken})
  }
}
