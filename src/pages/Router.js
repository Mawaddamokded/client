import React from "react";
import Inscription from "./connect/Inscription";
import Home from "./home/Home";
import DoctorDetails from "./doctorDetails/DoctorDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Routers() {
  return (
    <div>
      <Router>
        <Route path="/"              component={Home} exact />
        <Route path="/Inscription"   component={Inscription} />
        <Route path="/Details"       component={DoctorDetails} />
      </Router>
    </div>
  );
}

export default Routers;
