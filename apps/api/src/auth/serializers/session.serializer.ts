import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  serializeUser(user: any, done: (error: any, user: any) => void) {
    done(null, { id: user.id });
  }

  deserializeUser(payload: any, done: (error: any, payload: string) => void) {
    const user = this.userService.findOne(payload.id);

    done(null, payload);
  }
}
