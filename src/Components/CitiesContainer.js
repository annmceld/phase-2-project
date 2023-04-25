import React from "react";
import CitiesList from "./CitiesList";
import FavoriteHolidays from "./FavoriteHolidays";
import Search from "./Search";

function CitiesContainer () {
    return (
        <div>
            This contains the seasons list, favorite cities, and search bar!
            <CitiesList />
            <FavoriteHolidays />
            <Search />
        </div>
    )
}

export default CitiesContainer;
