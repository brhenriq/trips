import Divider from "@/components/Divider";
import TripItem from "@/components/TripItem";
import { prisma } from "@/libs/prisma";
import { Trips } from "@prisma/client";

async function getTrips() {
  const trips = await prisma.trips.findMany({});

  return trips;
}

const RecommendedTrips = async () => {
  const data = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <Divider title="Destinos Recomendados" />

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trips) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
