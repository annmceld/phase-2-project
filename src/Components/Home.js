import React from "react";


function Home () {
    return (
        <div className="Cities-Page">
            This is the homepage!

            <div className="Cities-btn">
                <div className="card">
                    <img alt="new york" />
                    <h4><b>New York City</b></h4>
                </div>
                <div className="card">
                    <img alt="los angeles" />
                    <h4><b>Los Angeles</b></h4>
                </div>
                <div className="card">
                    <img alt="new orleans" />
                    <h4><b>New Orleans</b></h4>
                </div>
                <div className="card">
                    <img alt="miami" />
                    <h4><b>Miami</b></h4>
                </div>
            </div>
        </div>

    )
}

export default Home;
