import { IuseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";


export default class GetShelterDetailsUseCase implements 
IuseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input:null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Jowwwww'
        }))
    }
}