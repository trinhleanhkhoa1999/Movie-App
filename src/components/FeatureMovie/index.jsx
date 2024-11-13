import PaginateIndicator from "./PaginateIndicator"
import Movie from "./Movie"
import { useEffect, useState } from "react"

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQ3ODY1MS42NzE3NTk0LCJzdWIiOiI2NzMzMjdmMjA0MDU0ZDMxZDRhY2ViZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tyes6ti1uUzoI6MEFmyP4f8SVK8wZZ2PasMe-A4GCqs
const FeatureMovie = () => {

  const [movies, setMovies] = useState([]);
  const [activeMovieID, setActiveMovieID] = useState();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQ3ODg0My4xODI4MDgyLCJzdWIiOiI2NzMzMjdmMjA0MDU0ZDMxZDRhY2ViZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Mu-r2hw3jT0yQ7Q4XHTYr0xLqkF3sCHLoykx7WDWSTw',
        accept: 'application/json'
      }
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieID(popularMovies[0].id);
    })
  }, [])
  // Auto change active movie ID every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveMovieID((prevId) => {
        const currentIndex = movies.findIndex((movie) => movie.id === prevId);
        const nextIndex = (currentIndex + 1) % movies.length;
        return movies[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [movies]);


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