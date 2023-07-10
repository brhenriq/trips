import { prisma } from "@/libs/prisma";
import { isBefore } from "date-fns";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { id, endDate, startDate } = await request.json();

  const trip = await prisma.trips.findUnique({
    where: {
      id,
    },
  });

  if (!trip) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "TRIP_NOT_FOUND",
        },
      })
    );
  }

  if (isBefore(new Date(startDate), new Date(trip.startDate))) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "INVALID_START_DATE",
        },
      }),
      {
        status: 400,
      }
    );
  }

  if (isBefore(new Date(trip.endDate), new Date(endDate))) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "INVALID_END_DATE",
        },
      }),
      {
        status: 400,
      }
    );
  }

  const reservations = await prisma.tripReservations.findMany({
    where: {
      tripId: id,
      startDate: {
        lte: new Date(startDate),
      },
      endDate: {
        lte: new Date(endDate),
      },
    },
  });

  if (reservations.length > 0) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "TRIP_ALREADY_RESERVED",
        },
      })
    );
  }

  return new NextResponse(
    JSON.stringify({
      success: true,
    })
  );
}
