import React from "react";
import "./VideoCard.css";

export const VideoCard = ({
	thumbnail,
	channelAvatar,
	channelName,
	likes,
	time,
	title,
	videoViews,
}) => {
	return (
		<div className="video-card-container">
			<div className="thumbnail-container">
				<img src={thumbnail} alt="video-thumbnail" />
				<small className="timestamp">{time}</small>
			</div>
			<div className="video-info-container">
				<img src={channelAvatar} className="avatar" alt="avatar" />
				<div className="video-info">
					<div className="video-title">{title}</div>
					<div className="video-details">
						<h6>{channelName}</h6>
						<span>{videoViews}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
