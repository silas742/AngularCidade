import { City } from './city';
import { Weather } from './weather';
import { Main } from './main';

export class Previsao {
    city: City;
    dt: number;
    main: Main;
    weather: Weather[];
}
