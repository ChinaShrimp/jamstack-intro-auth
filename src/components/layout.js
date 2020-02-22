import React from "react";
import {IdentityContextProvider } from "react-netlify-identity-widget";
import { Link } from "gatsby";

import styles from "./layout.css";

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-intro-auth-lyon.netlify.com">
    <header>
      <Link to="/">JAMStack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;