export const HistoryReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_HISTORY":
			return {
				...state,
				history: action.payload,
			};

		case "DELETE_FROM_HISTORY":
			return {
				...state,
				history: action.payload,
			};

		case "DELETE_ALL_FROM_HISTORY":
			return {
				...state,
				history: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};
