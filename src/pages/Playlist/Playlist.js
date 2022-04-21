import React from "react";
import { Sidebar } from "../../components";
import "./Playlist.css";

export const Playlist = () => {
	return (
		<div className="playlist-wrapper">
			<Sidebar />
			<div className="playlist-display-container ">
				<div className="playlist-thumbnail ">
					<img
						src="https://i3.ytimg.com/vi/FEk6TEJSll8/maxresdefault.jpg"
						alt=""
					/>
					<div className="playlist-videos">
						<span className="playlist-videos-count">1</span>
						<i className="fa-solid fa-list-check playlist-icon"></i>
					</div>
				</div>
			</div>
		</div>
	);
};
