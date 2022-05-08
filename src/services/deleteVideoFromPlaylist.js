import axios from "axios";

export const deleteVideoFromPlaylist = async (
	token,
	videoId,
	playlistID,
	playlistsDispatch
) => {
	try {
		const response = await axios.delete(
			`/api/user/playlists/${playlistID}/${videoId}`,
			{ headers: { authorization: token } }
		);
		if (response.status === 200) {
			playlistsDispatch({
				type: "ADD_VIDEO_TO_PLAYLISTS",
				payload: response.data.playlist,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
