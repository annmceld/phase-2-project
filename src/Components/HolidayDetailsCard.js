import React from "react";
import { useLocation } from "react-router-dom"



function HolidayDetailsCard({ selectedCity, addHolidayToFavorites }) {
    const location = useLocation()
    
  const chosenCity = location.state.city
    
console.log(chosenCity)


    const renderHolidays = chosenCity.holidays.map(holiday =>


        <div className="card" key={holiday.id}>
            <h3>{holiday.holidayName}</h3>
            <img src={holiday.holidayImage} alt={holiday.holidayName} className="holiday-image" />
            <p>{holiday.event}</p>
            <button onClick={null}>Add To Favorites</button>
        </div>)



    return (
        <div className="ui eight wide column">{chosenCity.name}
            {renderHolidays}
        </div>
    )
}

export default HolidayDetailsCard;
