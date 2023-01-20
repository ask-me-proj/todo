import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const data = {
      name: username,
      hashedPassword: password,
    };

    const user = await this.authService.validateUser(data);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
