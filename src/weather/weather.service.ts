import { Injectable } from '@nestjs/common';
import { ReturnedWeatherDTO } from './dtos/returned-weather';
import { GetWeatherDTO } from './dtos/get-weather';

@Injectable()
export class WeatherService {
    async getWeather(geoLoc: GetWeatherDTO) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${geoLoc.city},${geoLoc.state},${geoLoc.country}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`;

        const res = await fetch(URL);

        const json = await res.json();

        return new ReturnedWeatherDTO(json);
    }
}
