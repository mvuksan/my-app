import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Subscribers from "./containers/subscribers";
import Networks from "./containers/networks";
import IPSplans from "./containers/ipsplans";
import Taskmanager from "./containers/taskmanager";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Scriptlibrary from "./containers/scriptlibrary";

export default function App() {
  return (
    <Router>
      <div className="ui-layout">
        <div className="ui-sidebar">
          <div className="ui-vertical-menu">
            <NavLink activeClassName="active" to="/subscribers">
              <img
                src={require("./assets/images/Shape-3.png")}
                alt="Subscribers icon"
              />
              <p>Subscribers</p>
            </NavLink>
            <NavLink activeClassName="active" to="/networks">
              <img />
              <p>Networks</p>
            </NavLink>
            <NavLink activeClassName="active" to="/ipsplans">
              <img />
              <p>IPSplans</p>
            </NavLink>
            <NavLink activeClassName="active" to="/taskmanager">
              <img />
              <p>Task Manager</p>
            </NavLink>
            <NavLink activeClassName="active" to="/scriptlibrary">
              <img />
              <p>Tot Library</p>
            </NavLink>
            <Switch>
              <Route path="/subscribers">
                <Subscribers />
              </Route>
              <Route path="/networks">
                <Networks />
              </Route>
              <Route path="/ipsplans">
                <IPSplans />
              </Route>
              <Route path="/taskmanager">
                <Taskmanager />
              </Route>
              <Route path="/scriptlibrary">
                <Scriptlibrary />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
