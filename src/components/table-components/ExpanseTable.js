import "./ExpanseTableCss.css";
import React from "react";
import Table from "react-bootstrap/Table";
import ExpanseData from "./ExpanseData";

function ExpanseTable() {
  return (
    <div className="scroolTable">
      <Table className="table">
        <thead>
          <tr>
            <th>Expanse Title</th>
            <th>Expanse Amount</th>
            <th>Expanse Date</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <ExpanseData />
        </tbody>
      </Table>
    </div>
  );
}

export default ExpanseTable;
