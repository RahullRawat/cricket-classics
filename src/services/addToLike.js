import axios from "axios";

export const addToLike = async (video, token, likeDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/likes",
			{ video },
			{ headers: { authorization: token } }
		);
		likeDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
	} catch (error) {
		alert(error);
	}
};
