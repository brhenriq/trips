import { prisma } from "@/libs/prisma";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";

interface IPageProps {
  params: {
    id: string;
  };
}

async function getTripDetails(id: string) {
  return prisma.trips.findUnique({
    where: {
      id,
    },
  });
}

const TripsDetails = async ({ params }: IPageProps) => {
  const data = await getTripDetails(params.id);

  if (!data) return null;

  return (
    <div className="container mx-auto">
      <TripHeader
        countryCode={data.countryCode}
        coverImage={data.coverImage}
        location={data.location}
        name={data.name}
        pricePerDay={data.pricePerDay.toString()}
      />
      <TripReservation
        tripEndDate={data.endDate}
        tripMaxGuests={data.maxGuests}
        tripStartDate={data.startDate}
        tripPricePerDay={Number(data.pricePerDay)}
      />
      <TripDescription description={data.description} />
      <TripHighlights highlights={data.highlights} />
      <TripLocation
        location={data.location}
        locationDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
};

export default TripsDetails;
