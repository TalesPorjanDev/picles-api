export default class CreatePetUseCaseOutput {
    id: string;
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;
    photo: string;
    createdAt: string;
    updatedAt: string;

    constructor(data: Partial<CreatePetUseCaseOutput>) {
        Object.assign(this,data)
    }
}
