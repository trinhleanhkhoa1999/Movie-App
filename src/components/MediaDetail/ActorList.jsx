import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false)
  const currentActor = isShowMore ? actors.slice(0) : actors.slice(0, 4)
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4">
        {currentActor.map((actor) => (
          <ActorInfo
            key={actor.id}
            profile_path={actor.profile_path}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </div>
      <p className="mt-1 cursor-pointer" onClick={() => setIsShowMore(!isShowMore)}>
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};
export default ActorList;
