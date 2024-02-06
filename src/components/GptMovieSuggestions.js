import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  // const {movieNames , movieResults} = useSelector((store) => store?.gpt);
  // or  this :
  const gpt = useSelector((store) => store?.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg- bg-opacity-60 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
