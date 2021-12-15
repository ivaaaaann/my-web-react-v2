import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Page/Header";
import * as P from "../src/Page";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <P.Hero />
          <P.Values />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
