import React, { useEffect } from "react";
import { Sidebar, HorizontalVideoCard } from "../../components";
import watchLaterSvg from "../../assets/watch-later.svg";
import { useWatchLater } from "../../context/WatchLaterContext";
import "./WatchLater.css";

export const WatchLater = () => {
	const {
		watchLaterState: { watchLater },
	} = useWatchLater();

	useEffect(() => {
		document.title = "Cricket Classics | Watch Later";
	}, []);
	return (
		<div className="liked-video-wrapper">
			<Sidebar />
			<div className="liked-video-container ">
				<div className="liked-video-svg ">
					<img src={watchLaterSvg} alt="liked-video" />
					<h6>Watch Later</h6>
					<p>{watchLater.length} Videos</p>
				</div>
				<div className="liked-video-list mt-4">
					{watchLater.length !== 0 ? (
						watchLater.map((video) => {
							return (
								<div key={video._id}>
									<HorizontalVideoCard video={video} />;
								</div>
							);
						})
					) : (
						<h2 className="no-videos">Nothing here</h2>
					)}
				</div>
			</div>
		</div>
	);
};
