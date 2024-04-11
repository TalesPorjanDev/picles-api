import { BadRequestException, Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input copy';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';
import { IuseCase } from 'src/domain/iusecase.interface';
import PetTokens from './pet.tokens';
import getPetByIdUseCaseInput from './usecases/dtos/get.pet.by.id.usecase.input';
import getPetByIdUseCaseOutput from './usecases/dtos/get.pet.by.id.usecase.output';
import UpdatePetControllerInput from './dtos/update.pet.controller.input';
import UpdatePetByIdUseCaseInput from './usecases/dtos/update.pet.by.id.usecase.input';
import DeletePetByIdUseCaseInput from './usecases/dtos/delete.pet.by.id.usecase.input';
import DeletePetByIdUseCaseOutput from './usecases/dtos/delete.pet.by.id.usecase.output';

@Controller('pet')
export class PetController {
    @Inject(PetTokens.updatePetByIdUseCase) private readonly updatePetUseCase:
    IuseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.createPetUseCase) private readonly createPetUseCase:
    IuseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase) private readonly getPetByIdUseCase:
    IuseCase<getPetByIdUseCaseInput, getPetByIdUseCaseOutput>

    @Inject(PetTokens.deletePetByIdUseCase) private readonly deletePetByIdUseCase:
    IuseCase<DeletePetByIdUseCaseInput,DeletePetByIdUseCaseOutput>

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
        try {
            const useCaseInput = new UpdatePetByIdUseCaseInput({
                ...input,
                id
            })
            return await this.updatePetUseCase.run(useCaseInput)
        } catch(error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

    @Delete(':id')
    async deletePet(@Param('id') id: string): Promise<DeletePetByIdUseCaseOutput> {
        try {
            const useCaseInput = new DeletePetByIdUseCaseInput({ id })
            return await this.deletePetByIdUseCase.run(useCaseInput)
        } catch(error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

}
