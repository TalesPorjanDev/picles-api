import { Pet } from "../schema/schema";

export default interface IPetRepository {
    create(data: Partial<Pet>): Promise<Pet>
    getById(id: string): Promise<Pet>
}