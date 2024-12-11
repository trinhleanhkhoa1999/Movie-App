import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";


const MovieCard = ({ title, poster_path, release_date, point, media_type, id }) => {
  return (
    <Link to={`/movie/${id}`} className="rounded-lg border border-slate-800 ">
      <div className="relative">
        {
          media_type === "tv" &&
          <p className="absolute right-1 top-1 bg-black rounded p-1 text-[1vw] text-white">TV show</p>
        }
        <img
          className="rounded-lg w-full"
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
        />
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(point * 10)}
            strokeColor={point >= 7 ? "green" : point >= 6 ? "orange" : "red"}
          />
          <p className="mt-2 font-bold text-[1.3vw]">{title}</p>
          <p className="text-slate-300 text-[1.2vw]">{release_date}</p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
