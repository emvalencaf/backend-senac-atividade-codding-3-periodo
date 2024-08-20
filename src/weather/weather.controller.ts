// nestjs tools
import {
    BadRequestException,
    Controller,
    Get,
    InternalServerErrorException,
    Query,
} from '@nestjs/common';

// services
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get()
    async getWeather(
        @Query('city') city: string,
        @Query('state') state: string,
        @Query('country') country: string,
    ) {
        try {
            if (!city || !state || !country)
                throw new BadRequestException(
                    'Campos cidade, estado e país são campos obrigatórios.',
                );

            const weatherCast = await this.weatherService.getWeather({
                city,
                state,
                country,
            });

            return weatherCast;
        } catch (error) {
            if (error instanceof BadRequestException) throw error;

            throw new InternalServerErrorException(
                'Falha ao buscar a previsão do tempo.',
            );
        }
    }
}
