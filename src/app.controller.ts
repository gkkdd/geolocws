import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

console.log('AppController instantiated');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
