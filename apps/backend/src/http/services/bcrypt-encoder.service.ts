import { hash, compare } from 'bcrypt'
import { EncoderService } from '../../domain/services/encoder-service'
export class BcryptEncoderService implements EncoderService {
  async encode(raw: string): Promise<string> {
    return await hash(raw, 8)
  }
  async compare(raw: string, encoded: string): Promise<boolean> {
    return await compare(raw, encoded)
  }
  

}