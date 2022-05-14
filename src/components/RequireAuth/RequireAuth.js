import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RequireAuth = ({ children }) => {
	const {
		authState: { token },
	} = useAuth();
	const location = useLocation();
	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
