import { Controller, Get, Request } from "@nestjs/common";
import { AppService } from "./app.service";
import { Public } from "./common";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(@Request() req) {
    return this.appService.getHello(req);
  }
}
