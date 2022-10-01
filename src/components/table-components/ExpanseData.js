import React from "react";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import GeneralModal from "../modal-component/GeneralModal";
import UpdateExpanseModal from "../modal-component/expanse-component/UpdateExpanseModal";
import DeleteExpanseModal from "../modal-component/expanse-component/DeleteExpanseModal";

const baseUrl = "https://localhost:3001/api/Expanse";
var list = [];
var count = 0;

function ExpanseData() {
  const [post, setPost] = React.useState([], []);

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (list.length === 0 && count === 0) {
    for (let i = 0; i < post.length; i++) {
      list.push(post[i]);
      count++;
    }
  }
  return (
    <>
      {list.map((item) => (
        <tr key={item.id}>
          <td>{item.expanseName}</td>
          <td>{item.expanseAmount}</td>
          <td>{item.expanseDateEdited}</td>
          <td>
            <GeneralModal
              modalButtonIcon={<FaPencilAlt color="blue" />}
              modalHeader="Update the expanse"
              modalBody={<UpdateExpanseModal id={item.id} />}
              size="lg"
              isLink={true}
            />
            {"  "}| {"  "}{" "}
            <GeneralModal
              modalButtonIcon={<FaTrashAlt color="red" />}
              modalHeader="Delete The Expanse"
              modalBody={
                <DeleteExpanseModal name={item.expanseName} id={item.id} />
              }
              isLink={true}
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default ExpanseData;
