import { Sequelize } from 'sequelize-typescript';
import { USCities } from 'src/city/city.entity';
import { USCounties } from 'src/county/county.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'kevin',
        database: 'geolocws_db',
      });
      sequelize.addModels([USCities, USCounties]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
