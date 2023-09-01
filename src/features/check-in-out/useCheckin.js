import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({bookingId, breakfast}) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      // data comes from mutation function
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({active: true}) // invalidates all active queries on the page 
      navigate('/')
    },
    onError: () => toast.error('There was an error while checking in')
  });

  return {checkin, isCheckingIn}
}
