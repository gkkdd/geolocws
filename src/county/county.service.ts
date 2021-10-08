import { Inject, Injectable } from '@nestjs/common';
import { USCounties } from './county.entity';

@Injectable()
export class CountyService {
  constructor(
    @Inject('COUNTY_REPOSITORY') private countyRepository: typeof USCounties,
  ) {}

  async findByCriteriaId(id: number): Promise<USCounties[]> {
    console.log(`START CountyService->findByCriteriaId of ${id}`);
    return await this.countyRepository.findAll<USCounties>({
      where: { criteria_id: id },
    });
  }

  async findByParentId(id: number): Promise<USCounties[]> {
    console.log(`START CountyService->findByParentId of ${id}`);
    return await this.countyRepository.findAll<USCounties>({
      where: { parent_id: id },
    });
  }

  async findByState(state: string): Promise<USCounties[]> {
    console.log(`START CountyService->findByState of ${state}`);
    return await this.countyRepository.findAll<USCounties>({
      where: { state: state },
    });
  }

  async create(payload: USCounties): Promise<USCounties> {
    console.log(`START CountyService->create`);
    return await this.countyRepository.create(payload);
  }

  async updateById(payload: USCounties, id: number) {
    console.log(`START CountyService->updateById`);
    return await this.countyRepository.update(payload, {
      where: { id: id },
    });
  }

  async deleteById(id: number): Promise<void> {
    console.log(`START CountyService->deleteById`);
    const to_delete = await this.countyRepository.destroy<USCounties>({
      where: { id: id },
    });
  }
}
