export abstract class EncoderService {
    abstract encode(raw: string) : Promise<string>

    abstract compare(raw: string, encoded: string): Promise<boolean>
}