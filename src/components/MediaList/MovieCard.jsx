import CircularProgressBar from "./CircularProgressBar"

const MovieCard = () => {
  return (
    <div className="border border-slate-800 rounded-lg">
      <img className="rounded-lg" src="https://media.themoviedb.org/t/p/w220_and_h330_face/abf8tHznhSvl9BAElD2cQeRr7do.jpg" />
      <div className="px-4 relative -top-[1.5vw]">
        <CircularProgressBar />
        <p className="font-bold mt-2">Arcane</p>
        <p className="text-slate-300">Nov 06, 2021</p>
      </div>
    </div>
  )
}
export default MovieCard