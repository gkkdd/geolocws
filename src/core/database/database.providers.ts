import { Sequelize } from 'sequelize-typescript';
import { USCities } from 'src/city/city.entity';
import { USCounties } from 'src/county/county.entity';
import { databaseConfig } from './database.config';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from './constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          console.log(`START ${process.env.NODE_ENV}`);
          config = databaseConfig.development;
          break;
        case TEST:
          console.log(`START ${process.env.NODE_ENV}`);
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          console.log(`START ${process.env.NODE_ENV}`);
          config = databaseConfig.production;
          break;
        default:
          console.log(`START ${process.env.NODE_ENV}`);
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([USCities, USCounties]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
