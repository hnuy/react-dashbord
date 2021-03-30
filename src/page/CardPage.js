import Page from "../component/Page";
import React from "react";
import { TodosCard } from "../component/Card";
import { todosData } from "../component/demos/dashboardPage";
import { Alert, Col, Row } from "reactstrap";

const CardPage = () => {
  return (
    <Page title="Cards">
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
            <a class="nav-link active bg-success" aria-current="page" href="card">
              Card
            </a>
          </Alert>
        </li>
        <li class="nav-item">
          <Alert color="warning">
            <a class="nav-link active bg-warning" aria-current="page" href="task">
              Task
            </a>
          </Alert>
        </li>
        <li class="nav-item">
          <Alert color="danger">
            <a class="nav-link active bg-danger" aria-current="page" href="alert">
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
      <Row>
        <Col>
          <TodosCard todos={todosData} />
        </Col>

        <Col>
          <TodosCard todos={todosData} />
        </Col>
        <Col>
          <TodosCard todos={todosData} />
        </Col>
      </Row>

      <Row>
        <Col>
          <TodosCard todos={todosData} />
        </Col>

        <Col lg="4" md="12" sm="12" xs="12">
          <TodosCard todos={todosData} />
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <TodosCard todos={todosData} />
        </Col>
      </Row>
    </Page>
  );
};

export default CardPage;
