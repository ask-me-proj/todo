import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 360000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookieParser("keyboard key"));

  app.enableCors({
    origin: "http://localhost:5173",
    credentials: true,
  });

  await app.listen(4000);
}
bootstrap();
