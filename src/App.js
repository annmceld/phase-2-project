import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CitiesList from "./Components/CitiesList";
import Favorites from "./Components/Favorites";
import { BrowserRouter } from "react-router-dom";
import Homepage from './Components/Homepage'

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/CitiesList" component={CitiesList} />
          <Route path="/Favorites" component={Favorites} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

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

