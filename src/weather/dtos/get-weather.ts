import { IsString } from 'class-validator';

export class GetWeatherDTO {
    @IsString()
    city: string;
    @IsString()
    state: string;
    @IsString()
    country: string;
}
