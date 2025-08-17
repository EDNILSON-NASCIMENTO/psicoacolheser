import { Either, left, right } from "../../core/either";
import { CreateOrganizationTypeDto, OrganizationTypeDto, OrganizationTypeDtoWithoutAdress } from "../DTO/organization-dto";
import { OrganizationRepository } from "../repositories/organization-repository";
import { CnpjOrCpfAlreadyExists } from "./Errors/cnpj-or-cpf-already-exists.error";

export class CreateOrganizationUseCase {
  constructor(private organizationRepository: OrganizationRepository){}

  async execute(params: CreateOrganizationTypeDto): 
    Promise<Either<CnpjOrCpfAlreadyExists, OrganizationTypeDtoWithoutAdress>> {
    const { cnpj_cpf } = params
    const isCnpjOrCpfAlreadyRegistered = await this.organizationRepository.findOrganizationByCnpjOrCpf(cnpj_cpf)
    if(isCnpjOrCpfAlreadyRegistered){
      return left(new CnpjOrCpfAlreadyExists())
    }
    const newOrganization = await this.organizationRepository.create(params)
    return right(newOrganization)
  }

}