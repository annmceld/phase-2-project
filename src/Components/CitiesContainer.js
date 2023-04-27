import React, {useState, useEffect} from "react";
import CitiesList from "./CitiesList";
import Favorites from "./Favorites";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import HolidayDetailsCard from "./HolidayDetailsCard";

function CitiesContainer () {

    const baseUrl = 'http://localhost:3000/'
    const citiesUrl =  baseUrl + 'cities/'

    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)

    const cityClick = ( city ) => {
        
        setSelectedCity(city)
        // console.log(selectedCity)
    }
  
    const cityFetch = ( ) => { 

            fetch (citiesUrl)
            .then(r => r.json())
            .then(setCities)
    }

  useEffect(cityFetch, []) 


return (
    <div>
      <h2>Cities Container</h2>
      <CitiesList cities = {cities} cityClick = {cityClick} />
      {selectedCity ? <HolidayDetailsCard selectedCity = {selectedCity} /> : null}
    </div>
  );


}


export default CitiesContainer;
