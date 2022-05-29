import React, { useState, useEffect, useCallback } from "react";
import { Sidebar, VideoCard, Navbar, Loader } from "../../components";
import { getVideos } from "../../services/getVideos";
import { getCategories } from "../../services/getCategories";
import "./Home.css";

export const Home = () => {
	const [videos, setVideos] = useState([]);
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		getVideos(setVideos, setLoader);
		getCategories(setCategories);
	}, []);

	useEffect(() => {
		document.title = "Cricket Classics | Home";
	}, []);

	const searchInputHandler = (value) => {
		setSearchInput(value);
	};

	const searchHandler = (searchInput, videos) => {
		if (searchInput === "") {
			return videos;
		} else {
			return videos.filter((video) =>
				video.title.toLowerCase().includes(searchInput.toLowerCase().trim())
			);
		}
	};

	const categoryFilterHandler = (category, videos) => {
		if (category === "") {
			return videos;
		} else {
			return videos.filter((video) => video.category === category);
		}
	};

	const debounce = (fn) => {
		let timer;
		return function () {
			let context = this;
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(context, arguments);
			}, 500);
		};
	};

	const optimizedFunc = useCallback(debounce(searchInputHandler), []);

	let filteredVideos = categoryFilterHandler(category, videos);
	let searchedVideos = searchHandler(searchInput, filteredVideos);

	return (
		<>
			<Navbar
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				optimizedFunc={optimizedFunc}
			/>
			<div className="home-container">
				<Sidebar />
				<div className="video-listing-wrapper">
					<div className="category-container">
						<button
							className="btn-filter-category"
							name=""
							onClick={(e) => setCategory(e.target.name)}
						>
							All
						</button>
						{categories.map((category) => {
							return (
								<button
									key={category._id}
									className="btn-filter-category"
									name={category.categoryName}
									onClick={(e) => setCategory(e.target.name)}
								>
									{category.categoryName}
								</button>
							);
						})}
					</div>
					{loader && <Loader />}
					<div className="video-listing-container">
						{searchedVideos.length > 0 ? (
							searchedVideos.map((video) => {
								return (
									<div key={video._id}>
										<VideoCard video={video} />
									</div>
								);
							})
						) : (
							<h2 className="no-videos">No videos related to your search</h2>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
