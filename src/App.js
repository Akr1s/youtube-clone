import React from "react";
import { Switch, Route } from "react-router-dom";
import Wraper from "./components/Wraper";
import routesData from "./data/routesData";
import Error404 from "./components/ErrorHandlers/Error404";

function App() {
  return (
    <div className="app">
      <Switch>
        {routesData.map(({ path, exact, component }, index) => (
          <Route path={path} exact={exact} key={index}>
            <Wraper>{component}</Wraper>
          </Route>
        ))}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
