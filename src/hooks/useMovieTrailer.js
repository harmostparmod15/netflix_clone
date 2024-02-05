import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // fetch trailer video && updating the store with trailer video data
  const getMovieVideos = async (moviedId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        moviedId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useMovieTrailer;