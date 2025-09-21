export class CantCreateAddressError extends Error {
  constructor(){
    super('Something went wrong on creating this address')
  }
}