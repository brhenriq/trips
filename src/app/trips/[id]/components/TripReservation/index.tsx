"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trips } from "@prisma/client";
import { differenceInDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

interface ITripReservationProps {
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
  tripPricePerDay,
}: ITripReservationProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
  } = useForm<ITripReservationForm>();

  const onSubmit = (data: any) => {
    console.log(data);
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
