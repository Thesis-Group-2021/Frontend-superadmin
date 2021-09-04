import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Button } from "@material-ui/core";
import MainContainer from "../../components/shared/MainContainer";

function Edit() {
  const history = useHistory();
  const { id } = useParams();
  const [institute, setInstitute] = useState("");
  const [univerisity, setUniverisity] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const admins = [
    {
      id: 1,
      institutes: "Addis Ababa Institute of Technology",
      univerisity: "Addis Ababab University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
    {
      id: 2,
      institutes: "Addis Ababa Institute of Technology",
      univerisity: "Addis Ababab University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
    {
      id: 3,
      institutes: "Addis Ababa Institute of Technology",
      univerisity: "Addis Ababab University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
    {
      id: 4,
      institutes: "Addis Ababa Institute of Technology",
      univerisity: "Addis Ababab University",
      email: "jdoe@mail.com",
      location: "Addis Ababa",
    },
  ];

  useEffect(() => {
    const adminData = admins.find((admin) => admin.id.toString() === id);
    setInstitute(adminData.institutes);
    setUniverisity(adminData.univerisity);
    setEmail(adminData.email);
    setLocation(adminData.location);
    // eslint-disable-next-line
  }, [id, admins]);

  return (
    <MainContainer>
      <Breadcrumb>
        <BreadcrumbItem
          onClick={() => history.push("/manage")}
          style={{ cursor: "pointer" }}
        >
          Manage
        </BreadcrumbItem>
        <BreadcrumbItem active>Edit</BreadcrumbItem>
      </Breadcrumb>
      <h3>Edit Institute {id}</h3>
      <div className="mt-4">
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Institute</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail1"
                value={institute}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Univerisity</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail2"
                value={univerisity}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail3"
                value={email}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Location</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail4"
                value={location}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="mt-5 d-flex justify-content-end">
          <Button variant="contained">Submit</Button>
        </div>
      </div>
    </MainContainer>
  );
}

export default Edit;
