import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "./../components/CircularProgressBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { groupBy } from "lodash";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  console.log("movieInfo: ", movieInfo);
  useEffect(() => {
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
    ).then(async (res) => {
      const data = await res.json();
      setMovieInfo(data);
    });
    return () => { };
  }, [id]);

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movieInfo.credits?.crew || []).filter((crew) =>
    ["Director", "Screenplay", "Writer"].includes(crew.job),
  );
  console.log("crews: ", crews);
  const groupedCrews = groupBy(crews, "job")
  console.log("groupedCrews: ", groupedCrews);
  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 aspect-video brightness-[0.2]"
        src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieInfo.backdrop_path}`}
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movieInfo.poster_path}}`}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{movieInfo.title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{movieInfo.release_date}</p>
            <p>
              {(movieInfo.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.floor(movieInfo.vote_average) * 10}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{movieInfo.overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2">
            {Object.keys(groupedCrews).map((job) => {
              return (
                <div key={job}>
                  <p className="font-bold">{job}</p>
                  <p>{groupedCrews[job].map(crew => crew.name).join(", ")}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
