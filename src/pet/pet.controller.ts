import { Body, Controller, Inject, Post } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input copy';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';
import { IuseCase } from 'src/domain/iusecase.interface';
import PetTokens from './pet.tokens';

@Controller('pet')
export class PetController {

    @Inject(PetTokens.createPetUseCase) private readonly createPetUseCase:
    IuseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Post()
    async createPet(@Body() input: CreatePetControllerInput): Promise<CreatePetControllerInput> {
        const useCaseInput = new CreatePetUseCaseInput({...input})
        return await this.createPetUseCase.run(useCaseInput)
        
    }
}
