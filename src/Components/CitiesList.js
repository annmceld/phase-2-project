import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";




function CitiesList ({cities, cityClick}) { 
    

    
    const cityRender = cities.map(city => 

        <div 
        key={city.id}
        id={city.id} className="card" onClick={()=>cityClick(city)}>
            <img alt={city.name} />
            <h4><b>{city.name}</b></h4>
        </div> 
    )
        
   
   
   
   
   return (
        <div className="Cities-btn">
        {cityRender}
    </div>
    )
    }
export default CitiesList;
