import axios from "axios";

export const addToHistory = async (video, token, historyDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/history",
			{ video },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			historyDispatch({
				type: "ADD_TO_HISTORY",
				payload: response.data.history,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
