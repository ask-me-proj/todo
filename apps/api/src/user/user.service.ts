import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { hash } from "bcrypt";
import { User } from "db/generated";
import { Request } from "express";
import { AuthService } from "src/auth/auth.service";
import { SignupDto } from "src/auth/dto/signup.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  async create(data: SignupDto): Promise<User> {
    const { password } = data;

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        hashedPassword,
        hashedToken: "",
      },
    });

    return user;
  }

  async getCurrentUser(req: Request): Promise<User> {
    const cookie = req.cookies["auth_token"];

    if (typeof cookie !== "string") {
      throw new ForbiddenException();
    }

    const user = await this.prisma.user.findFirst({
      where: {
        hashedToken: cookie,
      },
    });

    if (!user) {
      throw new NotFoundException("Invalid user");
    }

    return user;
  }
}
