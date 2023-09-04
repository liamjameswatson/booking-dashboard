import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

import { useQuery } from "@tanstack/react-query";

export function useRecentStays() {
  // Get last days from searchParams
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? // if no number return 7 days by default, else, convert param to number
      7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    // when stays key, or last-${numDays} changes return the data
    queryKey: ["stays", `last-${numDays}`],
  });

  // compute the confirmed stays, from the status... Don't return unconfirmed, - only if 'checked-in' or 'checked-out'...
  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, isLoading, confirmedStays };
}
