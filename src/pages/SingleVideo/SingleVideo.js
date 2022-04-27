import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { getVideos } from "../../services/getVideos";
import "./SingleVideo.css";

export const SingleVideo = () => {
	const [singlePageVideo, setSinglePageVideo] = useState([]);
	const params = useParams();

	useEffect(() => {
		getVideos(setSinglePageVideo);
	}, []);

	const selectedVideo =
		singlePageVideo.length !== 0 &&
		singlePageVideo.find((video) => video._id === params.id);

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
						/>
					</div>
					<div className="single-video-info-container">
						<div className="creator-info">
							<h6>{selectedVideo.title}</h6>
						</div>
						<div className="video-controls-container">
							<button>
								<i className="fa-solid fa-thumbs-up"></i>Like
							</button>
							<button>
								<i className="fa-solid fa-clock"></i>Watch Later
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
