import React, {useContext} from 'react';
import Summary from "../components/Summary";
import { Redirect } from "react-router-dom";
import {AuthContext} from "../utils/Auth.js";

function Home() {
    const { currentUser } = useContext(AuthContext); // context API if user is logged in

    return (
        <div>
            {/* If logged in, display summary of workouts, etc. */}
            {/* If not logged in, show Log In page */}
            { currentUser ? (
                <>
                    <h1 style={{ color: 'white', textAlign: 'center', marginTop: "100px" }}> Home Page... </h1>
                    <Summary />
                </>
            ) : (
                // redirect to Account route/page
                <Redirect to="/account" />
            )} 


        </div>
        
    );
}

export default Home;