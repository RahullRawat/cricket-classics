import axios from "axios";

export const getSingleVideo = async (setSinglePageVideo, videoID) => {
	try {
		const response = await axios.get(`/api/video/${videoID}`);
		if (response.status === 200) {
			setSinglePageVideo(response.data.video);
		}
	} catch (error) {
		console.error(error);
	}
};
