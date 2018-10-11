import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Sivu from "./components/pages/Sivu";

export const routes = [
  {
    Title: "Koti",
    Path: "/",
    component: Frontpage,
    showInMenu: true
  },
  {
    Title: "Sivu",
    Path: "/sivu",
    component: Sivu,
    showInMenu: true
  }
];

class Routes extends React.PureComponent {
  renderRoutes = () => {
    return routes.map(route => {
      return (
        <Route
          key={route.Path}
          path={route.Path}
          component={route.component}
          exact
        />
      );
    });
  };

  render() {
    return (
      <Router>
        <Switch>{this.renderRoutes()}</Switch>
      </Router>
    );
  }
}

export default Routes;
