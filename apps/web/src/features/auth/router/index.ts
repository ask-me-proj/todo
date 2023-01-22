import { AuthRouter } from "./types";

const authRouter: AuthRouter = {
	login() {
		return "/login";
	},
	signup() {
		return "/signup";
	},
};

export { authRouter };
