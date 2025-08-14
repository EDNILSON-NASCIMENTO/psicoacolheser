import { createUserTypeDTO } from "../DTO/create-user-dto";
import { UserTypeDTO } from "../DTO/user.dto";

export abstract class UserRepository {
  abstract createUser({email, password, user_type}: createUserTypeDTO): Promise<UserTypeDTO>

  abstract findUserByEmail(email: string): Promise<UserTypeDTO | null>
}