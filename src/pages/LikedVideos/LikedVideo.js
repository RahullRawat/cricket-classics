import React, { useEffect } from "react";
import { Sidebar, HorizontalVideoCard } from "../../components";
import likedVideo from "../../assets/liked-video.svg";
import { useLike } from "../../context/LikeContext";
import { useAuth } from "../../context/AuthContext";
import { getLike } from "../../services/getLike";
import "./LikedVideo.css";

export const LikedVideo = () => {
	const {
		likeState: { likes },
		likeDispatch,
	} = useLike();
	const {
		authState: { token },
	} = useAuth();

	useEffect(() => {
		getLike(token, likeDispatch);
	}, []);

	useEffect(() => {
		document.title = "Cricket Classics | Liked Videos";
	}, []);
	return (
		<div className="liked-video-wrapper">
			<Sidebar />
			<div className="liked-video-container ">
				<div className="liked-video-svg ">
					<img src={likedVideo} alt="liked-video" />
					<h6>Liked Video</h6>
					<p>{likes.length} Videos</p>
				</div>
				<div className="liked-video-list mt-4">
					{likes.length !== 0 ? (
						likes.map((video) => {
							return (
								<div key={video._id}>
									<HorizontalVideoCard video={video} />;
								</div>
							);
						})
					) : (
						<h2 className="no-videos">You have no liked videos</h2>
					)}
				</div>
			</div>
		</div>
	);
};
