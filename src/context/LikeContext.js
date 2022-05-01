import { useContext, createContext, useReducer } from "react";
import { LikeReducer } from "../reducer";

const LikeContext = createContext(null);

const LikeProvider = ({ children }) => {
	const [likeState, likeDispatch] = useReducer(LikeReducer, { likes: [] });
	return (
		<LikeContext.Provider value={{ likeState, likeDispatch }}>
			{children}
		</LikeContext.Provider>
	);
};

const useLike = () => useContext(LikeContext);

export { useLike, LikeProvider };
