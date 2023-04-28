import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";




function CitiesList({ cities, cityClick }) {

    const cityRender = cities.map(city =>

        <div
            key={city.id}
            id={city.id} className="card" onClick={() => cityClick(city)}>
            <h4><b>{city.name}</b></h4>
            <img src={city.cityImage}  alt={city.name} className="city-image"/>  
        </div>
    )

    return (
        <div className="Cities-btn cards">
            {cityRender}
        </div>
    )
}
export default CitiesList;
