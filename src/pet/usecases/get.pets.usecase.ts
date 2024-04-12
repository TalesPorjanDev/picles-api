import { Inject, Injectable } from "@nestjs/common";
import { IuseCase } from "src/domain/iusecase.interface";
import GetPetUseCaseInput from "./dtos/get.pet.usecase.input";
import GetPetUseCaseOutput from "../dtos/get.pet.usecase.output";
import PetTokens from "../pet.tokens";
import AppTokens from "src/app.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";
import IFileService from "src/interfaces/file.service.interface";
import PetResponse from "../dtos/pet.reponse";

@Injectable()
export default class GetPetsUseCase implements IuseCase<GetPetUseCaseInput,GetPetUseCaseOutput>{
    constructor (
        @Inject (PetTokens.petRepository)
        private readonly petRepository: IPetRepository,
        
        @Inject (AppTokens.fileService)
        private readonly fileService: IFileService
    ) {}
    async run(input: GetPetUseCaseInput): Promise<GetPetUseCaseOutput> {
        const queryResponse = await this.petRepository.findByFilter(input);

        const petResponseList: PetResponse[] = [];

        for (const currentPet of queryResponse.items) {
            if(currentPet.photo){
            const photoInBase64 = await this.fileService.readFile(currentPet.photo);
            currentPet.photo = photoInBase64.toString('base64');
        }

        petResponseList.push(PetResponse.fromPet(currentPet));
    }

    const totalPages = Math.ceil(queryResponse.total / input.itemsPerPage);

    return new GetPetUseCaseOutput ({
        currentPage: input.page,
        totalPages,
        items: petResponseList,
    });
}
}