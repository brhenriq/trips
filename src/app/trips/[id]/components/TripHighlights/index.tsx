import { AiOutlineCheckCircle } from "react-icons/ai";

interface ITripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: ITripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Destaques</h2>

      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-2 w-1/2">
            <AiOutlineCheckCircle size={15} className="text-primary" />
            <p className="text-xs text-grayPrimary">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
