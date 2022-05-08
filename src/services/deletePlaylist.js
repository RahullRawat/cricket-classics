import axios from "axios";

export const deletePlaylist = async (token, playlistId, playlistsDispatch) => {
	try {
		const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			playlistsDispatch({
				type: "CREATE_PLAYLISTS",
				payload: response.data.playlists,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
