import React from "react";
import { Sidebar, HorizontalVideoCard } from "../../components";
import history from "../../assets/history.svg";
import "./History.css";

export const History = () => {
	return (
		<div className="liked-video-wrapper">
			<Sidebar />
			<div className="liked-video-container ">
				<div className="liked-video-svg ">
					<img src={history} alt="liked-video" />
					<h6> History</h6>
					<p>1 Video</p>
				</div>
				<div className="liked-video-list mt-4">
					{/* <HorizontalVideoCard /> */}
					<h2 className="no-videos">No watch history</h2>
				</div>
			</div>
		</div>
	);
};
