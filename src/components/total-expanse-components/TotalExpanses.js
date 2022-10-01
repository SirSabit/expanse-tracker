import React from "react";
import { Col, Row } from "react-bootstrap";

function TotalExpanses() {
  return (
    <div>
      <hr />
      <Row className="totalExpanses">
        <Col>Weekly Expanse: 5000 </Col>
        <Col>Monthly Expanse: 50000</Col>
        <Col>Yearly Expanse: 8000000</Col>
      </Row>
    </div>
  );
}

export default TotalExpanses;
