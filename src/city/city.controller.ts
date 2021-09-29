import { Controller, Get, Param, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private cityService: CityService,
  ) {}

  @Get('criteria/:id')
  findByCriteriaId(@Param('id') id: number) {
    return this.cityService.findByCriteriaId(id);
  }

  @Get('parent/:id')
  findByParentId(@Param('id') id: number) {
    return this.cityService.findByParentId(id);
  }

  @Get('state/:state')
  findByState(@Param('state') state: string) {
    return this.cityService.findByState(state);
  }
}
