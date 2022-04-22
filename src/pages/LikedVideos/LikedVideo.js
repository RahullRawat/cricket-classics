import React from "react";
import { Sidebar, HorizontalVideoCard } from "../../components";
import likedVideo from "../../assets/liked-video.svg";
import "./LikedVideo.css";

export const LikedVideo = () => {
	return (
		<div className="liked-video-wrapper">
			<Sidebar />
			<div className="liked-video-container ">
				<div className="liked-video-svg ">
					<img src={likedVideo} alt="liked-video" />
					<h6>Liked Video</h6>
					<p>5 Videos</p>
				</div>
				<div className="liked-video-list mt-4">
					<HorizontalVideoCard />
					<HorizontalVideoCard />
					<HorizontalVideoCard />
					<HorizontalVideoCard />
					<HorizontalVideoCard />
				</div>
			</div>
		</div>
	);
};
