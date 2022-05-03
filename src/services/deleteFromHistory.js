import axios from "axios";

export const deleteFromHistory = async (_id, token, historyDispatch) => {
	try {
		const response = await axios.delete(`/api/user/history/${_id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			historyDispatch({
				type: "DELETE_FROM_HISTORY",
				payload: response.data.history,
			});
		}
	} catch (error) {
		console.error(error);
	}
};
