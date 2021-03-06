import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) { }
    execute({ name, description }: IRequest) {
        const specficationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specficationAlreadyExists) {
            throw new Error('Specification already exists!')
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }
}