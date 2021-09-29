import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) {}

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
