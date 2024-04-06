// Aqui agente está usando um get para trazer dados do abrigo //

import { IuseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";
import IShelterRepository from "../interfaces/shelter.repository.interface";
import ShelterTokens from "../shelter.tokens";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export default class GetShelterDetailsUseCase implements 
IuseCase<null, GetShelterDetailsUseCaseOutput> {
    constructor (
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository,
    ) {}

    async run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        const shelter = await this.shelterRepository.get();
        
        return new GetShelterDetailsUseCaseOutput({
            shelterName: shelter.name,
            shelterEmail: shelter.email,
            shelterPhone: shelter.phone,
            shelterWhatsApp: shelter.whatsApp,
            createdAt: shelter.createdAt,
            updatedAt: shelter.updatedAt,

        });
 }
}