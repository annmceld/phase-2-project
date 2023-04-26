import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Homepage() {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  function homePageClick() {
    setClicked(true);
    history.push("/CitiesList");
  }

  return (
    <div>
      <h1>Welcome to my website!</h1>
      {!clicked && (
        <button onClick={() => homePageClick()}>Click here to enter</button>
      )}
    </div>
  );
}

export default Homepage;