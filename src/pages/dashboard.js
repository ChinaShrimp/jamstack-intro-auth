import React, {useEffect, useReducer} from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";

const INITIAL_STATE = {
  loginStatus: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateLoginStatus":
      return {...state, loginStatus: action.loginStatus};
    default:
      return INITIAL_STATE;
  }
};

const Dashbaord = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (!state.loginStatus) {
      navigate("/dashboard/login");
    }
  }, []);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" />
      </Router>
    </Layout>
  )
};

export default Dashbaord;