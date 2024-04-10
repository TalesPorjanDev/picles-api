import { IuseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input copy";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository,interface";
import { Inject } from "@nestjs/common";

export default class CreatePetUseCase implements IuseCase<CreatePetUseCaseInput,
CreatePetUseCaseOutput> {
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ) {}
    
    
    async run(input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
        const newPet = await this.petRepository.create(input);
        return new CreatePetUseCaseOutput({
            id: newPet._id,
            name: newPet.name,
            type: newPet.type,
            size: newPet.size,
            gender: newPet.gender,
            bio: newPet.bio,
            photo: newPet.photo,
            createdAt: newPet.createdAt,
            updatedAt: newPet.updatedAt,
        })
            
        }
    }

