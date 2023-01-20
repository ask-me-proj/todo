import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { User } from "db/generated";
import { AuthUser } from "src/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";
import { TokenInterceptor } from "./token.interceptor";
import { Tokens } from "./types";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  async signup(@Body() data: SignupDto): Promise<User> {
    const signup = await this.authService.signup(data);

    return signup;
  }

  @Post("login")
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async login(@Body() data: LoginDto): Promise<Tokens> {
    const login = await this.authService.login(data);

    return login;
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  profile(@AuthUser() user: User): User {
    return user;
  }
}
