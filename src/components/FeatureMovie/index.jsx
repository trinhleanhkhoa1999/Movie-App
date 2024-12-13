import PaginateIndicator from "./PaginateIndicator"
import Movie from "./Movie"
import { useEffect, useState } from "react"
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {

  const [activeMovieID, setActiveMovieID] = useState();
  const { data: popularMoviesResponse } = useFetch({ url: "/movie/popular" });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieID(movies[0].id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)])

  return (
    <div className="relative text-white">
      {
        movies
          .filter((movie) => movie.id === activeMovieID)
          .map((movie) => <Movie key={movie.id} data={movie} />)
      }
      <PaginateIndicator movies={movies} activeMovieID={activeMovieID} setActiveMovieID={setActiveMovieID} />
    </div>
  )
}
export default FeatureMovie