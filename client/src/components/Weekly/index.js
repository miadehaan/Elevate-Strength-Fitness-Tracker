import React from "react";
import "./style.css";
import {Card, Button} from "react-bootstrap";

function Weekly() {


    return (
        <div>
            <h2 id="weeklyHeader">Weekly</h2>

            <div className="container weekView">
                <Card className="dayCard">
                    <Card.Header>Sunday</Card.Header>
                    <Card.Body>
                        <Card.Title>Push Workout</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">View Full Workout</Button>
                    </Card.Body>
                </Card>
                
                <Card className="dayCard">
                    <Card.Header>Monday</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">View Full Workout</Button>
                    </Card.Body>
                </Card>
                
                <Card className="dayCard">
                    <Card.Header>Tuesday</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">View Full Workout</Button>
                    </Card.Body>
                </Card>
                
                <Card className="dayCard">
                    <Card.Header>Wednesday</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">View Full Workout</Button>
                    </Card.Body>
                </Card>
                
                <Card className="dayCard">
                    <Card.Header>Thursday</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">View Full Workout</Button>
                    </Card.Body>
                </Card>
                
                <Card className="dayCard">
                    <Card.Header>Friday</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">View Full Workout</Button>
                    </Card.Body>
                </Card>
                
                <Card className="dayCard">
                    <Card.Header>Saturday</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">View Full Workout</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Weekly;