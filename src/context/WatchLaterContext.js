import { useContext, createContext, useReducer } from "react";
import { WatchLaterReducer } from "../reducer";

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
	const [watchLaterState, watchLaterDispatch] = useReducer(WatchLaterReducer, {
		watchLater: [],
	});
	return (
		<WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
			{children}
		</WatchLaterContext.Provider>
	);
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
