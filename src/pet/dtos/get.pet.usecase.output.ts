import PetResponse from "./pet.reponse";

export default class GetPetUseCaseOutput {
    currentPage: number;
    totalPages: number;
    items: PetResponse[];

    constructor(data: Partial<GetPetUseCaseOutput>) {
        Object.assign(this, data);
    }
}