import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { usePlaylists } from "../../context/PlaylistsContext";
import { createPlaylist } from "../../services/createPlaylist";
import { addVideoToPlaylist } from "../../services/addVideoToPlaylist";
import { deleteVideoFromPlaylist } from "../../services/deleteVideoFromPlaylist";
import { toast } from "react-toastify";
import "./PlaylistModal.css";

export const PlaylistModal = ({ singlePageVideo, setOpenModal }) => {
	const [createNewPlaylist, setCreateNewPlaylist] = useState(false);
	const [newPlaylistData, setNewPlaylistData] = useState({
		title: "",
		description: "nothing",
	});

	const {
		authState: { token },
	} = useAuth();

	const {
		playlistsState: { playlists },
		playlistsDispatch,
	} = usePlaylists();

	const navigate = useNavigate();

	const createPlaylistHandler = () => {
		if (token) {
			createPlaylist(newPlaylistData, token, playlistsDispatch);
			toast.success(`Playlist ${newPlaylistData.title} created`);
			setNewPlaylistData({ ...newPlaylistData, title: "" });
		} else {
			navigate("/login");
		}
	};

	const checkVideoExists = (playlistID) => {
		const isPlaylistExist = playlists.find(
			(playlist) => playlist._id === playlistID
		);
		const checkVideoPresent = isPlaylistExist.videos.some(
			(video) => video._id === singlePageVideo._id
		);
		return checkVideoPresent;
	};

	const playlistVideoHandler = (playlistID) => {
		if (checkVideoExists(playlistID)) {
			deleteVideoFromPlaylist(
				token,
				singlePageVideo._id,
				playlistID,
				playlistsDispatch
			);
			const playlistTitle = playlists.find(
				(playlist) => playlist._id === playlistID
			);
			toast.error(
				`${singlePageVideo.title} removed from ${playlistTitle.title}`
			);
		} else {
			addVideoToPlaylist(singlePageVideo, token, playlistID, playlistsDispatch);
			const playlistTitle = playlists.find(
				(playlist) => playlist._id === playlistID
			);
			toast.success(`${singlePageVideo.title} added to ${playlistTitle.title}`);
		}
	};

	return (
		<div className="playlist-modal-container">
			<div className="playlist-modal-top flex">
				<h6>Save to...</h6>
				<i
					class="fa-solid fa-xmark"
					onClick={() => setOpenModal((prev) => !prev)}
				></i>
			</div>
			{playlists.map((playlist) => {
				return (
					<div className="playlist-modal-center flex" key={playlist._id}>
						<input
							type="checkbox"
							checked={checkVideoExists(playlist._id)}
							id={playlist.title}
							onChange={() => playlistVideoHandler(playlist._id)}
						/>
						<label htmlFor={playlist.title}>{playlist.title}</label>
					</div>
				);
			})}

			{!createNewPlaylist && (
				<button
					className="btn-create-playlist flex"
					onClick={() => setCreateNewPlaylist((prev) => !prev)}
				>
					<i class="fa-solid fa-plus"></i>
					<h6>Create new playlist</h6>
				</button>
			)}

			{createNewPlaylist && (
				<div className="add-playlist">
					<input
						type="text"
						placeholder="Enter playlist name"
						value={newPlaylistData.title}
						onChange={(e) =>
							setNewPlaylistData({ ...newPlaylistData, title: e.target.value })
						}
						required
					/>
					<button onClick={createPlaylistHandler}>Create</button>
				</div>
			)}
		</div>
	);
};
