import {
  Controller,
  Get,
  Param,
  CACHE_MANAGER,
  Inject,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CountyService } from './county.service';
import { CACHE_TTL } from 'src/core/database/constants';
import { USCounties } from './county.entity';

@Controller('county')
export class CountyController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private countyService: CountyService,
  ) {}

  @Get('criteria/:id')
  async findByCriteriaId(@Param('id') id: number) {
    const from_cache = await this.cacheManager.get('key');
    if (from_cache) {
      console.log('from cache');
      return from_cache;
    }
    console.log('from db');
    const from_db = await this.countyService.findByCriteriaId(id);
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
    const from_db = await this.countyService.findByParentId(id);
    await this.cacheManager.set('key', from_db, { ttl: CACHE_TTL });
    return from_db;
  }

  @Get('state/:state')
  findByState(@Param('state') state: string) {
    return this.countyService.findByState(state);
  }

  @Post()
  create(@Body() uSCounties: USCounties): Promise<USCounties> {
    return this.countyService.create(uSCounties);
  }

  @Put('update/id/:id')
  updateById(@Body() uSCounties: USCounties, @Param('id') id: number) {
    return this.countyService.updateById(uSCounties, id);
  }

  @Delete('delete/id/:id')
  deleteById(@Param('id') id: number) {
    return this.countyService.deleteById(id);
  }
}
