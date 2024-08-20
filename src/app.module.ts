// decorators
import { Module } from '@nestjs/common';

// modules
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        WeatherModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
