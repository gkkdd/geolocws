import { Body, Controller, Get, Post } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private stateService: StateService) {}

  @Get()
  findAll() {
    return this.stateService.findAll();
  }
}
