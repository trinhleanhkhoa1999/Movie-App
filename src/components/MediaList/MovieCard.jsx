import CircularProgressBar from "./CircularProgressBar";

const MovieCard = ({ title, poster_path, release_date, point, media_type }) => {
  return (
    <div className="rounded-lg border border-slate-800 relative">
      {
        media_type === "tv" &&
        <p className="absolute right-1 top-1 bg-black rounded p-1 text-[1.2vw] text-white">TV show</p>
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
        <p className="mt-2 font-bold">{title}</p>
        <p className="text-slate-300">{release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
