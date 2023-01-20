import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { User } from "db/generated";
import { SignupDto } from "src/auth/dto/signup.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(name: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        name: name,
      },
    });

    return user;
  }

  async create(data: SignupDto): Promise<User> {
    const { password } = data;

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...data,
        hashedPassword,
      },
    });

    return user;
  }
}
