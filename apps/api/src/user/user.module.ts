import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class UserModule {}
