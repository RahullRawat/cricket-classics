import axios from "axios";

export const getVideos = async (setVideos, setLoader) => {
	try {
		setLoader(true);
		const response = await axios.get("/api/videos");
		if (response.status === 200) {
			setLoader(false);
			setVideos(response.data.videos);
		}
	} catch (error) {
		console.error(error);
	}
};
