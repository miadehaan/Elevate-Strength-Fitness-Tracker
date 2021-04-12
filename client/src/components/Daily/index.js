import React from "react";
import "./style.css";

function Daily() {
    let d = new Date();
    let todaysDate = d.getDate();
    let todaysMonth = d.getMonth();
    let todaysYear = d.getFullYear();
    let dayOfWk = "";

    let today = todaysMonth + "/" + todaysDate + "/" + todaysYear;

    switch (new Date().getDay()) {
        case 0:
            dayOfWk = "Sunday";
            break;
        case 1:
            dayOfWk = "Monday";
            break;
        case 2:
            dayOfWk = "Tuesday";
            break;
        case 3:
            dayOfWk = "Wednesday";
            break;
        case 4:
            dayOfWk = "Thursday";
            break;
        case 5:
            dayOfWk = "Friday";
            break;
        case 6:
            dayOfWk = "Saturday";
    }
    
    console.log(dayOfWk);


    return (
        <div className="daySection">
            <h2 id="dailyHeader">Daily</h2>

            {/* Today's date & day of the week */}
            <h6 className="dailyDate">
                {today}
            </h6>

            <h6 className="dailyDate">
                {dayOfWk}
            </h6>

            {/* Input new workout for this date */}


            {/* Display the saved workout for this day */}
            <div className="container">
                <table>
                    <tr>
                        <th>Compund Exercise</th>
                        <th>Weight (lbs)</th>
                        <th>Reps</th>
                        <th>Volume</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Exercise
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li>Squat</li>
                                    <li>Deadlift</li>
                                    <li>Bench Press</li>
                                </ul>
                            </div>
                        </td>

                        <td>
                            <form>
                                <input type="text" placeholder="weight"/>
                            </form>
                        </td>

                        <td>
                            <form>
                                <input type="text" placeholder="reps"/>
                            </form>
                        </td>

                        <td>
                            (calculate volume)
                            {/* {volume}     */}
                        </td>
                    </tr>

                </table>

                <div className="addNewBtn">
                    <button className="btn btn-light">
                        Add New Exercise
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Daily;