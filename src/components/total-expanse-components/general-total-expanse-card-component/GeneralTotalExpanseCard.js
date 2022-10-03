import React from "react";
import Card from "react-bootstrap/Card";

function GeneralTotalExpanseCard(props) {
  return (
    <Card style={{ backgroundColor: "#778d45" }}>
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardBody}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GeneralTotalExpanseCard;
