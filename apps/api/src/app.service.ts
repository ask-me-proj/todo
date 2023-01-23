import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AppService {
  getHello(request: Request) {
    return "Hello world!";
  }
}
