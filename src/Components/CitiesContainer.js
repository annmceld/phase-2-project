import React from "react";
import CitiesList from "./CitiesList";
import Favorites from "./Favorites";
import Search from "./Search";
import HolidaysList from "./HolidaysList";

function CitiesContainer () {
    return (
        <div>
            This contains the seasons list, favorite cities, and search bar!
            <CitiesList />
            <HolidaysList />
            <Favorites />
            <Search />
        </div>
    )
}

export default CitiesContainer;
