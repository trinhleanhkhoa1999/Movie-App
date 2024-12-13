import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelateMediaList from "@components/MediaDetail/RelateMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  })

  const { data: recommendationsResponse, isLoading: isRelateMovieLoading } = useFetch({
    url: `/movie/${id}/recommendations`,
  })
  const relatedMovie = recommendationsResponse.results || []

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white">
        <div className="flex mx-auto max-w-screen-xl px-6 py-10 gap-6">
          <div className="flex-[2] ">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelateMediaList mediaList={relatedMovie} isLoading={isRelateMovieLoading} />
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
