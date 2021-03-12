import React, {useContext, useState} from 'react';
import { Redirect } from "react-router-dom";
import {AuthContext} from "../utils/Auth.js";
import Daily from "../components/Daily";
import Weekly from "../components/Weekly";
import Summary from "../components/Summary";

function Home() {
    const { currentUser } = useContext(AuthContext); // context API if user is logged in
    const [ display , setDisplay] = useState("daily");

    // render this section (daily, weekly, summary) when clicked on
    const handleDisplay = (content) => {
        console.log(content);
        setDisplay(content);
    }

    const handleRender = () => {
        if (display === "daily") {
            return <div>  <Daily />  </div>
        }
        else if(display === "weekly") {
            return <Weekly />
        }
        else if(display === "summary") {
            return <Summary />
        }
    }

    return (
        <div>
            <h2 style={{ color: "white", textAlign: "center", margin: '50px', paddingTop: "50px" }}>Workout Dashboard</h2>

            {/* If logged in, display summary of workouts, etc. */}
            {/* If not logged in, show Log In page */}
            {/* { currentUser ? (
                <>
                    <h1 style={{ color: 'white', textAlign: 'center', marginTop: "100px" }}> Home Page... </h1>
                    <Summary />
                </>
            ) : (
                // redirect to Account route/page
                <Redirect to="/account" />
            )}  */}

            <section style={{ textAlign: "center", margin: '30px' }}>
                <span style={{margin: '10px'}} onClick={() => handleDisplay("daily")} > 
                    <button style={{ color: "white", hover: "", background: "none", border: "none"}}>Daily</button>
                </span>
                <span style={{margin: '10px'}} onClick={() => handleDisplay("weekly")}> 
                    <button style={{ color: "white", hover: "", background: "none", border: "none"}}>Weekly</button>
                </span>
                <span style={{margin: '10px'}} onClick={() => handleDisplay("summary")}>
                    <button style={{ color: "white", hover: "", background: "none", border: "none"}}>Summary</button>
                </span>
            </section>

            <hr style={{ backgroundColor: "white", textAlign: "center", margin: '30px' }} />

            <section >
                {/* Render based on 'display' state */}
                {handleRender()}
            </section>


        </div>
        
    );
}

export default Home;