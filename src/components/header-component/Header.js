import "./HeaderCss.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinux, FaPlus } from "react-icons/fa";
import GeneralModal from "../modal-component/GeneralModal";
import NewExpanseModalBody from "../modal-component/expanse-component/NewExpanseModalBody.js";

function Header() {
  return (
    <div>
      <Row className="headerClass">
        <Col>
          <h1>
            <FaLinux /> Expanse Tracker Web Application <FaLinux />
          </h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <GeneralModal
            isUpdate={false}
            modalButtonName="New Expanse"
            modalButtonIcon={<FaPlus />}
            modalHeader="Create a new expanse"
            modalBody={<NewExpanseModalBody />}
            size="lg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
