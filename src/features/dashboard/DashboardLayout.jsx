import styled from "styled-components";
import { useRecentBooking } from "./useRecentBookings";

import Spinner from '../../ui/Spinner'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {bookings, isLoading} = useRecentBooking()

  console.log(bookings)

  if(isLoading) return <Spinner />

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
