import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CitiesList from "./Components/CitiesList";
import Favorites from "./Components/Favorites";
import { BrowserRouter } from "react-router-dom";
import Homepage from './Components/Homepage'
import CitiesContainer from "./Components/CitiesContainer";
import HolidayDetailsCard from "./Components/HolidayDetailsCard";


function App() {
  return (
    <BrowserRouter>
      
      
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/CitiesList" component={CitiesList} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/CitiesContainer" component={CitiesContainer} />
          <Route path="/HolidayDetailsCard" component={HolidayDetailsCard} />
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

