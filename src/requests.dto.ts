import { IsNotEmpty, IsString } from 'class-validator';

export class GETPdfDto {

    @IsNotEmpty()
    @IsString()
    readonly formId: string;

    @IsNotEmpty()
    @IsString()
    readonly uniqueId: string;
}