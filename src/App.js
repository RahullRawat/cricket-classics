import "./App.css";
import { Navbar, SinglePlaylist, RequireAuth } from "./components/index";
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
				<Route
					path="/playlist"
					element={
						<RequireAuth>
							<Playlist />
						</RequireAuth>
					}
				/>
				<Route
					path="/playlist/:playlistID"
					element={
						<RequireAuth>
							<SinglePlaylist />
						</RequireAuth>
					}
				/>
				<Route
					path="/liked"
					element={
						<RequireAuth>
							<LikedVideo />
						</RequireAuth>
					}
				/>
				<Route
					path="/history"
					element={
						<RequireAuth>
							<History />
						</RequireAuth>
					}
				/>
				<Route
					path="/watchlater"
					element={
						<RequireAuth>
							<WatchLater />
						</RequireAuth>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/user"
					element={
						<RequireAuth>
							<User />
						</RequireAuth>
					}
				/>
				<Route path="/:id" element={<SingleVideo />} />
			</Routes>
		</div>
	);
}

export default App;
