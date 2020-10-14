import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Subscribers from "./containers/subscribers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="ui-layout">
        <div className="ui-sidebar">
          <div className="ui-vertical-menu">
            <NavLink activeClassName="active" to="/subscribers">
              <img />
              <p>Subscribers</p>
            </NavLink>
            <Switch>
              <Route path="/subscribers">
                <Subscribers />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
