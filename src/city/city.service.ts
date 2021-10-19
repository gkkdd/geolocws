import { Inject, Injectable } from '@nestjs/common';
import { USCities } from './city.entity';
import { CityDto } from './dto/city.dto';

@Injectable()
export class CityService {
  constructor(
    @Inject('CITY_REPOSITORY')
    private cityRepository: typeof USCities,
  ) {}

  async findByCriteriaId(id: number): Promise<CityDto[]> {
    console.log(`START CityService->findByCriteriaId of ${id}`);
    return await this.cityRepository.findAll({
      where: { criteria_id: id },
    });
  }

  async findByParentId(id: number): Promise<CityDto[]> {
    console.log(`START CityService->findByParentId of ${id}`);
    return await this.cityRepository.findAll({
      where: { parent_id: id },
    });
  }

  async findByState(state: string): Promise<CityDto[]> {
    console.log(`START CityService->findByState of ${state}`);
    return await this.cityRepository.findAll({
      where: { state: state },
    });
  }

  async create(payload: CityDto) {
    console.log(`START CityService->create`);
    return await this.cityRepository.create(payload);
  }

  async updateById(payload: CityDto, id: number) {
    console.log(`START CityService->updateById`);
    return await this.cityRepository.update(payload, {
      where: { id: id },
    });
  }

  async deleteById(id: number) {
    console.log(`START CityService->deleteById`);
    const to_delete = await this.cityRepository.destroy({
      where: { id: id },
    });
  }
}
