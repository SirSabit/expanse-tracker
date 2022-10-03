import React from "react";
import { Col, Row } from "react-bootstrap";
import MonthlyTotalExpanse from "./MonthlyTotalExpanses/MonthlyTotalExpanse";
import WeeklyTotalExpanse from "./WeeklyTotalExpanses/WeeklyTotalExpanse";
import YearlyTotalExpanse from "./YearlyTotalExpanses/YearlyTotalExpanse";

function TotalExpanses() {
  return (
    <div>
      <hr />
      <Row className="totalExpanses">
        <Col>
          <WeeklyTotalExpanse />
        </Col>
        <Col>
          <MonthlyTotalExpanse />
        </Col>
        <Col>
          <YearlyTotalExpanse />
        </Col>
      </Row>
    </div>
  );
}

export default TotalExpanses;
