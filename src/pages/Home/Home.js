import React, { useState, useEffect } from "react";
import { Sidebar, VideoCard } from "../../components";
import { getVideos } from "../../services/getVideos";
import "./Home.css";

export const Home = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos(setVideos);
	}, []);

	return (
		<div className="home-container">
			<Sidebar />
			<div className="video-listing-container">
				{videos.map((video) => {
					return (
						<div key={video._id}>
							<VideoCard {...video} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
