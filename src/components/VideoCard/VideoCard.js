import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";

export const VideoCard = ({
	thumbnail,
	channelAvatar,
	channelName,
	likes,
	time,
	title,
	videoViews,
	_id,
}) => {
	return (
		<div className="video-card-container">
			<Link to={`/${_id}`}>
				<div className="thumbnail-container">
					<img src={thumbnail} alt="video-thumbnail" />
					<small className="timestamp">{time}</small>
				</div>
			</Link>
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
