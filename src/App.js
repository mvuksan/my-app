import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Subscribers from "./containers/subscribers";
import Networks from "./containers/networks";
import IPSplans from "./containers/ipsplans";
import Taskmanager from "./containers/taskmanager";
import SmallLogo from "./assets/images/Group.png";

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
          <div className="ui-logo-box">
            <div className="ui-logo-wrapper">
              <img className="ui-logo-small" alt="Small logo" src={SmallLogo} />
            </div>
            <div className="ui-logo-label">
              <p>Smart Network</p>
            </div>
          </div>
          <div className="ui-vertical-menu">
            <NavLink activeClassName="active" to="/subscribers">
              <img
                src={require("./assets/images/Shape-3.png")}
                alt="Subscribers icon"
              />
              <p>Subscribers</p>
            </NavLink>
            <NavLink activeClassName="active" to="/networks">
              <img
                src={require("./assets/images/Shape-4.png")}
                alt="Netwrok icon"
              />
              <p>Networks</p>
            </NavLink>
            <NavLink activeClassName="active" to="/ipsplans">
              <img
                src={require("./assets/images/Shape-5.png")}
                alt="IPS Plans icon"
              />
              <p>IPSplans</p>
            </NavLink>
            <NavLink activeClassName="active" to="/taskmanager">
              <img
                src={require("./assets/images/Shape-2.png")}
                alt="Task manager icon"
              />
              <p>Task Manager</p>
            </NavLink>
            <NavLink activeClassName="active" to="/scriptlibrary">
              <img
                src={require("./assets/images/Shape-1.png")}
                alt=" Script library icon"
              />
              <p>Tot Library</p>
            </NavLink>
            <Link>
              <img
                src={require("./assets/images/Shape-6.png")}
                alt="Preferences icon"
              />
              <p>Preferences</p>
            </Link>
            <NavLink activeClassName="active" to="/speedtest">
              <img
                src={require("./assets/images/Shape-4.png")}
                alt="Networks icon"
              />
              <p>Speedtest</p>
            </NavLink>
            <div class="ui-vertical-menu">
              <p class="ui-menu-label">SYSTEM</p>
            </div>
          </div>
        </div>
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
    </Router>
  );
}
