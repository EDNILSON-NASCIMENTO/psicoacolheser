import { Either, right } from "../../core/either";
import { OrganizationTypeDto } from "../DTO/organization-dto";
import { OrganizationRepository } from "../repositories/organization-repository";

export class FindOrganizationBySearchFieldsUseCase {
  constructor(private organizationRepository: OrganizationRepository){}

  async execute(searchText: string): Promise<Either<null, OrganizationTypeDto[]>>{
      const response = await this.organizationRepository.fetchOrgsByMatch(searchText)
      return  right(response)
  }
}