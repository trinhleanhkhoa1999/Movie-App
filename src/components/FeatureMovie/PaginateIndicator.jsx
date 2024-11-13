const PaginateIndicator = ({ movies, activeMovieID, setActiveMovieID }) => {
  return (
    <div className="absolute right-8  bottom-[10%] ">
      <ul className="flex gap-1">
        {
          movies.map((movie) => {
            return (
              <li
                key={movie.id}
                className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieID ? "bg-slate-100" : "bg-slate-600"}`}
                onClick={() => {
                  setActiveMovieID(movie.id)
                }}
              >
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}
export default PaginateIndicator