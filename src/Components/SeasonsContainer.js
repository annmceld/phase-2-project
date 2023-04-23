import React from "react";
import SeasonsList from "./SeasonsList";
import FavoriteCities from "./FavoriteCities";
import Search from "./Search";

function SeasonsContainer () {
    return (
        <div>
            This contains the seasons list, favorite cities, and search bar!
            <SeasonsList />
            <FavoriteCities />
            <Search />
        </div>
    )
}

export default SeasonsContainer;
