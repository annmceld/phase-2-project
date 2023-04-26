import React from "react";

function HolidayDetailsCard ({selectedCity}) {

  const  renderHolidays = selectedCity.holidays.map( holiday => 
  
  
            <div className="card">
                <h3>{holiday.holidayName}</h3>
                <p>{holiday.event}</p>
            </div>  )
 


    return (
        <div className="ui eight wide column">
            {renderHolidays}
        </div>
    )
}

export default HolidayDetailsCard;
