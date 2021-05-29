import React from "react";
import Header from "../header";
import Inscription from "./Inscription"
import Banner from "./Banner";
import { BrowserRouter as Router, Route} from "react-router-dom";


function index() {
  return (
    <div>
      <Router>
        
         <Header />
          <Route path="/" component={Banner} exact />
          <Route path="/Inscription" component={Inscription} />
      </Router>
    </div>
  );
}

export default index;
