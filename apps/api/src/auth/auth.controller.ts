import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseInterceptors,
} from "@nestjs/common";
import { User } from "db/generated";
import { Public } from "src/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";
import { TokenInterceptor } from "./interceptors/token.interceptor";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  async signup(@Body() data: SignupDto): Promise<User> {
    const signup = await this.authService.signup(data);

    return signup;
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  async login(@Body() data: LoginDto): Promise<any> {
    const login = await this.authService.login(data);

    return login;
  }

  @Get("profile")
  profile(@Request() req): Promise<User | null> {
    const user = this.authService.getCurrentUser(req);

    return user;
  }
}
