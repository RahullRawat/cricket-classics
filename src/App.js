import "./App.css";
import { Navbar } from "./components/index";
import { Home, Playlist } from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/playlist" element={<Playlist />} />
			</Routes>
		</div>
	);
}

export default App;
