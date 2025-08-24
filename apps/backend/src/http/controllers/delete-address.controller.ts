import { DeleteAddressUseCase } from "../../domain/use-cases/delete-address-use-case";

export class DeleteAddressController {
  constructor(private deleteAddressUseCase: DeleteAddressUseCase){}

  async handle(params: {id: number}){
      const response = await this.deleteAddressUseCase.execute(params)
  }
}