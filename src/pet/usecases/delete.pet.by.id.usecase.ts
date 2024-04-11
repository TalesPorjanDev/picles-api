import { IuseCase } from "src/domain/iusecase.interface";
import DeletePetByIdUseCaseInput from "./dtos/delete.pet.by.id.usecase.input";
import DeletePetByIdUseCaseOutput from "./dtos/delete.pet.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository,interface";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { Pet } from "../schema/schema";

@Injectable()
export default class DeletePetByIdUseCase implements IuseCase<DeletePetByIdUseCaseInput,
DeletePetByIdUseCaseOutput> {
    constructor (
        @Inject (PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ) {}

    async run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutput> {

        let pet = await this.getPetById(input.id)

        if(!pet) {
            throw new PetNotFoundError()
        }
        await this.petRepository.updateById({
            ...input,
            _id: input.id
        });

        pet = await this.getPetById(input.id)

        return new DeletePetByIdUseCaseOutput()
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
    
}

    
