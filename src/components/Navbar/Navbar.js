import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="nav-brand-title">
				<a href="#">
					Cricket <span>Classics</span>
				</a>
			</div>
			<div className="search-bar-container">
				<i class="fa-solid fa-magnifying-glass"></i>
				<input type="text" />
			</div>
			<div className="profile-container">
				<i class="fa-solid fa-user"></i>
			</div>
			<div className="mobile-menu">
				<i class="fa-solid fa-bars"></i>
			</div>
		</div>
	);
};

export { Navbar };
