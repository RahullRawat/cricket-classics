import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToWatchLater } from "../../services/addToWatchLater";
import { deleteFromWatchLater } from "../../services/deleteFromWatchLater";
import { useWatchLater } from "../../context/WatchLaterContext";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "./VideoCard.css";

export const VideoCard = ({ video }) => {
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();

	const {
		authState: { token },
	} = useAuth();

	const {
		watchLaterState: { watchLater },
		watchLaterDispatch,
	} = useWatchLater();

	const isWatchLater = watchLater.some(
		(alreadyPresentVideo) => alreadyPresentVideo._id === video._id
	);
	const watchLaterHandler = (id) => {
		setModal((prev) => !prev);
		if (!isWatchLater) {
			if (token) {
				addToWatchLater(video, token, watchLaterDispatch);
				toast.success(`${video.title.slice(0, 20)}... added to watch later`);
			} else {
				navigate("/login");
			}
		} else {
			deleteFromWatchLater(id, token, watchLaterDispatch);
			toast.error(`${video.title.slice(0, 20)}... removed from watch later`);
		}
	};
	return (
		<div className="video-card-container">
			<Link to={`/${video._id}`}>
				<div className="thumbnail-container">
					<img src={video.thumbnail} alt="video-thumbnail" />
					<small className="timestamp">{video.time}</small>
				</div>
			</Link>
			<div className="video-info-container">
				<img src={video.channelAvatar} className="avatar" alt="avatar" />
				<div className="video-info">
					<div className="video-title">{video.title}</div>
					<div className="video-details">
						<h6>{video.channelName}</h6>
						<span>{video.videoViews}</span>
					</div>
				</div>
				<i
					class="fa-solid fa-ellipsis-vertical"
					onClick={() => setModal((prev) => !prev)}
				></i>
				{modal && (
					<ul className="modal-container">
						<li onClick={() => watchLaterHandler(video._id)}>
							{isWatchLater ? "Remove from watch later" : "Add to watch later"}
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};
