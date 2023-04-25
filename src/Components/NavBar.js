import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "115px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div id="nav-bar">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/CitiesList"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                Cities
            </NavLink>
            <NavLink
                to="/FavoriteHolidays"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "black",
                }}
            >
                Favorite Holidays
            </NavLink>
        </div>
    );
}

export default NavBar;
