import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import CitiesList from "./Components/CitiesList";
import FavoriteHolidays from "./Components/FavoriteHolidays";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/CitiesList">
          <CitiesList />
        </Route>
        <Route exact path="/FavoriteHolidays">
          <FavoriteHolidays />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;