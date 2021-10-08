import { Inject, Injectable, CACHE_MANAGER, Body } from '@nestjs/common';
import { where } from 'sequelize';
import { USCities } from './city.entity';
import { CityDto } from './dto/city.dto';

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

  async create(payload: USCities): Promise<USCities> {
    console.log(`START CityService->create`);
    return await this.cityRepository.create(payload);
  }

  async updateById(payload: USCities, id: number) {
    console.log(`START CityService->updateById`);
    return await this.cityRepository.update(payload, {
      where: { id: id },
    });
  }

  async deleteById(id: number): Promise<void> {
    console.log(`START CityService->deleteById`);
    const to_delete = await this.cityRepository.destroy<USCities>({
      where: { id: id },
    });
  }
}
