import { User } from "db/generated";

interface Tokens {
  access_token: string;
  user: User;
}

interface Payload {
  name: string;
  sub: number;
}

export type { Tokens, Payload };
