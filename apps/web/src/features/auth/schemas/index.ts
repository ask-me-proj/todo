import { z } from "zod";

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

export { LoginSchema, SignupSchema };
