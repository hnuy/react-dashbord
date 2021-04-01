import Page from "../component/Page";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Alert,
} from "reactstrap";

const FormPage = () => {
  let [inputCheck, setInputCheck] = useState([""]);
  let [Title, settitle] = useState("");
  let [Description, setDescription] = useState("");

  return (
    <Page title="Add Task">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <Alert color="primary">
            <a
              class="nav-link active bg-secondary"
              aria-current="page"
              href="main-app"
            >
              Home
            </a>
          </Alert>
        </li>
        <li class="nav-item">
          <Alert color="secondary">
            <a
              class="nav-link active bg-success"
              aria-current="page"
              href="card"
            >
              Card
            </a>
          </Alert>
        </li>
        <li class="nav-item">
          <Alert color="warning">
            <a
              class="nav-link active bg-warning"
              aria-current="page"
              href="task"
            >
              Task
            </a>
          </Alert>
        </li>
        <li class="nav-item">
          <Alert color="danger">
            <a
              class="nav-link active bg-danger"
              aria-current="page"
              href="alert"
            >
              Alert
            </a>
          </Alert>
        </li>
        <li class="nav-item">
          <Alert color="primary">
            <a
              class="nav-link active bg-primary"
              aria-current="page"
              href="profile"
            >
              Profile
            </a>
          </Alert>
        </li>
      </ul>
      <Card>
        <CardHeader>Task</CardHeader>
        <CardBody>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input type="text" name="email" />
            </Col>
          </FormGroup>
          <FormGroup row></FormGroup>
          <FormGroup row>
            <Label for="exampleSelectMulti" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input type="text" name="selectMulti" multiple />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" multiple />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>
              Checklist
            </Label>
            <Col sm={10}>
              <form>
                {inputCheck.map((value, i) => (
                  <div key={i}>
                    <Input
                      value={value.title}
                      onChange={(e) =>
                        setInputCheck(
                          inputCheck.map((value, j) => {
                            if (i === j)
                              value = { id: i, checkitle: e.target.value };
                            return value;
                          })
                        )
                      }
                    />
                  </div>
                ))}
              </form>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}></Label>
            <Col sm={{ size: 10 }}>
              <button
                className="btn btn-primary"
                onClick={() => setInputCheck(inputCheck.concat(""))}
              >
                Add Checklist
              </button>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 6 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </CardBody>
      </Card>
    </Page>
  );
};

export default FormPage;
