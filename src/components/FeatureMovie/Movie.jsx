import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Movie = () => {
  return (
    <>
      <img
        src="https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg"
        className="aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG 13
          </p>
          <p className="text-[1.2vw]">2024-06-11</p>
        </div>
        <div>
          <div className="hidden text-[1.2vw] sm:block mt-4">
            <p className="font-bold mb-2">Overview</p>
            <p>
              Teenager Riley&apos;s mind headquarters is undergoing a sudden
              demolition to make room for something entirely unexpected: new
              Emotions! Joy, Sadness, Anger, Fear and Disgust, who&apos;ve
              long been running a successful operation by all accounts,
              aren&apos;t sure how to feel when Anxiety shows up. And it looks
              like she&apos;s not alone.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-white text-black py-2 px-4 rounded text-10 lg:text-lg mr-1">
            <FontAwesomeIcon icon={faPlay} className="mr-1" />
            Trailer
          </button>
          <button className="bg-slate-300/35 hover:bg-slate-400/35 py-2 px-4 rounded text-10 lg:text-lg">View Detail</button>
        </div>
      </div>
    </>
  )
}
export default Movie