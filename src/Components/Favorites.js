import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';


function Favorites() {

  const location = useLocation();
  const isFavorited = location.state?.favoritesList;
//   console.log(isFavorited)


    const renderFavoriteHolidays = isFavorited.map(favorite =>
        <div className="card" key={favorite.id}>
        <h3>{favorite.holidayName}</h3>
        <img src={favorite.holidayImage} alt={favorite.holidayName} className="holiday-image" />
        <p>{favorite.event}</p>
    </div>
        )



return (
        <div className="content">
            <NavBar/>
            <h2>My Favorited Holidays</h2>
            {renderFavoriteHolidays}
        </div>
    )
}

export default Favorites;
