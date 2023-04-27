import React from "react";
import { useHistory } from "react-router-dom";
import CitiesContainer from "./CitiesContainer";


function Homepage() {

      const history = useHistory()
      function homePageClick() 
      {
      history.push("/CitiesContainer")
      }

  return (
    <div>
      <h1>FunFinder</h1>
      {
        <button onClick={() => homePageClick()}>Let's Get Started</button>
      }
    </div>
  );
}

export default Homepage;