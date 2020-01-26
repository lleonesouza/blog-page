import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { isMobile } from "react-device-detect";
import App from "./App";

// import {Loading} from "./medias/lotties/loading";

export default function Index() {
  return isMobile ? (
    <div>
      <h1>the mobile version is coming</h1>
      <h2>please, acess from computer browser</h2>
      {/* <Loading /> */}
    </div>
  ) : (
    <Router>
      <App />
    </Router>
  );
}
