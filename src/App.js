import "./App.css";
import { Navbar } from "./components/index";
import { Home, Playlist, LikedVideo, History, WatchLater } from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/playlist" element={<Playlist />} />
				<Route path="/liked" element={<LikedVideo />} />
				<Route path="/history" element={<History />} />
				<Route path="/watchlater" element={<WatchLater />} />
			</Routes>
		</div>
	);
}

export default App;
