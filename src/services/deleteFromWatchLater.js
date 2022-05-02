import axios from "axios";

export const deleteFromWatchLater = async (_id, token, watchLaterDispatch) => {
	try {
		const response = await axios.delete(`/api/user/watchlater/${_id}`, {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			watchLaterDispatch({
				type: "DELETE_FROM_WATCH_LATER",
				payload: response.data.watchlater,
			});
		} else {
			throw new Error();
		}
	} catch (error) {
		console.error(error);
	}
};
