import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

interface ITripHeaderProps {
  coverImage: string;
  name: string;
  countryCode: string;
  location: string;
  pricePerDay: string;
}

const TripHeader = ({
  coverImage,
  pricePerDay,
  name,
  countryCode,
  location,
}: ITripHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full">
        <Image
          src={coverImage}
          style={{
            objectFit: "cover",
          }}
          alt={name}
          fill
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-primaryDarker">{name}</h1>

        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={countryCode} svg />
          <p className="text-xs text-grayPrimary underline">{location}</p>
        </div>

        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">R$ {pricePerDay}</span> por
          dia
        </p>
      </div>
    </div>
  );
};

export default TripHeader;
