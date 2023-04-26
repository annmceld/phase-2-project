import React from "react";
import HolidayDetailsCard from "./HolidayDetailsCard";
import { useLocation } from 'react-router-dom';

function HolidaysList () {

        const location = useLocation();
        const holidays = new URLSearchParams(location.search).get('holidays');

        console.log(holidays)
    
    return (
        <div className="ui grid container">
            
            <HolidayDetailsCard />
        </div>
    )
}

export default HolidaysList;
