import React from "react";
import CitiesList from "./CitiesList";
import Favorites from "./Favorites";
import Search from "./Search";

function CitiesContainer () {
    return (
        <div>
            This contains the seasons list, favorite cities, and search bar!
            <CitiesList />
            <Favorites />
            <Search />
        </div>
    )
}

export default CitiesContainer;
