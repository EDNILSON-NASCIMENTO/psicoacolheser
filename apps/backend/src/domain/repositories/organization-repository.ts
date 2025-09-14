import { CreateOrganizationTypeDto, LinkProfessionalWithOrgDTO, NewLinkProfessionalWithOrgDTO, OrganizationTypeDto, OrganizationTypeDtoWithoutAdress } from "../DTO/organization-dto";

export abstract class OrganizationRepository {
    
  abstract create(params: CreateOrganizationTypeDto) : Promise<OrganizationTypeDtoWithoutAdress>

  abstract fetchOrgsByMatch(match: string) : Promise<OrganizationTypeDto[]>

  abstract findOrganizationById(id: number): Promise<OrganizationTypeDto | null>

  abstract findOrganizationByCnpjOrCpf(cnpj_cpf: string): Promise<OrganizationTypeDto | null>

  abstract create_link_professional_with_org(params: NewLinkProfessionalWithOrgDTO): Promise<LinkProfessionalWithOrgDTO>
}