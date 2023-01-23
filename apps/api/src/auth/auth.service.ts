import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { User } from "db/generated";
import { Request } from "express";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";
import { ValidateUserDto } from "./dto/validate-user.dto";
import { Payload } from "./types";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(data: SignupDto) {
    const { email } = data;

    const currentUser = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (currentUser) {
      throw new ConflictException("User already exist");
    }

    const user = await this.userService.create(data);

    return user;
  }

  async login(data: LoginDto): Promise<any> {
    const { email, password } = data;

    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException("Not found email or password");
    }

    const isPasswwordValid = await compare(password, user.hashedPassword);

    if (!isPasswwordValid) {
      throw new NotFoundException("Not found email or password");
    }

    const payload = {
      name: user.name,
      sub: user.id,
    };

    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }

  async signToken(payload: Payload): Promise<string> {
    const token = this.jwtService.sign(payload);

    return token;
  }

  async validateUser(data: ValidateUserDto): Promise<User | null> {
    const { name, hashedPassword } = data;

    const user = await this.prisma.user.findFirst({
      where: {
        name,
      },
    });

    if (!user) {
      return null;
    }

    const password = await compare(hashedPassword, user.hashedPassword);

    if (!password) {
      return null;
    }

    return user;
  }

  async getCurrentUser(req: Request) {
    const cookie = req.cookies["token"];

    const user = await this.prisma.user.findFirst({
      where: {
        hashedToken: cookie,
      },
    });

    return user;
  }
}
