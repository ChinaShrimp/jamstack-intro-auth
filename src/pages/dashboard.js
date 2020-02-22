import React, {useEffect, useState, useReducer} from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import { IdentityModal } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";

import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";

const INITIAL_STATE = {
  loginStatus: false,
  showLoginDialog: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateLoginStatus":
      return { ...state, loginStatus: action.loginStatus };
    case "updateShowLoginDialog":
      return {...state, showLoginDialog: action.showLoginDialog};
    default:
      return INITIAL_STATE;
  }
};

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [loginModalVisibility, setLoginModalVisibility] = useState(true);

  const showModal = () => setLoginModalVisibility(true);

  useEffect(() => {
    if (!state.loginStatus) {
      navigate("/dashboard/login");
    }
  }, []);

  const toggleLoginDialog = () => dispatch({
    type: "updateShowLoginDialog",
    showLoginDialog: !state.showLoginDialog
  })

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={loginModalVisibility}
        onCloseDialog={() => setLoginModalVisibility(false)}
      />
    </Layout>
  )
};

export default Dashboard;