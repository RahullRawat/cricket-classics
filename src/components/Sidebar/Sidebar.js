import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

export const Sidebar = () => {
	const { authState } = useAuth();
	return (
		<div className="sidebar-container">
			<ul>
				<Link to="/">
					<li>
						<i className="fa-solid fa-house"></i>
						<span>Home</span>
					</li>
				</Link>
				<Link to={authState.userData ? "/playlist" : "/login"}>
					<li>
						<i className="fa-solid fa-list-check"></i>
						<span>Playlists</span>
					</li>
				</Link>
				<Link to={authState.userData ? "/liked" : "/login"}>
					<li>
						<i className="fa-solid fa-thumbs-up"></i>
						<span>Liked Videos</span>
					</li>
				</Link>
				<Link to={authState.userData ? "/history" : "/login"}>
					<li>
						<i className="fa-solid fa-clock-rotate-left"></i>
						<span>History</span>
					</li>
				</Link>
				<Link to={authState.userData ? "/watchlater" : "/login"}>
					<li>
						<i className="fa-solid fa-clock"></i>
						<span>Watch Later</span>
					</li>
				</Link>
			</ul>
		</div>
	);
};
