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
      where: { canonical_name: state },
    });
  }
}
