import { BadRequestException, Body, Controller, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input copy';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';
import { IuseCase } from 'src/domain/iusecase.interface';
import PetTokens from './pet.tokens';
import getPetByIdUseCaseInput from './usecases/dtos/get.pet.by.id.usecase.input';
import getPetByIdUseCaseOutput from './usecases/dtos/get.pet.by.id.usecase.output';
import UpdatePetControllerInput from './dtos/update.pet.controller.input';
import UpdatePetByIdUseCaseInput from './usecases/dtos/update.pet.by.id.usecase.input';

@Controller('pet')
export class PetController {
    @Inject(PetTokens.updatePetByIdUseCase) private readonly updatePetUseCase:
    IuseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.createPetUseCase) private readonly createPetUseCase:
    IuseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase) private readonly getPetByIdUseCase:
    IuseCase<getPetByIdUseCaseInput, getPetByIdUseCaseOutput>

    @Post()
    async createPet(@Body() input: CreatePetControllerInput): Promise<CreatePetControllerInput> {
        const useCaseInput = new CreatePetUseCaseInput({...input})
        return await this.createPetUseCase.run(useCaseInput)
        
    }

    @Get(':id')
    async getPetById(@Param('id') id: string): Promise<getPetByIdUseCaseOutput> {
        try {
            const useCaseInput = new getPetByIdUseCaseInput ({id})
            return await this.getPetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }
    @Put(':id')
    async updatePet(@Body() input: UpdatePetControllerInput, @Param('id') id: string) {
        const useCaseInput = new UpdatePetByIdUseCaseInput({
            ...input,
            id
        })
        return await this.updatePetUseCase.run(useCaseInput)
    }

}
