import { useContext, createContext, useReducer } from "react";
import { PlaylistsReducer } from "../reducer";

const PlaylistsContext = createContext(null);

const initialState = {
	playlists: [],
};

const PlaylistsProvider = ({ children }) => {
	const [playlistsState, playlistsDispatch] = useReducer(
		PlaylistsReducer,
		initialState
	);

	return (
		<PlaylistsContext.Provider value={{ playlistsState, playlistsDispatch }}>
			{children}
		</PlaylistsContext.Provider>
	);
};

const usePlaylists = () => useContext(PlaylistsContext);

export { usePlaylists, PlaylistsProvider };
