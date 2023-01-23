import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "db/generated";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({});
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.authService.validateUser({
      name: username,
      hashedPassword: password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
