import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import HolidaysList from "./HolidaysList";

const baseUrl = 'http://localhost:3000/'
const citiesUrl = baseUrl + 'cities/'

function CitiesList () {
    const history = useHistory()
    const [newYork, setNewYork] = useState([])

    const newYorkChange =  ( newYork ) => { 

        return <HolidaysList holidays={newYork} />}

    useEffect(fetchNewYork, [])

    function fetchNewYork() {
        fetch (citiesUrl + '1')
        .then (r => r.json())
        .then (newYorkData => setNewYork(newYorkData)) 
    }

    function clickToShowHolidays(newYork) {
    const changeNewYork = newYorkChange(newYork) 
    history.push(`/HolidaysList?holidays=${newYork}`);
    return changeNewYork;
    }

    return (
        <div className="Cities-btn">
        <div id="1" className="card" onClick={() => clickToShowHolidays(newYork)}>
            <img alt="new york" />
            <h4><b>New York City</b></h4>
        </div>
        <div id="2" className="card">
            <img alt="new orleans" />
            <h4><b>New Orleans</b></h4>
        </div>
        <div id="3" className="card">
            <img alt="los angeles" />
            <h4><b>Los Angeles</b></h4>
        </div>
        <div id="4" className="card">
            <img alt="miami" />
            <h4><b>Miami</b></h4>
        </div>
    </div>
    )
}
export default CitiesList;
