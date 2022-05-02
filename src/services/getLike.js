import axios from "axios";

export const getLike = async (token, likeDispatch) => {
	try {
		const response = await axios.get("/api/user/likes", {
			headers: { authorization: token },
		});
		if (response.status === 200) {
			likeDispatch({ type: "GET_LIKED_VIDEOS", payload: response.data.likes });
		}
	} catch (error) {
		console.error(error);
	}
};
