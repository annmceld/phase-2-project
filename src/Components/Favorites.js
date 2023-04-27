import React from "react";

function Favorites ({isFavorited}) {

    console.log(isFavorited)

    const renderFavoriteHolidays = isFavorited.map(favorite =>
        <div className="card" key={favorite.id}>
        <h3>{favorite.holidayName}</h3>
        <img src={favorite.holidayImage} alt={favorite.holidayName} className="holiday-image" />
        <p>{favorite.event}</p>
    </div>
        )

    return (
        <div className="content">
            <h2>My Favorited Holidays</h2>
            {renderFavoriteHolidays}
        </div>
    )
}

export default Favorites;
