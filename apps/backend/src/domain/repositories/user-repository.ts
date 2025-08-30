
import { UserTypeDTO, newUserTypeDto } from "../DTO/user.dto";

export abstract class UserRepository {
  abstract createUser({email, password, user_type, name}: newUserTypeDto): Promise<UserTypeDTO>

  abstract findUserByEmail(email: string): Promise<UserTypeDTO | null>
}