import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
			<div className="profile-container">
				<Link to="/login">
					<i class="fa-solid fa-user"></i>
				</Link>
			</div>
			<div className="mobile-menu">
				<i class="fa-solid fa-bars"></i>
			</div>
		</div>
	);
};

export { Navbar };
