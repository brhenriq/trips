import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";
import TripsSearch from "./components/TripsSearch";

export default function Home() {
  return (
    <div>
      <TripsSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
