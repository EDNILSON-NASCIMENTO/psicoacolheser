import { CreateOrganizationTypeDto, OrganizationTypeDto, OrganizationTypeDtoWithoutAdress } from "../DTO/organization-dto";

export abstract class OrganizationRepository {
    
  abstract create(params: CreateOrganizationTypeDto) : Promise<OrganizationTypeDtoWithoutAdress>

  abstract fetchOrgsByMatch(match: string) : Promise<OrganizationTypeDto[]>

  abstract findOrganizationById(id: number): Promise<OrganizationTypeDto | null>

  abstract findOrganizationByCnpjOrCpf(cnpj_cpf: string): Promise<OrganizationTypeDto | null>
}