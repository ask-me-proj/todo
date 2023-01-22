import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        "y_6sGQhI-4XJiQA80UQN1-wbOQTWc1bz8mH4wcnO53WaTdVh4dnJbszc4uJLkHL9ELepw9_KvutfeZ0FGX0qmYj2owgTDwZJESVX7JCOdN5Hby_E0_PcuinjFFEIbIJS25Gf0iMyhA5HqqhatwKeIABd3lysUrLu_6SSHIT5sRM",
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
