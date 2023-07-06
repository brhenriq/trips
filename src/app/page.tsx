import QuickSearch from "./components/QuickSearch";
import TripsSearch from "./components/TripsSearch";

export default function Home() {
  return (
    <div>
      <TripsSearch />
      <QuickSearch />
    </div>
  );
}
