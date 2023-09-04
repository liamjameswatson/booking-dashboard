import styled from "styled-components";
import { useRecentBooking } from "./useRecentBookings";

import Spinner from '../../ui/Spinner'
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {bookings, isLoading: isLoadingRecentBookings} = useRecentBooking()

  const {stays, confirmedStays, isLoadingRecentStays} = useRecentStays()

  console.log(bookings)

  if(isLoadingRecentBookings || isLoadingRecentStays) return <Spinner />

  return (
    <StyledDashboardLayout>
      {/* Placeholder divs */}
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart for stay durations</div>
      <div>Chart of sales</div>

    </StyledDashboardLayout>
  )
}

export default DashboardLayout
