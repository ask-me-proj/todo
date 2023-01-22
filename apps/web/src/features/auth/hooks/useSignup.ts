import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { API_ROUTE } from "../../../common";
import { SignupSchema } from "../schemas";

interface UseSignup {
	signup: (values: z.infer<typeof SignupSchema>) => Promise<void>;
	isLoading: boolean;
	isError: boolean;
	error: unknown;
}

const useSignup = (): UseSignup => {
	const navigate = useNavigate();
	const url = `${API_ROUTE}/auth/signup`;

	const { mutateAsync, isLoading, error, isError } = useMutation(
		async (input: z.infer<typeof SignupSchema>) => {
			const data = SignupSchema.parse(input);
			await axios.post(url, data);
		},
		{
			onSuccess() {
				navigate("/");
			},
		},
	);

	const signup = async (values: z.infer<typeof SignupSchema>) => {
		await mutateAsync(values);
	};

	return {
		signup,
		isLoading,
		isError,
		error,
	};
};

export { useSignup };
