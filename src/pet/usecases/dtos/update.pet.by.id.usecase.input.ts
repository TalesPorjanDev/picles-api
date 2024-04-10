import CreatePetUseCaseInput from "./create.pet.usecase.input copy";

export default class UpdatePetByIdUseCaseInput extends CreatePetUseCaseInput {
    id: string

    constructor(data:
    Partial<UpdatePetByIdUseCaseInput>) {
        super(data);
        Object.assign(this,data);
    }
    
}