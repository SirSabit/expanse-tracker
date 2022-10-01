import "../modal-component/GeneralModal.css";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function GeneralModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {props.isLink === true ? (
        <a onClick={handleShow}>
          {props.modalButtonName} {props.modalButtonIcon}
        </a>
      ) : (
        <button onClick={handleShow}>
          {props.modalButtonName} {props.modalButtonIcon}
        </button>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size={props.size}
      >
        <Modal.Header closeButton>{props.modalHeader}</Modal.Header>
        <Modal.Body>{props.modalBody}</Modal.Body>
      </Modal>
    </>
  );
}

export default GeneralModal;
