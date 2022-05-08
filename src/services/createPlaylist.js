import axios from "axios";

export const createPlaylist = async (
	newPlaylistData,
	token,
	playlistsDispatch
) => {
	try {
		const response = await axios.post(
			"/api/user/playlists",
			{
				playlist: {
					title: newPlaylistData.title,
					description: newPlaylistData.description,
				},
			},
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			playlistsDispatch({
				type: "CREATE_PLAYLISTS",
				payload: response.data.playlists,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
