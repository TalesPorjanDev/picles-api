import { Pet } from "../schemas/pet.schema";

export default class FindByFilterAndTotal {
    items: Pet[];
    total: number;

    constructor(data: Partial<FindByFilterAndTotal> ) {
        Object.assign(this.items, data);
    }
}