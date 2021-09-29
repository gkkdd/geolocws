import { Inject, Injectable } from '@nestjs/common';

import { USCities } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @Inject('CITY_REPOSITORY')
    private cityRepository: typeof USCities,
  ) {}

  async findByCriteriaId(id: number): Promise<USCities[]> {
    console.log(`START CityService->findByCriteriaId of ${id}`);
    return await this.cityRepository.findAll<USCities>({
      where: { criteria_id: id },
    });
  }

  async findByParentId(id: number): Promise<USCities[]> {
    console.log(`START CityService->findByParentId of ${id}`);
    return await this.cityRepository.findAll<USCities>({
      where: { parent_id: id },
    });
  }

  async findByState(state: string) {
    console.log(`START CityService->findByState of ${state}`);
    return await this.cityRepository.findAll<USCities>({
      where: { state: state },
    });
  }
}
