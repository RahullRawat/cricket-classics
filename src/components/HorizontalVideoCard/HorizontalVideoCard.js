import React from "react";
import "./HorizontalVideoCard.css";

export const HorizontalVideoCard = () => {
	return (
		<div className="horizontal-video-card">
			<div className="thumbnail-container">
				<img
					src="https://i3.ytimg.com/vi/AFEZzf9_EHk/maxresdefault.jpg"
					alt="video-thumbnail"
				/>
				<small className="timestamp">12.01</small>
			</div>
			<div className="video-info">
				<div className="video-title">
					Stars crush Hurricanes as Maxwell makes history | BBL|11
				</div>
				<div className="video-details">
					<h6>ICC</h6>
				</div>
				<div className="delete-video-icon">
					<i class="fa-solid fa-trash-can"></i>
				</div>
			</div>
		</div>
	);
};
