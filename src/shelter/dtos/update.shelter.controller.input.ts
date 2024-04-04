import { IsEmail, IsString, IsNumberString, Length, IsNotEmpty } from "class-validator"

export default class UpdateShelterControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsString()
    @Length(10,11)
    @IsNotEmpty()
    whatsapp: string
    
    @IsString()
    @Length(10,11)
    @IsNotEmpty()
    phone: string
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}