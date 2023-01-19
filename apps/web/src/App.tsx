import axios from "axios";
import { useEffect, useState } from "react";
import { API_ROUTE } from "./common/constants";

function App() {
	const [response, setResponse] = useState<string>("NO RESPONCE FROM SERVER");
	
	useEffect(() => {
		const fetchResponce = async () => {
			const res = await axios.get(API_ROUTE);

			setResponse(res.data)
		}

		fetchResponce()
	}, [])

	return <div>{response}</div>;
}

export default App;
