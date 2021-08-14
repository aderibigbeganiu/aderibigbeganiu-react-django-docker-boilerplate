import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
	const ENDPOINT = process.env.REACT_APP_API_URL;
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	return (
		<div className="App">
			<header className="App-header">
				<p>{`Backend api is: ${ENDPOINT}`}</p>
			</header>
		</div>
	);
}

export default App;
