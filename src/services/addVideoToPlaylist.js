import axios from "axios";

export const addVideoToPlaylist = async (
	video,
	token,
	playlistID,
	playlistsDispatch
) => {
	try {
		const response = await axios.post(
			`/api/user/playlists/${playlistID}`,
			{ video },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			playlistsDispatch({
				type: "ADD_VIDEO_TO_PLAYLISTS",
				payload: response.data.playlist,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
