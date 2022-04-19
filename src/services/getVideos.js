import axios from "axios";

export const getVideos = async (setVideos) => {
	try {
		const response = await axios.get("/api/videos");
		console.log(response.data.videos);
		if (response.status === 200) {
			setVideos(response.data.videos);
		}
	} catch (error) {
		console.error(error);
	}
};
