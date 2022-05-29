import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import { usePlaylists } from "../../context/PlaylistsContext";
import { useAuth } from "../../context/AuthContext";
import playlistSvg from "../../assets/playlistSvg.svg";
import { deletePlaylist } from "../../services/deletePlaylist";
import "./Playlist.css";

export const Playlist = () => {
	const {
		playlistsState: { playlists },
		playlistsDispatch,
	} = usePlaylists();

	const {
		authState: { token },
	} = useAuth();

	const deletePlaylistHandler = (playlistId) => {
		deletePlaylist(token, playlistId, playlistsDispatch);
	};

	useEffect(() => {
		document.title = "Cricket Classics | Playlist";
	}, []);
	return (
		<div className="playlist-wrapper">
			<Sidebar />
			<div className="playlist-display-container ">
				{playlists.length > 0 ? (
					playlists.map((playlist) => {
						return (
							<div className="playlist-thumbnail" key={playlist._id}>
								<Link to={`/playlist/${playlist._id}`}>
									<img
										src={playlistSvg}
										alt={playlist.title}
										className="playlist-svg"
									/>
								</Link>
								<div className="playlist-videos">
									<div className="flex">
										<h6 className="playlist-title">{playlist.title}</h6>
										<i
											className="fa-solid fa-trash-can playlist-icon"
											onClick={() => deletePlaylistHandler(playlist._id)}
										></i>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<h2 className="no-videos">No playlists</h2>
				)}
			</div>
		</div>
	);
};
