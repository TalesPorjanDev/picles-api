import { IuseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import { Injectable } from "@nestjs/common";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input copy";

@Injectable()
export default class UpdateShelterDetailsUseCase implements IuseCase<UpdateShelterDetailsUseCaseInput,
UpdateShelterDetailsUseCaseOutput>
{
    run(input: UpdateShelterDetailsUseCaseInput):
    Promise<UpdateShelterDetailsUseCaseOutput> {
        throw new Error("Method not Implemented.");
    }
}