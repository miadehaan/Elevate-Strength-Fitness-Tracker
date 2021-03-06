import React from 'react';
import Summary from "../components/Summary";

function Home() {

    return (
        <div>
            <h1 style={{ color: 'white', textAlign: 'center', marginTop: "100px" }}> Home Page... </h1>

            {/* If logged in, display summary of workouts, etc. */}
            <Summary />

            {/* If not logged in, show Log In page */}
            {/* <Login /> */}

        </div>
        
    );
}

export default Home;