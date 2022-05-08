export const PlaylistsReducer = (state, action) => {
	switch (action.type) {
		case "CREATE_PLAYLISTS":
			return {
				...state,
				playlists: action.payload,
			};

		case "ADD_VIDEO_TO_PLAYLISTS":
			return {
				...state,
				playlists: state.playlists.map((item) =>
					item._id === action.payload._id
						? { ...item, videos: action.payload.videos }
						: item
				),
			};

		default:
			return {
				...state,
			};
	}
};
