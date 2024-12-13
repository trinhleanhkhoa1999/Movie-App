import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";

const RelateMediaList = ({ mediaList = [], isLoading }) => {
  return (
    <div className="mt-4">
      <p className="mb-4 text-[1.4vw] font-bold">More like this</p>
      {isLoading ? <Loading />
        :
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              title={media.title}
              poster_path={media.poster_path}
              release_date={media.release_date}
              point={media.vote_average}
              media_type={media.media_type}
            />
          ))}
        </div>}
    </div>
  );
};
export default RelateMediaList;
