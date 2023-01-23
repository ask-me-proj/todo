import { useCurrentUser } from "../../features/user";

const HomePage = () => {
	const user = useCurrentUser();

	return <div>{user?.name}</div>;
};

export { HomePage };
