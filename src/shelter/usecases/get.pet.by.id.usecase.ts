import { Inject, Injectable } from "@nestjs/common";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { IuseCase } from "src/domain/iusecase.interface";
import IPetRepository from "src/pet/interfaces/pet.repository,interface";
import PetTokens from "src/pet/pet.tokens";
import { Pet } from "src/pet/schema/schema";
import CreatePetUseCaseOutput from "src/pet/usecases/dtos/create.pet.usecase.output";
import getPetByIdUseCaseInput from "src/pet/usecases/dtos/get.pet.by.id.usecase.input";
import getPetByIdUseCaseOutput from "src/pet/usecases/dtos/get.pet.by.id.usecase.output";

@Injectable()
export default class getPetByIdUseCase implements IuseCase<getPetByIdUseCaseInput,
getPetByIdUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ) {}

    async run(input: getPetByIdUseCaseInput): Promise<getPetByIdUseCaseOutput> {
        const pet = await this.getPetById(input.id)

        if (pet === null) {
            throw new PetNotFoundError()
        }
        
        return new CreatePetUseCaseOutput({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.size,
            gender: pet.gender,
            bio: pet.bio,
            photo: null,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt,
        })}
        
        private async getPetById(id: string): Promise<Pet>
        {
            try {
                return await this.petRepository.getById(id)
            } catch (error) {
                return null
            }
        }
    }