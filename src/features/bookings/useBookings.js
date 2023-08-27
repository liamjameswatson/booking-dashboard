import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

// GET the values from the search params

export function useBookings() {
  const [searchParams] = useSearchParams();

  //FILTER

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // :{ field: "totalPrice", value: 5000, method: 'gte' };

  // SORTBY

  const sortByParam = searchParams.get("sortBy") || "startDate-desc"; // 'startDate-desc by default
  const [field, direction] = sortByParam.split("-");

  const sortBy = { field, direction };

//SORT



  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
}
