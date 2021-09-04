import React, { useState } from "react";
import "./manageusers.css";
import {
  Table,
  Card,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Manage() {
  const history = useHistory();
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleDelete = () => setDeleteModal(!deleteModal);

  const admins = [
    {
      id: 1,
      institutes: "AAIT",
      univerisity: "Addis Ababa University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
    {
      id: 2,
      institutes: "AAIT",
      univerisity: "Addis Ababa University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
    {
      id: 3,
      institutes: "AAIT",
      univerisity: "Addis Ababa University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
    {
      id: 4,
      institutes: "AAIT",
      univerisity: "Addis Ababa University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
  ];

  const tableRecords = admins.map((admin) => (
    <tr className="center__row">
      <td>{admin.id}</td>
      <td>{admin.institutes}</td>
      <td>{admin.univerisity}</td>
      <td>{admin.email}</td>
      <td>{admin.location}</td>
      <td>
        <IconButton
          onClick={() => history.push(`/manageusers/edit/${admin.id}`)}
        >
          <Edit />
        </IconButton>
        <IconButton color="secondary" onClick={toggleDelete}>
          <Delete />
        </IconButton>
      </td>
    </tr>
  ));

  return (
    <div style={{ marginTop: "30px", marginLeft: "200px", padding: "0 30px" }}>
      <Modal isOpen={deleteModal} toggle={toggleDelete}>
        <ModalHeader toggle={toggleDelete}>Delete</ModalHeader>
        <ModalBody>Are you sure you want to delete this admin?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleDelete}>
            Cancel
          </Button>{" "}
          <Button color="secondary" onClick={toggleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>

      <Button
        id="Popover1"
        size="large"
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={() => history.push("/manageusers/add")}
      >
        Add
      </Button>
      <div className="table mt-5">
        <card>
          <CardHeader>Insitutes</CardHeader>
        </card>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Institute</th>
              <th>Univerisity</th>
              <th>Email</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{tableRecords}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default Manage;
