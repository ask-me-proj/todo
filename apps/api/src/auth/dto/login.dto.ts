import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .transform((str) => str.toLowerCase().trim()),
  password: z
    .string()
    .min(10)
    .max(100)
    .transform((str) => str.trim()),
});

export class LoginDto extends createZodDto(LoginSchema) {}
