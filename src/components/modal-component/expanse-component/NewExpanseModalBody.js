import React from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";

function NewExpanseModalBody() {
  var baseUrl = "https://localhost:3001/api/Expanse";
  const formik = useFormik({
    initialValues: {
      expanseName: "",
      expanseAmount: 0,
      expanseDate: Date,
    },
    onSubmit: (values) => {
      axios.post(baseUrl, values).then((res) => console.log(res));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expanse Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          name="expanseName"
          onChange={formik.handleChange}
          value={formik.values.expanseName}
        />
        <Form.Text className="text-muted">
          Please enter the title of the expanse.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expanse Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Amount"
          name="expanseAmount"
          onChange={formik.handleChange}
          value={formik.values.expanseAmount}
        />
        <Form.Text className="text-muted">
          Please enter the expanse of the expanse.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expanse Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter Date"
          name="expanseDate"
          onChange={formik.handleChange}
          value={formik.values.expanseDate}
        />
        <Form.Text className="text-muted">
          Please enter the date of the expanse.
        </Form.Text>
      </Form.Group>

      <button className="fillButton" type="submit">
        Submit
      </button>
    </Form>
  );
}

export default NewExpanseModalBody;
