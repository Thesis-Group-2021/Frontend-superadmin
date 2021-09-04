import React from "react";
import "./Add.css";
import { useHistory } from "react-router-dom";
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

function Add() {
  const history = useHistory();

  return (
    <MainContainer style={{ marginLeft: "900px" }}>
      <Breadcrumb>
        <BreadcrumbItem
          onClick={() => history.push("/manage")}
          style={{ cursor: "pointer" }}
        >
          Manage
        </BreadcrumbItem>
        <BreadcrumbItem active>Add</BreadcrumbItem>
      </Breadcrumb>
      <h3>Add Institute</h3>
      <div className="mt-4" style={{ marginLeft: "240px" }}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Institute</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Univerisity</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Location</Label>
              <Input type="email" name="email" id="exampleEmail" />
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

export default Add;
