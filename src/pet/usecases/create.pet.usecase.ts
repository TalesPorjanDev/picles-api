import { IuseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input copy";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";

export default class CreatePetUseCase implements IuseCase<CreatePetUseCaseInput,
CreatePetUseCaseOutput> {
    run(input: CreatePetUseCaseInput):
    Promise<CreatePetUseCaseOutput> {
        throw new Error("Method not implemented")
    }
}