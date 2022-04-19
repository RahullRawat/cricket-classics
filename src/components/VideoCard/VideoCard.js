import React from "react";
import "./VideoCard.css";

export const VideoCard = () => {
	return (
		<div className="video-card-container">
			<div className="thumbnail-container">
				<img src="https://picsum.photos/400" alt="video-thumbnail" />
			</div>
			<div className="video-info-container">
				<img src="https://picsum.photos/10" className="avatar" alt="avatar" />
				<div className="video-info">
					<div className="video-title">BBL Highlights</div>
					<div className="video-details">
						<h6>BBl Highlights</h6>
						<span>1.6M Views</span>
					</div>
				</div>
			</div>
		</div>
	);
};
