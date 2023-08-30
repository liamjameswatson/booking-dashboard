import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { RESULTS_PER_PAGE } from "../../utils/constants";

// GET the values from the search params

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //FILTER

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // :{ field: "totalPrice", value: 5000, method: 'gte' };

  // SORT

  const sortByParam = searchParams.get("sortBy") || "startDate-desc"; // 'startDate-desc by default
  const [field, direction] = sortByParam.split("-");

  const sortBy = { field, direction };

  //PAGINATION

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //QUERY
  const {
    isLoading,
    // data is undefineded at first, so set to {}, then data will be destructured from the empty object
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE-FETCHING - only if not on the last page - NEXT/ first page - PREV - otherwise it will fetch empty/undefined data, and lead to error.

  const pageCount = Math.ceil(count / RESULTS_PER_PAGE)

  //PREFETCH NEXT PAGE
  if(page < pageCount)  // if not on last page, fetch next page
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, page + 1],
    queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
  });

  //PREFETCH PREV PAGE
  if(page > 1)  // if not on page 1, fetch prev page 
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, page - 1],
    queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
  });

  return { isLoading, bookings, error, count };
}
