import React from "react";
import { Sidebar } from "../../components";
import { VideoCard } from "../../components";
import "./Home.css";

export const Home = () => {
	return (
		<div className="home-container">
			<Sidebar />
			<div className="video-listing-container">
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</div>
		</div>
	);
};
