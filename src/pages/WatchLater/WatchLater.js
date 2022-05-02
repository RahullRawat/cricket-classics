import React from "react";
import { Sidebar, HorizontalVideoCard } from "../../components";
import watchLater from "../../assets/watch-later.svg";
import "./WatchLater.css";

export const WatchLater = () => {
	return (
		<div className="liked-video-wrapper">
			<Sidebar />
			<div className="liked-video-container ">
				<div className="liked-video-svg ">
					<img src={watchLater} alt="liked-video" />
					<h6>Watch Later</h6>
					<p>2 Videos</p>
				</div>
				<div className="liked-video-list mt-4">
					{/* <HorizontalVideoCard /> */}
					{/* <HorizontalVideoCard /> */}
					<h2 className="no-videos">Nothing Here</h2>
				</div>
			</div>
		</div>
	);
};
