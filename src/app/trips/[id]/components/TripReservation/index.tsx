"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trips } from "@prisma/client";

interface ITripReservationProps {
  trip: Trips;
}

const TripReservation = ({ trip }: ITripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker
          onChange={() => {}}
          placeholderText="Data de Início"
          className="w-full"
        />
        <DatePicker
          onChange={() => {}}
          placeholderText="Data Final"
          className="w-full"
        />
      </div>

      <Input
        className="mt-4"
        placeholder={`Numero de hóspedes (max: ${trip.maxGuests})`}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">
          Total: (7 noites)
        </p>
        <p className="font-medium text-sm text-primaryDarker">R$ 2500 </p>
      </div>

      <div className="pb-10 border-b border-b-grayLighter w-full">
        <Button className="mt-3 w-full">Reservar agora</Button>
      </div>
    </div>
  );
};

export default TripReservation;
