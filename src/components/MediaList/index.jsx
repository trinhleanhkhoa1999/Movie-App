import { useEffect, useState } from "react";
import MovieCard from "@components/MovieCard";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId).url;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDA5YTE3OGM2OWIyZTljY2ViYTZjZGU4YWJiNWFkMiIsIm5iZiI6MTczMTQ3ODg0My4xODI4MDgyLCJzdWIiOiI2NzMzMjdmMjA0MDU0ZDMxZDRhY2ViZDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Mu-r2hw3jT0yQ7Q4XHTYr0xLqkF3sCHLoykx7WDWSTw",
        accept: "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      const trendingMediaList = data.results.slice(0, 12);
      setMediaList(trendingMediaList);
    });
    return () => { };
  }, [activeTabId, tabs]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex gap-4 rounded border border-white">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                className={`cursor-pointer rounded px-2 py-1 ${activeTabId === tab.id ? "bg-white text-black" : ""}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => {
          return (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title || media.original_name}
              poster_path={media.poster_path}
              release_date={media.release_date || media.first_air_date}
              point={media.vote_average}
              media_type={media.media_type || activeTabId}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MediaList;
