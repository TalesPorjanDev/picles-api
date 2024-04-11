export default class UpdatePetPhotoByIdUseCaseInput {
    id: string
    photoUrl: string

    constructor(data: Partial<UpdatePetPhotoByIdUseCaseInput>) {
        Object.assign(this, data)
    }
}