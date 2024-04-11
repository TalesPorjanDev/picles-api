import { Injectable } from "@nestjs/common";
import UpdatePetByIdUseCaseOutput from "./dtos/update.pet.by.id.usecase.output";
import { IuseCase } from "src/domain/iusecase.interface";

@Injectable()
export default class UpdatePetPhotoByIdUseCaseInput implements IuseCase<UpdatePetPhotoByIdUseCaseInput, UpdatePetByIdUseCaseOutput>
{
    run(input: UpdatePetPhotoByIdUseCaseInput):
    Promise<UpdatePetByIdUseCaseOutput> {
        throw new Error("Method not implemented")
    }
}