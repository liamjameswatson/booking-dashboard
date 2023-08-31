import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams(); // read the Id from param
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false, // normally react Query tried three times on a failed attempt... But sometimes there is no need... In this case, if there is an error, there is not going to be data in the param...
  });

  return { isLoading, booking, error };
}
