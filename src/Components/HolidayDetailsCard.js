import React from "react";

function HolidayDetailsCard({ selectedCity, addHolidayToFavorites }) {

    const renderHolidays = selectedCity.holidays.map(holiday =>


        <div className="card" key={holiday.id}>
            <h3>{holiday.holidayName}</h3>
            <img src={holiday.holidayImage} alt={holiday.holidayName} className="holiday-image" />
            <p>{holiday.event}</p>
            <button onClick={() => addHolidayToFavorites(holiday)}>Add To Favorites</button>
        </div>)



    return (
        <div className="ui eight wide column">
            {renderHolidays}
        </div>
    )
}

export default HolidayDetailsCard;
