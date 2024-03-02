import { IsString, IsNotEmpty } from "class-validator";

export class UpdateFormDto {
    @IsString()
    @IsNotEmpty()
    verb1:string

    @IsString()
    @IsNotEmpty()
    verb2:string

    @IsString()
    @IsNotEmpty()
    verb3:string
}
