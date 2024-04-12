
import FindByFilterAndTotal from "../dtos/find.by.filter.and.total";
import { Pet } from "../schemas/pet.schema";
import GetPetUseCaseInput from "../usecases/dtos/get.pet.usecase.input";

export default interface IPetRepository {
    create(data: Partial<Pet>): Promise<Pet>
    getById(id: string): Promise<Pet>
    updateById(data: Partial<Pet>): Promise<void>
    deleteById(id: string): Promise<void>
    findByFilter(input: GetPetUseCaseInput): Promise<FindByFilterAndTotal>
}