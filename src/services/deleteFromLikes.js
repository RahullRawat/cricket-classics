import axios from "axios";

export const deleteFromLike = async (_id, token, likeDispatch) => {
	try {
		const response = await axios.delete(`api/user/likes/${_id}`, {
			headers: { authorization: token },
		});
		likeDispatch({ type: "DELETE_FROM_LIKES", payload: response.data.likes });
	} catch (error) {
		console.error(error);
	}
};
