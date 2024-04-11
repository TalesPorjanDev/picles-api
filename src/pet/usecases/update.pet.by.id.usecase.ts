import { IuseCase } from "src/domain/iusecase.interface";
import UpdatePetByIdUseCaseInput from "./dtos/update.pet.by.id.usecase.input";
import UpdatePetByIdUseCaseOutput from "./dtos/update.pet.by.id.usecase.output";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository,interface";
import { Inject } from "@nestjs/common";

import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { Pet } from "../schema/schema";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";

export default class UpdatePetByIdUseCase implements IuseCase<UpdatePetByIdUseCaseInput,
UpdatePetByIdUseCaseOutput> {
    constructor (
        @Inject (PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ) {}

    async run(input: UpdatePetByIdUseCaseInput): Promise<UpdatePetByIdUseCaseOutput> {

        let pet = await this.getPetById(input.id)

        if(!pet) {
            throw new PetNotFoundError()
        }
        await this.petRepository.updateById({
            ...input,
            _id: input.id
        });

        pet = await this.getPetById(input.id);

        return new CreatePetUseCaseOutput({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.size,
            gender: pet.gender,
            bio: pet.bio,
            photo: pet.photo,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt,
        })
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
    
}