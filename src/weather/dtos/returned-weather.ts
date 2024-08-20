export class ReturnedWeatherDTO {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    };

    constructor(response: any) {
        this.main = response?.main;
        this.wind = response?.wind;
        this.weather = response?.weather[0];
    }
}
