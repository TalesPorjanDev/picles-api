export interface IuseCase<Input, Output> {
    run(input: Input): Promise<Output>
}