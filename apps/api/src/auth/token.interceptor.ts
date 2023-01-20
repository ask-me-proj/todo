import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { User } from "db/generated";
import type { Response } from "express";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenInterceptor implements NestInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<User>,
  ): Observable<User> {
    return next.handle().pipe(
      map((user) => {
        const response = context.switchToHttp().getResponse<Response>();
        const token = this.authService.signToken({
          name: user.name,
          sub: user.id,
        });

        response.setHeader("Authorization", `Bearer ${token}`);
        response.cookie("token", token, {
          httpOnly: true,
          signed: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });

        return user;
      }),
    );
  }
}
