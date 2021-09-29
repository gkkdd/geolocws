import { USCounties } from './county.entity';

export const countyProviders = [
  {
    provide: 'COUNTY_REPOSITORY',
    useValue: USCounties,
  },
];
