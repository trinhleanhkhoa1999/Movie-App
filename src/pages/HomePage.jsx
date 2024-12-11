import FeatureMovie from "../components/FeatureMovie";
import MediaList from "../components/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "@libs/constants";

function HomePage() {
  return (
    <>
      <FeatureMovie />
      <MediaList title="TRENDING" tabs={TRENDING_TABS} />
      <MediaList title="TOP RATED" tabs={TOP_RATED_TABS} />
    </>
  );
}

export default HomePage;
