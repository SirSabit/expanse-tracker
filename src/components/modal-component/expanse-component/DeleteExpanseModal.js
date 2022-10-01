import "../DeleteExpanseModal.css";
import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function DeleteExpanseModal(props) {
  function deleteOnClick() {
    var baseUrl = "https://localhost:3001";
    const url = `${baseUrl}/id?id=${props.id}`;
    axios.delete(url).then((res) => console.log(res));
  }

  return (
    <>
      <h5>Proceed to delete {props.name} Expanse?</h5>

      <Button
        variant="warning"
        className="btn-lg deleteButton"
        onClick={deleteOnClick}
      >
        Yes
      </Button>
      <Button variant="secondary" className="btn-lg deleteButton">
        No
      </Button>
    </>
  );
}

export default DeleteExpanseModal;
