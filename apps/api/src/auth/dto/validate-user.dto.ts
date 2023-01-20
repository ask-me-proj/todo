import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const ValidateUserSchema = z.object({
  name: z.string(),
  hashedPassword: z
    .string()
    .min(10)
    .max(100)
    .transform((str) => str.trim()),
});

export class ValidateUserDto extends createZodDto(ValidateUserSchema) {}
