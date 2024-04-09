import { Body, Controller, Get, Inject, Patch, Post, Put  } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import ShelterTokens from './shelter.tokens';
import { IuseCase } from 'src/domain/iusecase.interface';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';
import UpdateShelterDetailsUseCaseOutput from './usecases/dtos/update.shelter.details.usecase.output';
import UpdateShelterDetailsUseCaseInput from './usecases/dtos/update.shelter.details.usecase.input copy';


@Controller('shelter')
export class ShelterController {
    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IuseCase<null,
    GetShelterDetailsUseCaseOutput>

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly updateShelterDetailsUseCase: IuseCase<UpdateShelterControllerInput, UpdateShelterDetailsUseCaseOutput>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput> {
        return await this.getShelterDetailsUseCase.run(null)
    }
    
    @Put()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput) {
        const useCaseInput = new UpdateShelterDetailsUseCaseInput({...input});
        return await this.updateShelterDetailsUseCase.run(useCaseInput)
    }
     
}
        
    



