import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const SignupSchema = z.object({
  name: z.string(),
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

export class SignupDto extends createZodDto(SignupSchema) {}
