import React from "react";
import { NavLink } from "react-router-dom";
import { Route } from 'react-router-dom';
import Favorites from "./Favorites";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function NavBar ({isFavorited, favoritesList}) {
    return (
      <nav className ="nav">
        <a href ="/" className="site-title"> 
          FunFinder 
        </a>
        <ul>
          <li>
          <Link to=
    {{
             pathname: "/Favorites",
             state: { favoritesList : favoritesList }
    }}>
                    <button>Favorites</button>
          </Link>
          </li>
          </ul>
          </nav>
    )}
  
// function CustomLink ({href, children, ... props}){
//     const path = window.location.pathname
//     return (
//         <li>
//             <a href= {href} >{children}</a>
//         </li>
//     )


// }





// const linkStyles = {
//     display: "inline-block",
//     width: "115px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "grey",
//     textDecoration: "none",
//     color: "white",
// };

// function NavBar() {
//     return (
//          <div id="nav-bar">
//             <NavLink
//                 to="/"
//                 exact
//                 style={linkStyles}
//                 activeStyle={{
//                     background: "black",
//                 }}
//             >
//                 Home
//             </NavLink>
//             <NavLink
//                 to="/CitiesList"
//                 exact
//                 style={linkStyles}
//                 activeStyle={{
//                     background: "black",
//                 }}
//             >
//                 Cities
//             </NavLink>
//             <NavLink
//                 to="/FavoriteHolidays"
//                 exact
//                 style={linkStyles}
//                 activeStyle={{
//                     background: "black",
//                 }}
//             >
//                 Favorite Holidays
//             </NavLink>
//          </div>

//     );
// }

export default NavBar;
