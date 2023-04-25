import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import CitiesList from "./Components/CitiesList";
import Favorites from "./Components/Favorites";
import { BrowserRouter } from "react-router-dom";


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/CitiesList":
      component = <CitiesList/>
      break
    case "/Favorites":
      component = <Favorites/>
      break
  }
  return (
    <>
      <NavBar />
      <div className="container">
      {component}
      </div>
      </>
  )
}
      {/* <div clas */}






      {/* <NavBar />
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
      </Switch> */}
  //   </div>
  // );

export default App;