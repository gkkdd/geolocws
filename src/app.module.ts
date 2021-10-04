import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import * as redisStore from 'cache-manager-redis-store';
import * as redisStore2 from 'cache-manager-redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StateController } from './state/state.controller';
import { StateService } from './state/state.service';
import { CityController } from './city/city.controller';
import { CountyController } from './county/county.controller';
import { CountyService } from './county/county.service';
import { CityService } from './city/city.service';
import { DatabaseModule } from './core/database/database.module';
import { cityProviders } from './city/city.providers';
import { countyProviders } from './county/county.providers';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    CacheModule.register({
      store: redisStore2,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: 600,
    }),
  ],
  controllers: [
    AppController,
    StateController,
    CityController,
    CountyController,
  ],
  providers: [
    AppService,
    StateService,
    CountyService,
    CityService,
    ...cityProviders,
    ...countyProviders,
  ],
})
export class AppModule {}
