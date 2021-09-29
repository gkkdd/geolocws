import { USCities } from './city.entity';

export const cityProviders = [
  {
    provide: 'CITY_REPOSITORY',
    useValue: USCities,
  },
];
