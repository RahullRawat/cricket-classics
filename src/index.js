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
	HistoryProvider,
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<HistoryProvider>
					<LikeProvider>
						<WatchLaterProvider>
							<App />
						</WatchLaterProvider>
					</LikeProvider>
				</HistoryProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
