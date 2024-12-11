const ActorInfo = ({ profile_path, name, character }) => {
  return (
    <div className="mx-2 my-2 rounded-lg border border-slate-400 bg-black shadow-sm">
      <img
        className="rounded-lg w-full"
        src={profile_path ? `https://media.themoviedb.org/t/p/w138_and_h175_face${profile_path}` : "/NoImageActor.svg"}
        alt=""
      />
      <div className="p-3">
        <p className="text-[1.3vw] font-bold">{name}</p>
        <p className="text-[1.2vw]">{character}</p>
      </div>
    </div>
  );
};
export default ActorInfo;
