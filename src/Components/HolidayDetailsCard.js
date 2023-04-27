import React from "react";

function HolidayDetailsCard({ selectedCity }) {

    const renderHolidays = selectedCity.holidays.map(holiday =>


        <div className="card" key={holiday.id}>
            <h3>{holiday.holidayName}</h3>
            <img src={holiday.holidayImage} alt={holiday.holidayName} className="holiday-image" />
            <p>{holiday.event}</p>
            <button>Add To Favorites</button>
        </div>)



    return (
        <div className="ui eight wide column">
            {renderHolidays}
        </div>
    )
}

export default HolidayDetailsCard;
