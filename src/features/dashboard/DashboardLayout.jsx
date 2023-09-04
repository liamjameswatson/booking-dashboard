import styled from "styled-components";

import { useRecentBooking } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";

import Spinner from "../../ui/Spinner";

import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingRecentBookings } = useRecentBooking();

  const { stays, confirmedStays, isLoadingRecentStays, numDays } =
    useRecentStays();

  const { cabins, isLoading: isLoadingCabins } = useCabins();

  console.log(bookings);

  if (isLoadingRecentBookings || isLoadingRecentStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      {/* Placeholder divs */}
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today's activity</div>
      <div>Chart for stay durations</div>
      <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
