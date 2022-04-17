import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<ul>
				<li>
					<i className="fa-solid fa-house"></i>
					<span>Home</span>
				</li>
				<li>
					<i className="fa-solid fa-photo-film"></i>
					<span>Playlists</span>
				</li>
				<li>
					<i className="fa-solid fa-thumbs-up"></i>
					<span>Liked Videos</span>
				</li>
				<li>
					<i className="fa-solid fa-clock-rotate-left"></i>
					<span>History</span>
				</li>
				<li>
					<i className="fa-solid fa-clock"></i>
					<span>Watch Later</span>
				</li>
			</ul>
		</div>
	);
};
