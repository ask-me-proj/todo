import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "src/common";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super({
      secretOrKey:
        "y_6sGQhI-4XJiQA80UQN1-wbOQTWc1bz8mH4wcnO53WaTdVh4dnJbszc4uJLkHL9ELepw9_KvutfeZ0FGX0qmYj2owgTDwZJESVX7JCOdN5Hby_E0_PcuinjFFEIbIJS25Gf0iMyhA5HqqhatwKeIABd3lysUrLu_6SSHIT5sRM",
    });
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}
