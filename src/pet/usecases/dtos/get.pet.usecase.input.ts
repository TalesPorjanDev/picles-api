export default class GetPetUseCaseInput {
    type?: string;
    size?: string;
    gender?: string;
    page: number;
    itemsPerPage: number;

    constructor(data: Partial<GetPetUseCaseInput>) {
        Object.assign(this, data)
    }
}