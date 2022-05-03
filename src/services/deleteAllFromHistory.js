import axios from "axios";

export const deleteAllFromHistory = async (token, historyDispatch) => {
	try {
		const response = await axios.delete("/api/user/history/all", {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			historyDispatch({
				type: "DELETE_ALL_FROM_HISTORY",
				payload: response.data.history,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
