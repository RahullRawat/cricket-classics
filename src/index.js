import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
	AuthProvider,
	LikeProvider,
	WatchLaterProvider,
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<LikeProvider>
					<WatchLaterProvider>
						<App />
					</WatchLaterProvider>
				</LikeProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
