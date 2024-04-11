import UpdatePetByIdUseCaseOutput from "../usecases/dtos/update.pet.by.id.usecase.output"

export default class UpdatePetPhotoByIdUseCaseOutput extends UpdatePetByIdUseCaseOutput {
    
    constructor(data: Partial<UpdatePetPhotoByIdUseCaseOutput>) {
        super(data)
        Object.assign(this, data)
    }
}