import React from "react";
import Card from "react-bootstrap/Card";

export default function Level({ id }) {
    // when you click on h3, app renders that level
    // return <h3>Level {id}</h3>
    return(
        <Card 
        border="info"
        className="level-card"
        >
            <Card.Body>
            <Card.Title>Level {id}</Card.Title>
            </Card.Body>
        </Card>
    )
}

