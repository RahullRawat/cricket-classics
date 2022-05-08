import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { deleteFromLike } from "../../services/deleteFromLikes";
import { deleteFromWatchLater } from "../../services/deleteFromWatchLater";
import { deleteFromHistory } from "../../services/deleteFromHistory";
import { deleteVideoFromPlaylist } from "../../services/deleteVideoFromPlaylist";
import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import { useWatchLater } from "../../context/WatchLaterContext";
import { useHistory } from "../../context/HistoryContext";
import { usePlaylists } from "../../context/PlaylistsContext";
import "./HorizontalVideoCard.css";

export const HorizontalVideoCard = ({ video }) => {
	const {
		authState: { token },
	} = useAuth();
	const { likeDispatch } = useLike();

	const { watchLaterDispatch } = useWatchLater();

	const { historyDispatch } = useHistory();

	const { playlistsDispatch } = usePlaylists();

	const location = useLocation();
	const { playlistID } = useParams();

	const deleteHandler = () => {
		if (location.pathname === "/liked") {
			deleteFromLike(video._id, token, likeDispatch);
		}
		if (location.pathname === "/watchlater") {
			deleteFromWatchLater(video._id, token, watchLaterDispatch);
		}
		if (location.pathname === "/history") {
			deleteFromHistory(video._id, token, historyDispatch);
		}
		if (location.pathname === `/playlist/${playlistID}`) {
			deleteVideoFromPlaylist(token, video._id, playlistID, playlistsDispatch);
		}
	};
	return (
		<div className="horizontal-video-card">
			<Link to={`/${video._id}`}>
				<div className="thumbnail-container">
					<img src={video.thumbnail} alt="video-thumbnail" />
					<small className="timestamp">{video.time}</small>
				</div>
			</Link>
			<div className="video-info">
				<div className="video-title">{video.title}</div>
				<div className="video-details">
					<h6>{video.channelName}</h6>
				</div>
				<div className="delete-video-icon" onClick={deleteHandler}>
					<i class="fa-solid fa-trash-can"></i>
				</div>
			</div>
		</div>
	);
};
