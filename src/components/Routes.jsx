import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Results } from "./Results";

export const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/pesquisar" />
        </Route>
        <Route exact path={["/pesquisar", "/imagens", "/novidades", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};
