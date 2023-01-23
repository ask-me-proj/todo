import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "./routes";

function App() {
	const client = new QueryClient();
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/login",
			element: <LoginPage />,
		},
		{
			path: "/signup",
			element: <SignupPage />,
		},
	]);

	return (
		<QueryClientProvider client={client}>
			<RouterProvider router={routes} />
		</QueryClientProvider>
	);
}

export default App;
