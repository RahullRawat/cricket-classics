import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./User.css";

export const User = () => {
	const { authState, signOut } = useAuth();
	useEffect(() => {
		document.title = "Cricket Classics | User";
	}, []);
	return (
		<div className="user-profile-wrapper">
			<section className="user-profile-container ">
				<div className="profile-details">
					<div className="username-container">
						<h5>Name - </h5>
						{authState.userData && (
							<h6 className="username">
								{authState.userData.firstName + authState.userData.lastName}
							</h6>
						)}
					</div>
					<div className="user-email-container">
						<h5>Email - </h5>
						{authState.userData && (
							<h6 className="email">{authState.userData.email}</h6>
						)}
					</div>
				</div>
				<button className="btn-primary btn btn-logout" onClick={signOut}>
					LogOut
				</button>
			</section>
		</div>
	);
};
