export default class getPetByIdUseCaseInput {
    id: string

    constructor(data: Partial<getPetByIdUseCaseInput>) {
        Object.assign(this, data);
    }
}