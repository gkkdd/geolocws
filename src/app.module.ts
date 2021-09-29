import { Module } from '@nestjs/common';
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
  imports: [DatabaseModule],
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