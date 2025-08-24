import { AddressRepository } from "../repositories/address-repository";

export class DeleteAddressUseCase {
  constructor(private addressRepository: AddressRepository){}

  async execute(params: {id: number}){
    this.addressRepository.removeAdress(params)
  }
}