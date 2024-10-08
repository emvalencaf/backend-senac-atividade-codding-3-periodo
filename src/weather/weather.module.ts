import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
    imports: [],
    controllers: [WeatherController],
    providers: [WeatherService],
    exports: [],
})
export class WeatherModule {}
