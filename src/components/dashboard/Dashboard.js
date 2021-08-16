import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div >
      <h1>Logged In!</h1>
      <h1>Access Token:</h1>
      <p>{myState.accessToken}</p>
      <h1> Token type:</h1>
      <p>{myState.token_type}</p>
      <h1>Scope:</h1>
      <p>{myState.scope}</p>
    </div>
  );
}

export default Dashboard;
