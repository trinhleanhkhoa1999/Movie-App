import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelateMediaList from "@components/MediaDetail/RelateMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [isRelateMovieListLoading, setIsRelateMovieListLoading] = useState(false);
  const [relatedMovie, setRelatedMovie] = useState([]);


  console.log("movieInfo: ", movieInfo);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQ3ODg0My4xODI4MDgyLCJzdWIiOiI2NzMzMjdmMjA0MDU0ZDMxZDRhY2ViZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Mu-r2hw3jT0yQ7Q4XHTYr0xLqkF3sCHLoykx7WDWSTw",
          accept: "application/json",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    return () => { };
  }, [id]);

  useEffect(() => {
    setIsRelateMovieListLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQ3ODg0My4xODI4MDgyLCJzdWIiOiI2NzMzMjdmMjA0MDU0ZDMxZDRhY2ViZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Mu-r2hw3jT0yQ7Q4XHTYr0xLqkF3sCHLoykx7WDWSTw",
          accept: "application/json",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        const currentRelateMovie = data.results.slice(0, 12)
        setRelatedMovie(currentRelateMovie);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsRelateMovieListLoading(false));
    return () => { };
  }, [id]);

  if (isLoading || isRelateMovieListLoading) {
    return <Loading />;
  }
  return (
    <>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white">
        <div className="flex mx-auto max-w-screen-xl px-6 py-10 gap-6">
          <div className="flex-[2] ">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelateMediaList mediaList={relatedMovie} />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetail;
