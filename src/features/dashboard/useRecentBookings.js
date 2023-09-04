import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

import { useQuery } from "@tanstack/react-query";

export function useRecentBooking() {
  // Get last days from searchParams
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? // if no number return 7 days by default, else, convert param to number
      7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    // when bookings key, or last-${numDays} changes return the data
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings, isLoading };
}
