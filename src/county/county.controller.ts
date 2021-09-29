import { Controller, Get, Param } from '@nestjs/common';
import { CountyService } from './county.service';

@Controller('county')
export class CountyController {
  constructor(private countyService: CountyService) {}

  @Get('criteria/:id')
  findByCriteriaId(@Param('id') id: number) {
    return this.countyService.findByCriteriaId(id);
  }

  @Get('parent/:id')
  findByParentId(@Param('id') id: number) {
    return this.countyService.findByParentId(id);
  }

  @Get('state/:state')
  findByState(@Param('state') state: string) {
    return this.countyService.findByState(state);
  }
}
