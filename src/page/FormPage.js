import Page from "../component/Page";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Alert,
} from "reactstrap";

const FormPage = () => {
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
        <CardHeader>Form Grid</CardHeader>
        <CardBody>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  placeholder="with a placeholder"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  placeholder="password placeholder"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Select
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelectMulti" sm={2}>
                Select Multiple
              </Label>
              <Col sm={10}>
                <Input type="select" name="selectMulti" multiple />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Text Area
              </Label>
              <Col sm={10}>
                <Input type="textarea" name="text" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                File
              </Label>
              <Col sm={10}>
                <Input type="file" name="file" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <Label for="checkbox2" sm={2}>
                Radio
              </Label>
              <Col sm={10}>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" /> Option one is this and
                    that—be sure to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" /> Option two can be
                    something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio2" disabled /> Option three
                    is disabled
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="checkbox2" sm={2}>
                Checkbox
              </Label>
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2" /> Check me out
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Page>
  );
};

export default FormPage;
