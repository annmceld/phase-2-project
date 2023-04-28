import React from "react";
import { useLocation } from "react-router-dom"
import { useState } from "react";
import NavBar from "./NavBar";
import Favorites from "./Favorites";

function HolidayDetailsCard() {
    const location = useLocation()
    const [favoritesList, setFavoritesList ] = useState([])
  const chosenCity = location.state.city
    



function addToFavorites (holiday) {
setFavoritesList([...favoritesList, holiday])
console.log(holiday)
}

    const renderHolidays = chosenCity.holidays.map(holiday =>


        <div className="card" key={holiday.id}>
            <h3>{holiday.holidayName} in {chosenCity.name}</h3>
            <img src={holiday.holidayImage} alt={holiday.holidayName} className="holiday-image" />
            <p><b>Events: </b>{holiday.event}</p>
            <button className="buttonClass" onClick={()=> addToFavorites(holiday)}>Add To Favorites!</button>
        </div>)



    return (
      

        <div className="ui eight wide column">
        <NavBar favoritesList = {favoritesList}></NavBar>
            <h1><b>{chosenCity.name}</b></h1>
            <div className="holiday-cards">
            {renderHolidays}
            </div>
        </div>
    )
}

export default HolidayDetailsCard;
