import React, {useState, useEffect} from "react";
import CitiesList from "./CitiesList";
import Favorites from "./Favorites";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import HolidayDetailsCard from "./HolidayDetailsCard";

function CitiesContainer () {

    const baseUrl = 'http://localhost:3000/'
    const citiesUrl =  baseUrl + 'cities/'
    const favoritesUrl = baseUrl + 'favorites/'

    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)
    const [isFavorited, setIsFavorited] = useState([])

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

  function addHolidayToFavorites(holiday) {

    const postRequest = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(holiday)
    }

    fetch(favoritesUrl, postRequest)
    .then(r => r.json())
    .then(holidayData => 
    setIsFavorited([...isFavorited, holidayData]))
  }


return (
    <div>
      <h2>Cities Container</h2>
      <CitiesList cities = {cities} cityClick = {cityClick} />
      {selectedCity ? <HolidayDetailsCard selectedCity = {selectedCity} addHolidayToFavorites={addHolidayToFavorites}/> : null}
      <Favorites isFavorited={isFavorited}/>
    </div>
  );


}


export default CitiesContainer;
