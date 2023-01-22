import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { API_ROUTE } from "../../../common";
import { LoginSchema } from "../schemas";

interface UseLogin {
	login: (values: z.infer<typeof LoginSchema>) => Promise<void>;
	isLoading: boolean;
	isError: boolean;
	error: unknown;
}

const useLogin = (): UseLogin => {
	const navigate = useNavigate();
	const url = `${API_ROUTE}/login`;

	const { mutateAsync, isLoading, isError, error } = useMutation(
		async (input: z.infer<typeof LoginSchema>) => {
			const data = LoginSchema.parse(input);
			await axios.post(url, data);
		},
		{
			onSuccess() {
				navigate("/");
			},
		},
	);

	const login = async (values: z.infer<typeof LoginSchema>) => {
		await mutateAsync(values);
	};

	return {
		login,
		isLoading,
		isError,
		error,
	};
};

export { useLogin };
