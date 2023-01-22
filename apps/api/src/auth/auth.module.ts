import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    UserModule,
    PrismaModule,
    JwtModule.register({
      secret:
        "y_6sGQhI-4XJiQA80UQN1-wbOQTWc1bz8mH4wcnO53WaTdVh4dnJbszc4uJLkHL9ELepw9_KvutfeZ0FGX0qmYj2owgTDwZJESVX7JCOdN5Hby_E0_PcuinjFFEIbIJS25Gf0iMyhA5HqqhatwKeIABd3lysUrLu_6SSHIT5sRM",
      signOptions: { expiresIn: "60s" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
