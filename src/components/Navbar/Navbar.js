import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = ({ searchInput, setSearchInput, optimizedFunc }) => {
	const { authState } = useAuth();
	const [mobileSidebar, setMobileSidebar] = useState(false);
	const location = useLocation();

	const showAside = () => {
		setMobileSidebar(!mobileSidebar);
	};

	const closeSidebar = () => {
		setMobileSidebar(!mobileSidebar);
	};
	return (
		<div className="navbar-container">
			<div className="nav-brand-title">
				<Link to="/">
					Cricket <span>Classics</span>
				</Link>
			</div>
			{location.pathname === "/" && (
				<div className="search-bar-container">
					<i class="fa-solid fa-magnifying-glass"></i>
					<input type="text" onChange={(e) => optimizedFunc(e.target.value)} />
				</div>
			)}

			{!authState.userData && (
				<div className="profile-container">
					<Link to="/login">
						<button className="btn btn-nav-login">Login</button>
					</Link>
				</div>
			)}
			{authState.userData && (
				<div className="profile-container">
					<Link to="/user">
						<button className="btn btn-nav-login">
							{authState.userData.firstName}
						</button>
					</Link>
				</div>
			)}

			{!mobileSidebar ? (
				<i class="fa-solid fa-bars mobile-menu" onClick={showAside}></i>
			) : (
				<i class="fa-solid fa-xmark mobile-menu" onClick={showAside}></i>
			)}

			<aside
				className={
					mobileSidebar ? `${"mobile-sidebar show-aside"}` : "mobile-sidebar"
				}
			>
				<ul>
					<Link to="/">
						<li onClick={closeSidebar}>
							<i className="fa-solid fa-house"></i>Home
						</li>
					</Link>
					<Link to="/playlist">
						<li onClick={closeSidebar}>
							<i className="fa-solid fa-list-check"></i>Playlist
						</li>
					</Link>
					<Link to="/liked">
						<li onClick={closeSidebar}>
							<i className="fa-solid fa-thumbs-up"></i>Liked Videos
						</li>
					</Link>
					<Link to="/history">
						<li onClick={closeSidebar}>
							<i className="fa-solid fa-clock-rotate-left"></i>History
						</li>
					</Link>
					<Link to="/watchlater">
						<li onClick={closeSidebar}>
							<i className="fa-solid fa-clock"></i>Watch Later
						</li>
					</Link>
					<Link to="/user">
						<li onClick={closeSidebar}>
							<i class="fa-solid fa-user"></i>User
						</li>
					</Link>
				</ul>
				<div className="footer-profile">
					<img
						src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
						class="avatar avatar-sm"
						alt="profile-avatar"
					/>
					<div className="profile details">
						{authState.userData ? (
							<span className="sm-text">@{authState.userData.firstName}</span>
						) : (
							<span className="sm-text">@Guest</span>
						)}
					</div>
				</div>
			</aside>
		</div>
	);
};

export { Navbar };
