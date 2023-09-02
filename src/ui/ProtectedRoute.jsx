function ProtectedRoute({ children }) {
  //1) Load the authenticated user, (create now function)

  // 2) While loading, show a spinner

  //3) If the is NO authenticated user, redirect to login page

  //4) If there IS a user, render the app.

  return children;
}

export default ProtectedRoute;
