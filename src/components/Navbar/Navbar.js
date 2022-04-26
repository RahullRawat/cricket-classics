import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
	const { authState, signOut } = useAuth();
	return (
		<div className="navbar-container">
			<div className="nav-brand-title">
				<Link to="/">
					Cricket <span>Classics</span>
				</Link>
			</div>
			<div className="search-bar-container">
				<i class="fa-solid fa-magnifying-glass"></i>
				<input type="text" />
			</div>
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

			<div className="mobile-menu">
				<i class="fa-solid fa-bars"></i>
			</div>
		</div>
	);
};

export { Navbar };
