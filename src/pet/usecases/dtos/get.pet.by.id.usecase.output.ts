export default class getPetByIdUseCaseOutput {
id: string;
  name: string;
  type: string;
  size: string;
  gender: string;
  bio: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<getPetByIdUseCaseOutput>) {
    Object.assign(this, data);
  }
}


