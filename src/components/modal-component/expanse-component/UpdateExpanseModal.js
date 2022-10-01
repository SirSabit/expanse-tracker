import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";

function UpdateExpanseModal(props) {
  var baseUrl = "https://localhost:3001";
  const url = `${baseUrl}/id?id=${props.id}`;

  const [data, setData] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      id: 0,
      expanseName: "",
      expanseAmount: 0,
      expanseDate: Date,
    },
    onSubmit: (values) => {
      let updateUrl = `${baseUrl}/api/Expanse`;
      axios.put(updateUrl, values).then((res) => {
        console.log(res);
        setData(res);
        console.log("data" + data);
      });
    },
  });

  React.useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      formik.values.id = props.id;
      formik.values.expanseName = res.data.expanseName;
      formik.values.expanseAmount = res.data.expanseAmount;
      formik.values.expanseDate = res.data.expanseDateEdited;
      setData(res.data);
    });
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expanse Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Expanse Title"
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
          placeholder="Enter Expanse Amount"
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
          placeholder="Enter Expanse Date"
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

export default UpdateExpanseModal;
