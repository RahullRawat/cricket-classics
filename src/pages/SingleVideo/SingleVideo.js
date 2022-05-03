import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { getSingleVideo } from "../../services/getSingleVideo";
import { addToLike } from "../../services/addToLike";
import { deleteFromLike } from "../../services/deleteFromLikes";
import { addToWatchLater } from "../../services/addToWatchLater";
import { deleteFromWatchLater } from "../../services/deleteFromWatchLater";
import { addToHistory } from "../../services/addToHistory";
import { useAuth } from "../../context/AuthContext";
import { useLike } from "../../context/LikeContext";
import { useWatchLater } from "../../context/WatchLaterContext";
import { useHistory } from "../../context/HistoryContext";
import "./SingleVideo.css";

export const SingleVideo = () => {
	const [singlePageVideo, setSinglePageVideo] = useState({});
	const params = useParams();
	const navigate = useNavigate();

	const { authState } = useAuth();
	const { token } = authState;

	const {
		likeState: { likes },
		likeDispatch,
	} = useLike();

	const {
		watchLaterState: { watchLater },
		watchLaterDispatch,
	} = useWatchLater();

	const {
		historyState: { history },
		historyDispatch,
	} = useHistory();

	useEffect(() => {
		getSingleVideo(setSinglePageVideo, params.id);
	}, []);

	const isLiked = likes.some((video) => video._id === singlePageVideo._id);

	const likeVideoHandler = (_id) => {
		if (isLiked) {
			deleteFromLike(_id, token, likeDispatch);
		} else {
			if (token) {
				addToLike(singlePageVideo, token, likeDispatch);
			} else {
				navigate("/login");
			}
		}
	};

	const isWatchLater = watchLater.some(
		(video) => video._id === singlePageVideo._id
	);

	const watchLaterHandler = (_id) => {
		if (isWatchLater) {
			deleteFromWatchLater(_id, token, watchLaterDispatch);
		} else {
			if (token) {
				addToWatchLater(singlePageVideo, token, watchLaterDispatch);
			} else {
				navigate("/login");
			}
		}
	};

	const historyHandler = (_id) => {
		addToHistory(singlePageVideo, token, historyDispatch);
	};

	return (
		<div>
			<Sidebar />
			<div className="single-video-container ">
				<div className="single-video">
					<div className="video-player">
						<ReactPlayer
							className="react-player"
							url={`https://www.youtube.com/watch?v=${params.id}`}
							width="100%"
							controls={true}
							onStart={() => historyHandler(singlePageVideo._id)}
						/>
					</div>
					<div className="single-video-info-container">
						<div className="creator-info">
							<h6>{singlePageVideo.title}</h6>
						</div>
						<div className="video-controls-container">
							<button onClick={() => likeVideoHandler(singlePageVideo._id)}>
								<i className="fa-solid fa-thumbs-up"></i>
								{isLiked ? "Unlike" : "Like"}
							</button>
							<button onClick={() => watchLaterHandler(singlePageVideo._id)}>
								<i className="fa-solid fa-clock"></i>
								{isWatchLater
									? "Remove From Watch Later"
									: "Add To Watch Later"}
							</button>
							<button>
								<i className="fa-solid fa-list-check"></i>Playlists
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
