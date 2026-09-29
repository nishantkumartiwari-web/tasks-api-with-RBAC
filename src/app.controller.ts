import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
//console.log("herre at line 3 in app controller");

@Controller()

export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
}
