export class CnpjOrCpfAlreadyExists extends Error {
  constructor(){
    super('CNPJ OR CPF ALREADY EXISTS!')
  }
}