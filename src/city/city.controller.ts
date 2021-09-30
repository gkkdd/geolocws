import { Controller, Get, Param, CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CityService } from './city.service';
import { CACHE_TTL } from 'src/core/database/constants';

@Controller('city')
export class CityController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private cityService: CityService,
  ) {}

  @Get('criteria/:id')
  async findByCriteriaId(@Param('id') id: number) {
    const from_cache = await this.cacheManager.get('key');
    if (from_cache) {
      console.log('from cache');
      return from_cache;
    }
    console.log('from db');
    const from_db = await this.cityService.findByCriteriaId(id);
    await this.cacheManager.set('key', from_db, { ttl: CACHE_TTL });
    return from_db;
  }

  @Get('parent/:id')
  async findByParentId(@Param('id') id: number) {
    const from_cache = await this.cacheManager.get('key');
    if (from_cache) {
      console.log('from cache');
      return from_cache;
    }
    console.log('from db');
    const from_db = await this.cityService.findByParentId(id);
    await this.cacheManager.set('key', from_db, { ttl: CACHE_TTL });
    return from_db;
  }

  @Get('state/:state')
  findByState(@Param('state') state: string) {
    return this.cityService.findByState(state);
  }
}
