export const LikeReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_LIKES":
			return {
				...state,
				likes: action.payload,
			};

		case "GET_LIKED_VIDEOS":
			return {
				...state,
				likes: action.payload,
			};

		case "DELETE_FROM_LIKES":
			return {
				...state,
				likes: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};
