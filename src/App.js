import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import SeasonsList from "./Components/SeasonsList";
import FavoriteCities from "./Components/FavoriteCities";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/SeasonsList">
          <SeasonsList />
        </Route>
        <Route exact path="/FavoriteCities">
          <FavoriteCities />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;