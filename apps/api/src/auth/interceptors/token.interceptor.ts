import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Response } from "express";
import { map } from "rxjs";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthService } from "../auth.service";

@Injectable()
export class TokenInterceptor implements NestInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(
      map(async (user) => {
        const response = context.switchToHttp().getResponse<Response>();
        const token = await this.authService.signToken({
          name: user.name,
          sub: user.id,
        });

        response.setHeader("Authorization", `Bearer ${token}`);
        response.cookie("token", token, {
          httpOnly: true,
          signed: true,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
          domain: "localhost",
        });

        const updatedUser = await this.prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            hashedToken: token,
          },
        });

        return updatedUser;
      }),
    );
  }
}
