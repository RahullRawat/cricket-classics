import React, { useEffect } from "react";
import { Sidebar, HorizontalVideoCard } from "../../components";
import historySvg from "../../assets/history.svg";
import { useHistory } from "../../context/HistoryContext";
import { useAuth } from "../../context/AuthContext";
import { deleteAllFromHistory } from "../../services/deleteAllFromHistory";
import "./History.css";

export const History = () => {
	const {
		authState: { token },
	} = useAuth();

	const {
		historyState: { history },
		historyDispatch,
	} = useHistory();

	const deleteAllHistoryHandler = () => {
		deleteAllFromHistory(token, historyDispatch);
	};

	useEffect(() => {
		document.title = "Cricket Classics | History";
	}, []);
	return (
		<div className="liked-video-wrapper">
			<Sidebar />
			<div className="liked-video-container ">
				<div className="liked-video-svg ">
					<img src={historySvg} alt="liked-video" />
					<h6> History</h6>
					<p>{history.length} Videos</p>
					<button className="btn btn-clear" onClick={deleteAllHistoryHandler}>
						Clear all history
					</button>
				</div>
				<div className="liked-video-list mt-4">
					{history.length !== 0 ? (
						history.map((video) => {
							return (
								<div key={video._id}>
									<HorizontalVideoCard video={video} />;
								</div>
							);
						})
					) : (
						<h2 className="no-videos">No watch history</h2>
					)}
				</div>
			</div>
		</div>
	);
};
