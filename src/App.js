import "./App.css";
import { Navbar } from "./components/index";
import {
	Home,
	Playlist,
	LikedVideo,
	History,
	WatchLater,
	Login,
	Signup,
	User,
	SingleVideo,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				theme="colored"
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/playlist" element={<Playlist />} />
				<Route path="/liked" element={<LikedVideo />} />
				<Route path="/history" element={<History />} />
				<Route path="/watchlater" element={<WatchLater />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/user" element={<User />} />
				<Route path="/:id" element={<SingleVideo />} />
			</Routes>
		</div>
	);
}

export default App;
