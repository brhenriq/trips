"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { differenceInDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

interface ITripReservationProps {
  tripId: string;
  tripMaxGuests: number;
  tripEndDate: Date | null;
  tripStartDate: Date | null;
  tripPricePerDay: number;
}

interface ITripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const TripReservation = ({
  tripEndDate,
  tripMaxGuests,
  tripStartDate,
  tripId,
  tripPricePerDay,
}: ITripReservationProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<ITripReservationForm>();

  const onSubmit = async ({ endDate, startDate }: ITripReservationForm) => {
    const response = await fetch("http://localhost:3000/api/trips/check", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          id: tripId,
          endDate,
          startDate,
        })
      ),
    });

    const res = await response.json();

    if (res?.error?.code === "TRIP_ALREADY_RESERVED") {
      setError("startDate", {
        type: "manual",
        message: "Esta data já esta reservada",
      });

      setError("endDate", {
        type: "manual",
        message: "Esta data já esta reservada",
      });
      return;
    }

    if (res?.error?.code === "INVALID_START_DATE") {
      setError("startDate", {
        type: "manual",
        message: "Data inválida",
      });
      return;
    }

    if (res?.error?.code === "INVALID_END_DATE") {
      setError("endDate", {
        type: "manual",
        message: "Data inválida",
      });
      return;
    }
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória.",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              onChange={field.onChange}
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              selected={field.value}
              placeholderText="Data de Início"
              className="w-full"
              minDate={tripStartDate}
            />
          )}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatória.",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              onChange={field.onChange}
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              selected={field.value}
              placeholderText="Data Final"
              className="w-full"
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        />
      </div>

      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatório.",
          },
        })}
        className="mt-4"
        placeholder={`Numero de hóspedes (max: ${tripMaxGuests})`}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
        type="number"
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">
          Total:
          {startDate && endDate
            ? ` (${differenceInDays(endDate, startDate)} noite(s))`
            : ""}
        </p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(differenceInDays(endDate, startDate) * tripPricePerDay)
            : "R$ 0"}
        </p>
      </div>

      <div className="pb-10 border-b border-b-grayLighter w-full">
        <Button onClick={handleSubmit(onSubmit)} className="mt-3 w-full">
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
