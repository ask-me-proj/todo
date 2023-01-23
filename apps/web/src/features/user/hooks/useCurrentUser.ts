import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_ROUTE } from "../../../common";

const useCurrentUser = () => {
	const url = `${API_ROUTE}/auth/profile`;

	const { data } = useQuery({
		queryKey: ["current_user"],
		queryFn: async () => {
			const res = await axios.get(url).catch((error) => {
				console.log(error);
			});

			return res?.data;
		},
	});

	return data;
};

export { useCurrentUser };
