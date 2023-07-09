"use client";

import Button from "@/components/Button";
import Image from "next/image";

interface ITripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({
  location,
  locationDescription,
}: ITripLocationProps) => {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Localização</h2>

      <div className="relative h-[280px] w-full">
        <Image
          src="/map-mobile.png"
          alt={location}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="text-primaryDarker text-sm font-semibold mt-3">
        {location}
      </p>
      <p className="text-primaryDarker text-sm leading-5 mt-2">
        {locationDescription}
      </p>

      <Button variant="outlined" className="w-full mt-5">
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;
