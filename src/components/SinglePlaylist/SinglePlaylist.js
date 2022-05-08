import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { usePlaylists } from "../../context/PlaylistsContext";
import { HorizontalVideoCard } from "../HorizontalVideoCard/HorizontalVideoCard";
import playlistSvg from "../../assets/playlistSvg.svg";
import "./SinglePlaylist.css";

export const SinglePlaylist = () => {
	const { playlistID } = useParams();
	const {
		playlistsState: { playlists },
	} = usePlaylists();

	const currentPlaylist = playlists.find((item) => item._id === playlistID);
	return (
		<div className="liked-video-wrapper">
			<Sidebar />
			<div className="liked-video-container ">
				<div className="liked-video-svg single-playlist-svg">
					<img src={playlistSvg} alt="liked-video" />
					<h6> {currentPlaylist.title}</h6>
					<p>{currentPlaylist.videos.length} Videos</p>
				</div>
				<div className="liked-video-list mt-4">
					{currentPlaylist.videos.length > 0 ? (
						currentPlaylist.videos.map((video) => {
							return (
								<div key={video._id}>
									<HorizontalVideoCard video={video} />;
								</div>
							);
						})
					) : (
						<h2 className="no-videos">No videos</h2>
					)}
				</div>
			</div>
		</div>
	);
};
