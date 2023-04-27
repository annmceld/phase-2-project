import React, {useState, useEffect} from "react";
import CitiesList from "./CitiesList";
import Favorites from "./Favorites";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import HolidayDetailsCard from "./HolidayDetailsCard";
import NavBar from "./NavBar";

function CitiesContainer () {

    const baseUrl = 'http://localhost:3000/'
    const citiesUrl =  baseUrl + 'cities/'
    const favoritesUrl = baseUrl + 'favorites/'
    const history = useHistory()
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)
    const [isFavorited, setIsFavorited] = useState([])

    const cityClick = ( city ) => {
      
        setSelectedCity(city)


        // const cityThatWasSelected = selectedCity
      
        history.push("./HolidayDetailsCard", {city})

        // console.log(selectedCity)
    }
  
    const cityFetch = ( ) => { 

            fetch (citiesUrl)
            .then(r => r.json())
            .then(setCities)
    }

  useEffect(cityFetch, []) 

  function addHolidayToFavorites(holiday) {


setIsFavorited([...isFavorited, holiday])
  //   const postRequest = {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'accepts': 'application/json'
  //     },
  //     body: JSON.stringify(holiday)
  //   }

  //   fetch(favoritesUrl, postRequest)
  //   .then(r => r.json())
  //   .then(holidayData => 
  //   setIsFavorited([...isFavorited, holidayData]))
console.log(holiday)
  }


return (


    <div>
      <NavBar isFavorited =  {isFavorited}/>


      <h2>Cities Container</h2>
      <CitiesList cities = {cities} cityClick = {cityClick} />
  
    </div>
  );


}


export default CitiesContainer;
